'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Category, Footer, Media } from '../../../../payload/payload-types'
// import { ThemeSelector } from '../../../_providers/Theme/ThemeSelector'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import { Button } from '../../Buttonn'
import { Gutter } from '../../Gutter'

// import { HR } from '../../HR'
// import { CMSLink } from '../../Link'
import classes from './index.module.scss'
import NewsLetterForm from '../../NewsletterForm'

type FooterComponentProps = {
  footer: Footer
  categories: Category[] // Specify that categories is an array of Category objects
}
// const FooterComponent = ({ footer, categories }: FooterComponentProps) => {
//   const pathname = usePathname()
//   const navItems = footer?.navItems || []
//   const category = footer?.Categories || []
//   console.log('cate', category)

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()
  const navItems = footer?.navItems || []
  const categories = footer?.Categories || []
  // console.log(categories)

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.footerLogo}>
            <Link href="/">
              <Image src="https://ik.imagekit.io/6cga8hi9z/JaeTravels/JaeLogo_2qEwem6c6.png" className={classes.logoImg} alt="logo" width={150} height={150} />
            </Link>
          </div>
          <div className={classes.footerFlex}>
            <div className={classes.TalkToUs}>
              <p className={classes.TopFooter}>
                Talk To us Today:<span className={classes.black}>(+254) 726 485 226</span>
              </p>
            </div>
            <NewsLetterForm />
          </div>

          <div className={classes.wrap}>
            <div className={classes.footerWrapper}>
              <div>
                <h3>Our Website</h3>
                <hr />
                <ul>
                  <li>
                    <Link href={'/posts'} className={classes.title}>
                      <span className={classes.footerLabel}></span>All Holiday Ideas
                    </Link>
                  </li>
                  <li>
                    <Link href={'/about-us'} className={classes.title}>
                      <span className={classes.footerLabel}></span>About Us
                    </Link>
                  </li>
                  <li>
                    <Link href={'/blog'} className={classes.title}>
                      <span className={classes.footerLabel}></span>Blog
                    </Link>
                  </li>
                  <li>
                    <Link href={'/contact-us'} className={classes.title}>
                      <span className={classes.footerLabel}></span>Contact Us
                    </Link>
                  </li>
                </ul>
                <div className={classes.Socials}>
                  <p>Follow US On</p>
                  <div className={classes.socialLinks}>
                    {navItems.map(item => {
                      const icon = item?.link?.icon as Media

                      return (
                        <Button
                          key={item.link.label}
                          el="link"
                          href={item.link.url}
                          newTab={true}
                          className={classes.socialLinkItem}
                        >
                          <Image
                            src={icon?.imagekit?.url}
                            alt={item.link.label}
                            width={24}
                            height={24}
                            className={classes.socialIcon}
                          />
                        </Button>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className={classes.Footercategories}>
                <h3>Destinations</h3>
                <hr />
                {categories.map((category: Category, index: number) => (
                  <li className={classes.footerlist} key={index}>
                    <span>
                    <Link
                        className={classes.title}
                        href={`/${category?.CustomUrl}`}
                        passHref
                      >
                        {' '}
                        {category.title}
                      </Link>
                    </span>
                  </li>
                  
                ))}
              </div>
              {/* <ThemeSelector /> */}
              <div className={classes.InformationSection}>
                <h3>Experiences</h3>
                <hr />
                <ul className={classes.title}>
                  <li>
                    <Link
                      className={classes.title}
                      href={'/posts/best-of-kenya--tanzania'}
                    >
                      Big 5 Safari
                    </Link>
                  </li>
                  <li>
                    <Link className={classes.title} href={'/posts/relaxation-at-the-beach'}>
                      Beach
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={classes.title}
                      href={'posts/discover-uganda'}
                    >Gorilla Trekking</Link>
                  </li>
                  <li>
                    <Link
                      className={classes.title}
                      href={'/posts/classic-sky-tanzania'}
                    >
                      Self Drive
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={classes.InformationSection}>
                <h3>Our Safaris</h3>
                <hr />
                <ul className={classes.title}>
                  <li>
                    <Link
                      className={classes.title}
                      href={'/photographic-safaris'}
                    >
                      Photographic Safari
                    </Link>
                  </li>
                  <li>
                    <Link className={classes.title} href={'/conservation-based-safari'}>
                      Conservation Based
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={classes.title}
                      href={'/tribal--cultural-safaris'}
                    ></Link>
                  </li>
                  <li>
                    <Link
                      className={classes.title}
                      href={'/tribal--cultural-safaris'}
                    >
                      Tribal & cultural
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={classes.title}
                      href={'/family-safaris'}
                    >
                      Family Safaris
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={classes.title}
                      href={'/featured-safaris'}
                    >
                      Featured Safari
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={classes.title}
                      href={'/beach-holiday-safaris'}
                    >
                      Beach Holidays
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={classes.title}
                      href={'/posts'}
                    >
                      Day Excursions
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div className={classes.paymentMethod}>
                <p>Payment Method</p>
                <Image src={'/mpesa-image.png'} alt={'mpesa image'} width={50} height={20} />
              </div> */}
            </div>
            <div className={classes.copyright}>
              <p>{footer?.copyright}</p>

              {/* {navItems.map(({ link }, i) => {
                return <CMSLink key={i} {...link} />
              })} */}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
