'use client'
import Image from 'next/image'
import './index.scss'
import { Tabs } from './ui/tabs'

export default function TabsD() {
  const tabs = [
    {
      title: 'Wildlife Safaris',
      value: 'Wildlife Safaris',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded2-xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Wildlife Safaris TAB</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'BirdWatching Safaris',
      value: 'BirdWatching Safaris',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded2-xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900">
          <p>BirdWatching Safaris TAB</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Migration Safaris',
      value: 'Migration Safaris',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Migration Safaris TAB</p>
          <DummyContent />
        </div>
      ),
    },
  ]

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  )
}

const DummyContent = () => {
  return (
    <Image
      src="/assets/images/Destinations-Banner.jpg"
      alt="JaeImages"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  )
}
