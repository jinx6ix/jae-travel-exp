import dotenv from 'dotenv'
import express from 'express'
import next from 'next'
import nextBuild from 'next/dist/build'
import path from 'path'
import payload from 'payload'

import generateSitemap from './app/genarateSitemap' // Ensure this path is correct

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

const app = express()
const PORT = process.env.PORT || 3000

const start = async (): Promise<void> => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      payload.logger.info(`Next.js is now building...`)
      //@ts-expect-error
      await nextBuild(path.join(__dirname, '../'))
      process.exit()
    })

    return
  }

  const nextApp = next({
    dev: process.env.NODE_ENV !== 'production',
  })

  const nextHandler = nextApp.getRequestHandler()

  // Adapt the sitemap handler for Express
  app.get('/sitemap.xml', async (req, res) => {
    try {
      const sitemap = await generateSitemap() // Generate the sitemap
      res.setHeader('Content-Type', 'application/xml')
      res.send(sitemap) // Use send instead of write/end for simplicity
    } catch (error: unknown) {
      console.error('Error generating sitemap:', error)
      res.status(500).send('Internal Server Error')
    }
  })
  app.get('/robots.txt', (req, res) => {
    const robotsTxt = `
      User-agent: *
      Disallow: /admin/
      
      Sitemap: ${process.env.NEXT_PUBLIC_SERVER_URL}/sitemap.xml
    `;
    res.setHeader('Content-Type', 'text/plain');
    res.send(robotsTxt);
  });

  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    payload.logger.info('Starting Next.js...')

    app.listen(PORT, async () => {
      payload.logger.info(`Next.js App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`)
    })
  })
}

start()
