import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Page } from '../../../payload/payload-types'
import { staticHome } from '../../../payload/seed/home-static'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import Accordion from '../../_components/Accordion'
import { Blocks } from '../../_components/Blocks'
import CardFilterComponent from '../../_components/CardFilter'
// import Categories from '../../_components/Categories'
import CardComponent from '../../_components/CategoryCard'
// import { Hero } from '../../_components/Hero'
import QuickBooking from '../../_components/QuickEnquiry'
import Reviews from '../../_components/Reviews'
import SlidingHero from '../../_heros/SlidingHero'
import { generateMeta } from '../../_utilities/generateMeta'
import NotFound from '../not-found'
import { InfiniteMovingCard } from '../../_components/Ui/infinitemovingcards'
import GetInTouch from '../../_components/GetInTouch'
import BookCarForm from '../../_components/BookCarForm'
import TopDestination from '../../_components/Destinations'
import InquiryForm from '../../_components/InquiryForm'
import SafariTipsAccordion from '../../_components/SafariTipsAccordion'
import SafariTipsAccordionNoImage from '../../_components/SafariTipsAccordion/SafariTipsAccordionNoImage'
import CardStyle from '../../_components/RoundCards/CardComponent'
import EarthYearComponent from '../../_components/AnimalCard'
import FourCardFeatureSection from '../../_components/FeatureCards'
import HeroSection from '../../_components/HeroSection'
import ExpandableFloatingActionButton from '../../_components/ChatInterface/FloatingAction/ExpandableFloatingActionButton'
// Payload Cloud caches all files through Cloudflare, so we don't need Next.js to cache them as well
// This means that we can turn off Next.js data caching and instead rely solely on the Cloudflare CDN
// To do this, we include the `no-cache` header on the fetch requests used to get the data for this page
// But we also need to force Next.js to dynamically render this page on each request for preview mode to work
// See https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// If you are not using Payload Cloud then this line can be removed, see `../../../README.md#cache`
export const dynamic = 'force-dynamic'
// Define Props for InfiniteMovingCards Component
type Item = {
  quote: string
  name: string
  title: string
}
const dummyItems = [
  {
    quote:
      'Absolutely breathtaking! Jae Safaris delivered an unforgettable adventure filled with stunning wildlife and natural wonders.',
    name: 'Sarah Adams',
    title: 'Wildlife Enthusiast',
  },
  {
    quote:
      'Jae Safaris exceeded all expectations! Their expert guides provided an educational and exhilarating experience through the heart of Africa.',
    name: 'David Wilson',
    title: 'Nature Lover',
  },
  {
    quote:
      'An incredible journey with Jae Safaris! From sunrise game drives to sunset safaris, every moment was magical.',
    name: 'Sophia Roberts',
    title: 'Outdoor Explorer',
  },
  {
    quote:
      'Jae Safaris offers the ultimate wildlife adventure! We encountered the Big Five and witnessed the wonders of nature up close.',
    name: 'Michael Thompson',
    title: 'Adventure Seeker',
  },
  {
    quote:
      'Unforgettable memories made with Jae Safaris! Their passion for wildlife conservation and commitment to responsible tourism shines through in every experience.',
    name: 'Emma Turner',
    title: 'Conservationist',
  },
  {
    quote:
      'Traveling with Jae Safaris was a dream come true! Their knowledgeable guides made the journey both educational and exhilarating.',
    name: 'Daniel Evans',
    title: 'Wildlife Advocate',
  },
  {
    quote:
      "Jae Safaris provided an unparalleled safari experience! We were treated to breathtaking landscapes and unforgettable encounters with Africa's iconic wildlife.",
    name: 'Olivia Baker',
    title: 'Nature Enthusiast',
  },
  {
    quote:
      'A journey of a lifetime with Jae Safaris! Their dedication to eco-friendly practices and sustainable tourism is commendable.',
    name: 'Jacob Clark',
    title: 'Environmental Activist',
  },
  {
    quote:
      'Jae Safaris offers the best of African wildlife! Their attention to detail and personalized service made our safari adventure truly special.',
    name: 'Isabella White',
    title: 'Animal Lover',
  },
  {
    quote:
      "Exhilarating and educational! Jae Safaris provided an immersive experience that deepened my appreciation for Africa's natural beauty.",
    name: 'Nathan Green',
    title: 'Adventure Enthusiast',
  },
]

