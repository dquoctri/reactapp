import React, { Fragment } from "react"
import PageTitle from "components/common/page-title.component"
import { CustomPageProps } from "../page.type"
import HeroSection from './components/HeroSection';
import AboutTOEIC from './components/AboutTOEIC';
import StudyMaterials from './components/StudyMaterials';
import PracticeTests from './components/PracticeTests';
import Testimonials from './components/Testimonials';
import PricingPlans from './components/PricingPlans';
import FAQ from './components/FAQ';
import NewsletterSignup from './components/NewsletterSignup';
import BlogSection from './components/BlogSection';
import UserProgressTracker from './components/UserProgressTracker';


const Home = ({ title, description }: CustomPageProps) => {
  return (
    <Fragment>
      <PageTitle title={title ? title : "Home"} />
      <HeroSection />
      <AboutTOEIC />
      <StudyMaterials />
      <PracticeTests />
      <Testimonials />
      <PricingPlans />
      <FAQ />
      <NewsletterSignup />
      <BlogSection />
      <UserProgressTracker />
    </Fragment>
  )
}

export default Home
