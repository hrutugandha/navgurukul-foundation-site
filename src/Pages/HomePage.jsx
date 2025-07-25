import React from 'react'
import ProgramCard from '../Components/ProgramCard';
import TestimonialCard from '../Components/TestimonialCard';
import BlogCard from '../Components/BlogCard';
import PlacementsStatusCard from '../Components/PlacementsStatusCard';
import CampusIntro from '../Components/CampusIntro';
import CouncilMembersCard from '../Components/CouncilMembersCard';
import EnrollmentSection from '../Components/EnrollmentSection';
import ContactSection from '../Components/ContactSection';

const HomePage = () => {
  return (
    <>
    <CampusIntro/>
    <CouncilMembersCard/>
    <ProgramCard />
    <TestimonialCard/>
    <BlogCard/>
    <PlacementsStatusCard/>
    <EnrollmentSection/>
    <ContactSection/>
    </>
  )
}

export default HomePage