const dummySmallSliderImages = [
  {
    media: '/assets/images/Best-Of-Kenya-Highlight-Safari-Kenya-1024x683.jpg',
    title: 'Small Slider Image 1',
    id: '1',
  },
  {
    media: '/assets/images/Best-Of-Kenya-Highlight-Safari-Kenya-1024x683.jpg',
    title: 'Small Slider Image 2',
    id: '2',
  },
  {
    media: '/assets/images/Best-Of-Kenya-Highlight-Safari-Kenya-1024x683.jpg',
    title: 'Small Slider Image 3',
    id: '3',
  },
  {
    media: '/assets/images/Best-Of-Kenya-Highlight-Safari-Kenya-1024x683.jpg',
    title: 'Small Slider Image 5',
    id: '4',
  },
  {
    media: '/assets/images/Best-Of-Kenya-Highlight-Safari-Kenya-1024x683.jpg',
    title: 'Small Slider Image 6',
    id: '5',
  },
  {
    media: '/assets/images/Best-Of-Kenya-Highlight-Safari-Kenya-1024x683.jpg',
    title: 'Small Slider Image 7',
    id: '6',
  },
  {
    media: '/assets/images/Best-Of-Kenya-Highlight-Safari-Kenya-1024x683.jpg',
    title: 'Small Slider Image 8',
    id: '7',
  },
  {
    media: '/assets/images/Best-Of-Kenya-Highlight-Safari-Kenya-1024x683.jpg',
    title: 'Small Slider Image 9',
    id: '8',
  },
]
const selfdrivehicle = [
  {
    Heading: 'HOW TO RESERVE A SELF-DRIVE VEHICLE',
    Description:
      'We usually require the following information from you when you hire a vehicle from us. 1. Car Hire Dates/ Number of Days 2. Number of Persons in the vehicle 3. Who will be driving the vehicle  4. Vehicle Pick up and Drop off Location 5. Brief Itinerary of where you will be travelling',
  },
  {
    Heading: ' FEES & LIABILITY',
    Description:
      'For SELF DRIVE hire, kindly note that there is an excess liability of USD. 3,500.00 applicable for the vehicle.  This is just a precautionary measure we take in case our vehicle is damaged, involved in an accident, or stolen while in a client’s possession. Windscreen & tyres are not covered and in case of damage this would be payable extra. (This is applicable to the excess liability waiver as well). We shall run your CREDIT / DEBIT card upon delivery of the vehicle, to hold the amount.The excess liability of USD. 3,500.00 will only be charged if the vehicle is stolen or in case of an accident and the vehicle is damaged. Otherwise, we only charge the actual damage costs IF ANY. As earlier advised, this is just a precautionary measure we take in case our vehicle is damaged, involved in an accident, or stolen while in a client’s possession.  Should there be no loss / damage of the vehicle, then no charges to apply. You also have the OPTION of foregoing the excess liability by purchasing an excess liability waiver insurance. Pls. find these costs below: 3 – 11 DAYS: 35.00 per day 12 – 22 DAYS: 25.00 per day 23 days or more: 15.00 per day FUEL – we will provide the vehicle FULL TANK and kindly request the client to return it Full Tank in Nairobi. Otherwise a full tank is chargeable. The land cruiser has two tanks each with a capacity of 90 litres. Upon handing over of the vehicle you will receive a copy of the car hire agreement that you have signed and a copy will be handed over to you.',
  },
  {
    Heading: 'REQUIREMENTS UPON CONFIRMATION',
    Description:
      'Copy of International Driver’s License Passport Copy of the Person driving the vehicle Signed Car Hire Agreement (can be done upon arrival) – pls. download here Option of excess liability of USD. 3,500.00 / excess liability waiver chosen FUEL – we will provide the vehicle FULL TANK and kindly request the client to return it Full Tank in Nairobi. Otherwise a full tank is chargeable. The land cruiser has two tanks each with a capacity of 90 litres. The excess liability of USD. 3,500.00 will only be charged if the vehicle is stolen or in case of an accident and the vehicle is damaged. Otherwise, we only charge the actual damage costs IF ANY. As earlier advised, this is just a precautionary measure we take in case our vehicle is damaged, involved in an accident, or stolen while in a client’s possession. Should there be no loss / damage of the vehicle, then no charges to apply. FOR ROOF TOP CAMPING: a deposit fee of USD. 200 applies for the equipment rented. Should there be no damage / loss to the equipment, this deposit is REFUNDED upon return of the equipment. This fee can be paid in cash or by credit card upon hand over of the vehicle. The refund will be given upon return of the vehicle IF all items are returned in proper condition.',
  },
]
const safaritips = [
  {
    Heading: 'Visit the Masai Mara',
    Description: 'We recommend that you do a trip to the famous Masai Mara Game Reserve ! Minimum stay should be 2 nights and certainly possible ALL YEAR round not just during the Annual Great Migration ! River crossings are fantastic but so is the sheer density of wildlife to be encountered in the Mara. Stay in a gold eco-rated LUXURY TENTED CAMP and experience an authentic Safari Experience under Canvas ! Close to nature and surrounded by wildlife, welcoming staff and excellent home cooked meals await you at MARA BUSH CAMP & PRIVATE WING !',
  },
  {
    Heading: ' Customize your Safari',
    Description: 'Let us help you Create as Special and Memorable Safari for you and your Partner / Family or Group! We have a team of Destination Experts who will tailor make your personal itinerary, outline the cost of your trip and handle all your ground arrangements in Kenya in the most professional manner. Lean back and let us take care of your hotel bookings, transfer arrangements, transportation by road or air to parks and game reserves, arrange your park fees in advance and offer you the most outstanding Game Drive, Safari excursions and activities you have dreamed of ! Whether you are looking for a Photographic Safari, a honeymoon trip, a Family Safari, Beach Holiday or a Combination Trip to Uganda, Tanzania or Rwanda, we are here for YOU ! No fixed departure dates but all is tailored to your needs, budget and interests !',
  },
  {
    Heading: 'Keep an open mind',
    Description: 'A Safari is a “journey” and it is best to keep an open mind ! Have no expectations of “specific game sightings” but take in nature and its wonderful wildlife JUST the way it is ! You will be amazed by what you will see and discover ! Birds, insects, mammals, marine life and stunning landscapes, friendly people and different tribes – a unique and memorable experience !',
  },
  {
    Heading: 'Travel OFF the beaten track',
    Description: 'You may not be a first time Kenya visitor and places such as the Mara Game Reserve are no longer NEW to you – you are looking for more exciting and different ventures ! A Tribal / Cultural Safari or a PRIVATE MOBILE CAMPING SAFARI may be what you are looking for ! Lake Turkana, Kenya’s furthest and most Northern Desert Lake beckon and call for an Adventure that is unique in landscape and Culture. Meet Tribes such as the Rendille, Gabra and Turkana in their authentic homes !',
  },
  {
    Heading: 'PRIVATE SAFARIS are often the BEST way to go',
    Description: 'A PRIVATE SAFARI is often the BEST way to go ! Usually, more expensive than Group Departures but certainly worth the extra spending ! You will have your own guide & vehicle throughout the trip and experience Kenya by road in your custom safari built 4 wheel drive vehicle ! Guests usually form special bonds with our Safari Guides who are professional, knowledgeable and safe Drivers, taking care of you from the start of your Safari to the last moment of waving good bye at the airport. You may add flights in certain regions to shorten travel timings your Travel Expert will advise you of everything you need to know !',
  },
  {
    Heading: 'Start with KENYA for a first time visitor to the continent',
    Description: 'For the FIRST TIME VISITOR, Kenya is definitely the best destination to start with as it offers a range of accommodations to suit all budgets but also exciting game reserves, National Parks and stunning beaches to round off the perfect Safari. However, IF you have traveled throughout Kenya already extensively and have discovered lesser visited places such as Meru National Park, Laikipia, Solio Game Reserve and the Aberdares, Mount Kenya and Lake Baringo / Bogoria, we do recommend an extension Safari into other parts of East Africa ! Great Destinations are Uganda / Rwanda for Gorilla Trekking as well as Tanzania for a different Safari Experience !',
  },
  {
    Heading: 'HIGH END luxury accommodation is possible in Kenya',
    Description: 'Top END LUXURY or HIGH END luxury is certainly a possibility in Kenya and with properties such as Mara Bush Camp Private Wing (clickable), Olonana Luxury Camp, Laragai House, Segera Retreat, Alfajiri, Loisaba and our Elewana Sky Safari, we’d be happy to tailor make the perfect Kenyan Luxury Safari for you !',
  },

]

