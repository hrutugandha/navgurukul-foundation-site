
import React from 'react';
import { useState, useEffect } from 'react';

// HeroCarousel.jsx
    const HeroCarousel = ({ slides }) => {
      const [currentSlide, setCurrentSlide] = useState(0);
      
    //   useEffect(() => {
    //     const timer = setInterval(() => {
    //       setCurrentSlide((prev) => (prev + 1) % slides.length);
    //     }, 5000);
    //     return () => clearInterval(timer);
    //   }, [slides.length]);
      return (
        <>
        <div className="relative h-[80vh] min-h-[500px] mt-16">
        <div class="carousel-slide active" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');">
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center px-6 max-w-4xl">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Transform Your Future at Navgurukul</h1>
                    <p class="text-xl text-gray-200 mb-8">Learn coding, business and design skills in our innovative peer-learning community</p>
                    <a href="programs.html" class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg">Explore Programs</a>
                </div>
                  </div>
        </div>
        <div class="carousel-slide" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');">
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center px-6 max-w-4xl">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Real-World Projects & Hackathons</h1>
                    <p class="text-xl text-gray-200 mb-8">Apply your skills through collaborative projects and compete in exciting tech challenges</p>
                    <a href="blog.html" class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg">See Student Work</a>
                </div>
            </div>
        </div>
        <div class="carousel-slide" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D3D&auto=format&fit=crop&w=2071&q=80');">
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center px-6 max-w-4xl">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Community & Career Support</h1>
                    <p class="text-xl text-gray-200 mb-8">Join our network of mentors and get placement support for your dream job</p>
                    <a href="#enroll" class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg">Join Now</a>
                </div>
            </div>
        </div>
        <div class="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
            <button class="carousel-indicator active h-3 w-3 rounded-full bg-white" data-index="0"></button>
            <button class="carousel-indicator h-3 w-3 rounded-full bg-white/50" data-index="1"></button>
            <button class="carousel-indicator h-3 w-3 rounded-full bg-white/50" data-index="2"></button>
        </div>
    </div>
    {/* Campus Intro */}
    <section id="about" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Welcome to Navgurukul Sarjapur
                </h2>
                <p class="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
                    A disruptive higher education model that democratizes access to quality education for all.
                </p>
            </div>
            <div class="mt-10">
                <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                        </div>
                        <div class="ml-4">
                            <h3 class="text-lg font-medium text-gray-900">Education for All</h3>
                            <p class="mt-2 text-gray-600">
                                We believe education should be accessible regardless of financial background.
                            </p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <i class="fas fa-laptop-code"></i>
                            </div>
 </div>
                        <div class="ml-4">
                            <h3 class="text-lg font-medium text-gray-900">Project-Based Learning</h3>
                            <p class="mt-2 text-gray-600">
                                Students learn by building real projects from day one.
                            </p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <i class="fas fa-hands-helping"></i>
                            </div>
                        </div>
                        <div class="ml-4">
                            <h3 class="text-lg font-medium text-gray-900">Peer Learning</h3>
                            <p class="mt-2 text-gray-600">
                                Our unique model fosters collaboration and peer-to-peer learning.
                            </p>
                             </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl font-extrabold text-gray-900">
                    Our Campus Council
                </h2>
                <p class="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                    A dedicated team helping manage campus operations and activities
                </p>
            </div>
             <div class="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {/* Health Facilitator */}
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7c23404b-4e63-4979-9ae2-e649b0479845.png" alt="Portrait of the Health Facilitator at Navgurukul" class="w-full h-48 object-cover"/>
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium text-gray-900">Health Facilitator</h3>
                        <p class="mt-2 text-gray-600">Ensures student wellness and manages health-related initiatives on campus.</p>
                    </div>
                </div>
                
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/88eed153-d1a3-4f0f-a00a-2abef8866a8d.png" alt="Portrait of the Placement Coordinator at Navgurukul" class="w-full h-48 object-cover"/>
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium text-gray-900">Placement Coordinator</h3>
                        <p class="mt-2 text-gray-600">Manages internship and job placement opportunities for students.</p>
                    </div>
                </div>
                {/* Hackathon Incharge */}
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1c5543b9-49f0-4895-b12d-d94ac1bd2da3.png" alt="Portrait of the Hackathon Incharge at Navgurukul" class="w-full h-48 object-cover"/>
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium text-gray-900">Hackathon Incharge</h3>
                        <p class="mt-2 text-gray-600">Organizes coding challenges and innovation events throughout the year.</p>
                    </div>
                </div>
                
                {/* Food Coordinator */}
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f8251614-8837-4fd9-8025-f6f4d49903ca.png" alt="Portrait of the Food Coordinator at Navgurukul" class="w-full h-48 object-cover"/>
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium text-gray-900">Food Coordinator</h3>
                        <p class="mt-2 text-gray-600">Manages the dining facilities and ensures quality meals for students.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Programs Section */}
    <section id="programs" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl font-extrabold text-gray-900">
                    Our Programs
                </h2>
                <p class="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                    Comprehensive learning paths designed for diverse career opportunities
                </p>
            </div>
            <div class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                
            </div>
        </div>
    </section>
    </>
      )}

      export default HeroCarousel;