const gifUrls = [
  'https://media.giphy.com/media/1jl7gAIvbOoFx7GZBc/giphy.gif',
  'https://media.giphy.com/media/OPQi3UuK1KesElwIeE/giphy.gif',
  'https://media.giphy.com/media/YlAuPqtjwlSyzy8PZU/giphy.gif',
  'https://media.giphy.com/media/5kFxVCoRl3WhuK7wbQ/giphy.gif',
  'https://media.giphy.com/media/1Y1EUUV4mkglG/giphy.gif',
  'https://media.giphy.com/media/d3bSUSvCDAtjFO1O/giphy.gif',
  'https://media.giphy.com/media/3otPoKjyviyRHSyJS8/giphy.gif',
  'https://media.giphy.com/media/yHc0KdDykO6Kk/giphy.gif',
  'https://media.giphy.com/media/26BGsBUQ9Qi7c7qTu/giphy.gif',
]
export default async function Page({ params: { slug = 'home' } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })
    
  } catch (error) {
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // so swallow the error here and simply render the page with fallback data where necessary
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }
  
  // if no `home` page exists, render a static one using dummy content
  // you should delete this code once you have a home page in the CMS
  // this is really only useful for those who are demoing this template
  if (!page && slug === 'home') {
    page = NotFound()
  }

  if (!page) {
    return NotFound()
  }

  const { hero, layout, Accordion: accordionData, HighlightImages, Categories, Destinations } = page
  const noHighlightImages = !HighlightImages || HighlightImages.length === 0
  const noCategories = !Categories || Categories.length === 0
  const noAccordionData = !accordionData || accordionData.length === 0
  const noDestination = !Destinations || Destinations.length === 0

  return (
    <React.Fragment>
      {/* <Hero {...hero} /> */}
      {!noHighlightImages && (
        <SlidingHero slidingImages={HighlightImages} smallSliderImages={dummySmallSliderImages} />
      )}
      {/* HERO SECTION WITH ANIMATED gIFS */}

      {slug === 'tours' && (
        <HeroSection
          gifUrls={gifUrls}
          interval={10} // Interval in seconds
          title="Best Tours To Visit"
          subtitle="A brief description of your content"
          buttonText="Explore"
          buttonLink="/post"
        />
      )}

      {slug === 'destinations' && (
        <HeroSection
          gifUrls={gifUrls}
          interval={10} // Interval in seconds
          title="Best Destinations In East Africa"
          subtitle="A brief description of your content"
          buttonText="Explore"
          buttonLink="/projects"
        />
      )}

      {slug === 'vehicle-hire' && (
        <HeroSection
          gifUrls={gifUrls}
          interval={10} // Interval in seconds
          title="Book A Vehicle"
          subtitle="A brief description of your content"
          buttonText="Book Now"
          buttonLink="/book-a-vehicle"
        />
      )}

      {slug === 'our-safaris' && (
        <HeroSection
          gifUrls={gifUrls}
          interval={10} // Interval in seconds
          title="Explore Our Wide Range Of African Safaris"
          subtitle="A brief description of your content"
          buttonText="Explore"
          buttonLink="/our-safaris"
        />
      )}
      {slug === 'about-us' && (
        <HeroSection
          gifUrls={gifUrls}
          interval={10} // Interval in seconds
          title="About Jae Travel Expendition"
          subtitle="A brief description of your content"
          buttonText="Get To Know Us"
          buttonLink="/about-us"
        />
      )}
       {slug === 'contact-us' && (
        <HeroSection
          gifUrls={gifUrls}
          interval={10} // Interval in seconds
          title="Talk To Us"
          subtitle="A brief description of your content"
          buttonText="Message"
          buttonLink="/contact-us"
        />
      )}

       {/* HERO SECTION WITH ANIMATED gIFS */}

      {slug === 'contact-us' && <GetInTouch />}

      {slug === 'tours-filter' && <CardFilterComponent />}
      {slug === 'quick-booking-form' && <QuickBooking />}
      {slug === 'home' && <QuickBooking />}
      {!noCategories && <CardComponent categories={Categories} />}

      {!noDestination && <TopDestination categories={Destinations} />}

      <Blocks
        blocks={layout}
        disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'}
      />
      {slug === 'vehicle-hire-form' && <BookCarForm />}
      {slug === 'vehicle-hire' && <BookCarForm />}
      {/* <InfiniteMovingCards /> */}
      {/* <BentoGridLayout/> */}
      {/* <TabsD /> */}
      {slug === 'home' && <CardStyle />}

      {slug === 'our-safaris' && <SafariTipsAccordion accordion={selfdrivehicle} />}
      {slug === 'our-safaris' && <SafariTipsAccordionNoImage accordion={safaritips} />}
      {slug === 'tours-filter' && <EarthYearComponent />}
      <hr />
      <InfiniteMovingCard items={dummyItems} />

      {slug === 'home' && <Reviews />}

      {!noAccordionData && <Accordion accordion={accordionData} />}
      {slug === 'tours' && <InquiryForm />}
      <ExpandableFloatingActionButton />
      <FourCardFeatureSection />
    </React.Fragment>
  )
}

export async function generateStaticParams() {
  try {
    const pages = await fetchDocs<Page>('pages')
    return pages?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    // don't throw an error if the fetch fails
    // this is so that we can render static fallback pages for the demo
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // in production you may want to redirect to a 404  page or at least log the error somewhere
  }

  if (!page) {
    if (slug === 'home') page = staticHome
  }

  return generateMeta({ doc: page })
}