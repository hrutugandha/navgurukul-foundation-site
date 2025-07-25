import React from 'react'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer
/*
`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navgurukul Sarjapur Campus</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        :root {
            --primary: #4f46e5;
            --secondary: #10b981;
            --accent: #f59e0b;
            --dark: #1e293b;
            --light: #f8fafc;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--dark);
            background-color: #f9fafb;
        }

        .hero-carousel {
            height: 80vh;
            min-height: 500px;
            position: relative;
        }

        .carousel-slide {
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: 1s opacity ease-in-out;
            background-size: cover;
            background-position: center;
        }

        .carousel-slide.active {
            opacity: 1;
        }

        .testimonial-card {
            transition: transform 0.3s ease;
        }

        .testimonial-card:hover {
            transform: translateY(-5px);
        }

        .navbar {
            transition: all 0.3s ease;
        }

        .scrolled {
            background-color: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .program-card {
            transition: all 0.3s ease;
        }

        .program-card:hover {
            transform: scale(1.03);
        }

        @media (max-width: 768px) {
            .hero-carousel {
                height: 60vh;
            }
        }
    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar fixed w-full z-50 bg-white/90 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0 flex items-center">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/be83ede4-03cc-49ed-8734-f11316452a55.png" alt="Navgurukul logo with inspirational text" class="h-10">
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a href="index.html" class="block px-3 py-2 rounded-md text-base font-medium text-indigo-700 bg-indigo-100">Home</a>
                <a href="about.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50">About Us</a>
                <a href="programs.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50">Programs</a>
                <a href="blog.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50">Blog</a>
                <a href="contact.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50">Contact</a>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block">
                    <a href="#enroll" class="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">Enroll Now</a>
                </div>
                <div class="-mr-2 flex md:hidden">
                    <button type="button" id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-700 hover:bg-gray-100 focus:outline-none">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile menu -->
        <div class="md:hidden hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-indigo-700 bg-indigo-100">Home</a>
                <a href="#about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50">About Us</a>
                <a href="#programs" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50">Programs</a>
                <a href="#blogs" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50">Blogs</a>
                <a href="#contact" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50">Contact</a>
                <a href="#enroll" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600">Enroll Now</a>
            </div>
        </div>
    </nav>

    <!-- Hero Carousel -->
    <div class="hero-carousel mt-16">
        <div class="carousel-slide active" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/41595fa2-2126-4f6f-bde5-0e8355baaf59.png');">
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center px-6 max-w-4xl">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Empowering Students Through Technology</h1>
                    <p class="text-xl text-gray-200 mb-8">Join our community of learners and create a better future through coding and entrepreneurship</p>
                 
 <a href="contact.html" class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg">Apply Now</a>
                </div>
            </div>
        </div>
        <div class="carousel-slide" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/de9dbb09-dac1-4a2d-b6fc-60d590bd47b4.png');">
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center px-6 max-w-4xl">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Annual Hackathon Showcase</h1>
                    <p class="text-xl text-gray-200 mb-8">Students compete to build innovative solutions to real-world problems</p>
                    <a href="#blogs" class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg">View Projects</a>
                </div>
            </div>
        </div>
        <div class="carousel-slide" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ae7e30c7-c3c2-45f0-91c5-f9ee720ccae1.png');">
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center px-6 max-w-4xl">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">More Than Just Education</h1>
                    <p class="text-xl text-gray-200 mb-8">Experience a vibrant community of learners and mentors</p>
                    <a href="#about" class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg">Learn More</a>
                </div>
            </div>
        </div>
        <div class="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
            <button class="carousel-indicator active h-3 w-3 rounded-full bg-white" data-index="0"></button>
            <button class="carousel-indicator h-3 w-3 rounded-full bg-white/50" data-index="1"></button>
            <button class="carousel-indicator h-3 w-3 rounded-full bg-white/50" data-index="2"></button>
        </div>
    </div>

    <!-- Campus Intro -->
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

    <!-- Council Members -->
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
                <!-- Health Facilitator -->
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7c23404b-4e63-4979-9ae2-e649b0479845.png" alt="Portrait of the Health Facilitator at Navgurukul" class="w-full h-48 object-cover">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium text-gray-900">Health Facilitator</h3>
                        <p class="mt-2 text-gray-600">Ensures student wellness and manages health-related initiatives on campus.</p>
                    </div>
                </div>
                
                <!-- Placement Coordinator -->
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/88eed153-d1a3-4f0f-a00a-2abef8866a8d.png" alt="Portrait of the Placement Coordinator at Navgurukul" class="w-full h-48 object-cover">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium text-gray-900">Placement Coordinator</h3>
                        <p class="mt-2 text-gray-600">Manages internship and job placement opportunities for students.</p>
                    </div>
                </div>
                
                <!-- Hackathon Incharge -->
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1c5543b9-49f0-4895-b12d-d94ac1bd2da3.png" alt="Portrait of the Hackathon Incharge at Navgurukul" class="w-full h-48 object-cover">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium text-gray-900">Hackathon Incharge</h3>
                        <p class="mt-2 text-gray-600">Organizes coding challenges and innovation events throughout the year.</p>
                    </div>
                </div>
                
                <!-- Food Coordinator -->
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f8251614-8837-4fd9-8025-f6f4d49903ca.png" alt="Portrait of the Food Coordinator at Navgurukul" class="w-full h-48 object-cover">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium text-gray-900">Food Coordinator</h3>
                        <p class="mt-2 text-gray-600">Manages the dining facilities and ensures quality meals for students.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Programs Section -->
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
                <!-- SOP -->
                <div class="program-card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                    <div class="px-4 py-5 sm:p-6 bg-gradient-to-r from-indigo-500 to-indigo-700">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-white/10 p-3 rounded-full">
                                <i class="fas fa-code text-white"></i>
                            </div>
                            <div class="ml-4">
                                <h3 class="text-lg font-medium text-white">School of Programming (SOP)</h3>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-5 sm:p-6">
                        <ul class="space-y-4">
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-check text-indigo-500"></i>
                                </div>
                                <p class="ml-3 text-gray-700">
                                    <span class="font-medium text-gray-900">Duration:</span> 12 months
                                </p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-check text-indigo-500"></i>
                                </div>
                                <p class="ml-3 text-gray-700">
                                    <span class="font-medium text-gray-900">Requirement:</span> Class 12 pass
                                </p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-check text-indigo-500"></i>
                                </div>
                                <p class="ml-3 text-gray-700">
                                    <span class="font-medium text-gray-900">Focus:</span> Full-stack web development, algorithms, and problem-solving
                                </p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-check text-indigo-500"></i>
                                </div>
                                <p class="ml-3 text-gray-700">
                                    <span class="font-medium text-gray-900">Outcome:</span> Job-ready software developer
                                </p>
                            </li>
                        </ul>
                        <div class="mt-6">
                            <a href="#" class="w-full inline-flex justify-center items-center px-4 py-2 border border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-50">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- SOB -->
                <div class="program-card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                    <div class="px-4 py-5 sm:p-6 bg-gradient-to-r from-teal-500 to-teal-700">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-white/10 p-3 rounded-full">
                                <i class="fas fa-business-time text-white"></i>
                            </div>
                            <div class="ml-4">
                                <h3 class="text-lg font-medium text-white">School of Business (SOB)</h3>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-5 sm:p-6">
                        <ul class="space-y-4">
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-check text-teal-500"></i>
                                </div>
                                <p class="ml-3 text-gray-700">
                                    <span class="font-medium text-gray-900">Duration:</span> 10 months
                                </p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-check text-teal-500"></i>
                                </div>
                                <p class="ml-3 text-gray-700">
                                    <span class="font-medium text-gray-900">Requirement:</span> Class 12 pass
                                </p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-check text-teal-500"></i>
                                </div>
                                <p class="ml-3 text-gray-700">
                                    <span class="font-medium text-gray-900">Focus:</span> Entrepreneurship, marketing, and business operations
                                </p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-check text-teal-500"></i>
                                </div>
                                <p class="ml-3 text-gray-700">
                                    <span class="font-medium text-gray-900">Outcome:</span> Business analyst or entrepreneur
                                </p>
                            </li>
                        </ul>
                        <div class="mt-6">
                            <a href="#" class="w-full inline-flex justify-center items-center px-4 py-2 border border-teal-500 text-teal-500 rounded-md hover:bg-teal-50">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- SODA -->
                <div class="program-card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                    <div class="px-4 py-5 sm:p-6 bg-gradient-to-r from-amber-500 to-amber-700">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-white/10 p-3 rounded-full">
                                <i class="fas fa-paint-brush text-white"></i>
                            </div>
                            <div class="ml-4">
                                <h3 class="text-lg font-medium text-white">School of Digital Arts (SODA)</h3>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-5 sm:p-6">
                        <ul class="space-y-4">
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-check text-amber-500"></i>
                                </div>
                                <p class="ml-3 text-gray-700">
                                    <span class="font-medium text-gray-900">Duration:</span> 9 months
                                </p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-check text-amber-500"></i>
                                </div>
                                <p class="ml-3 text-gray-700">
                                    <span class="font-medium text-gray-900">Requirement:</span> Class 10 pass
                                </p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-check text-amber-500"></i>
                                </div>
                                <p class="ml-3 text-gray-700">
                                    <span class="font-medium text-gray-900">Focus:</span> Graphic design, UI/UX, and digital marketing
                                </p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-check text-amber-500"></i>
                                </div>
                                <p class="ml-3 text-gray-700">
                                    <span class="font-medium text-gray-900">Outcome:</span> Digital designer or content creator
                                </p>
                            </li>
                        </ul>
                        <div class="mt-6">
                            <a href="#" class="w-full inline-flex justify-center items-center px-4 py-2 border border-amber-500 text-amber-500 rounded-md hover:bg-amber-50">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl font-extrabold text-gray-900">
                    What Our Students Say
                </h2>
                <p class="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                    Stories from our alumni community
                </p>
            </div>

            <div class="mt-10">
                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <!-- Testimonial 1 -->
                    <div class="testimonial-card bg-white p-6 rounded-lg shadow-lg">
                        <div class="flex items-center mb-4">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6246eca4-f362-4d6f-acb7-0a829981f452.png" alt="Portrait of a Navgurukul alumni" class="w-12 h-12 rounded-full">
                            <div class="ml-4">
                                <h4 class="text-lg font-medium text-gray-900">Rahul Sharma</h4>
                                <p class="text-indigo-600">Software Developer at TechCorp</p>
                            </div>
                        </div>
                        <p class="text-gray-600 italic">
                            "Navgurukul transformed my life. Coming from a village with limited resources, I never imagined I'd become a software engineer. The peer-learning model and hands-on projects prepared me exceptionally well for the industry."
                        </p>
                        <div class="mt-4 flex">
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                        </div>
                    </div>
                    
                    <!-- Testimonial 2 -->
                    <div class="testimonial-card bg-white p-6 rounded-lg shadow-lg">
                        <div class="flex items-center mb-4">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9b6e6155-8b2d-42e0-97cb-804b227dba6c.png" alt="Portrait of a Navgurukul alumni" class="w-12 h-12 rounded-full">
                            <div class="ml-4">
                                <h4 class="text-lg font-medium text-gray-900">Priya Patel</h4>
                                <p class="text-indigo-600">UI/UX Designer at DesignHub</p>
                            </div>
                        </div>
                        <p class="text-gray-600 italic">
                            "The SODA program gave me the perfect blend of technical skills and creative thinking. I landed a design job within a month of graduating and have been working on exciting projects ever since. The campus community truly felt like family."
                        </p>
                        <div class="mt-4 flex">
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star-half-alt text-yellow-400"></i>
                        </div>
                    </div>
                    
                    <!-- Testimonial 3 -->
                    <div class="testimonial-card bg-white p-6 rounded-lg shadow-lg">
                        <div class="flex items-center mb-4">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/45b18957-1617-41c0-bc45-3488bd872c06.png" alt="Portrait of a Navgurukul alumni" class="w-12 h-12 rounded-full">
                            <div class="ml-4">
                                <h4 class="text-lg font-medium text-gray-900">Arjun Kumar</h4>
                                <p class="text-indigo-600">Founder, GreenTech Solutions</p>
                            </div>
                        </div>
                        <p class="text-gray-600 italic">
                            "The entrepreneurship training in the SOB program helped me launch my own sustainable tech startup. Navgurukul provided not just education but also the confidence and network to turn my ideas into reality. The Hackathon culture is unmatched!"
                        </p>
                        <div class="mt-4 flex">
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Blogs Section -->
    <section id="blogs" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl font-extrabold text-gray-900">
                    Campus Life & Blogs
                </h2>
                <p class="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                    Stories and updates from our vibrant community
                </p>
            </div>

            <div class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <!-- Blog 1 -->
                <div class="group cursor-pointer">
                    <div class="overflow-hidden rounded-lg">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ae93673e-23bd-4a9c-bbd4-80d455757ef2.png" alt="Students participating in Navgurukul's Annual Hackathon event" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="mt-4">
                        <div class="flex items-center text-sm text-gray-500">
                            <time datetime="2023-05-15">May 15, 2023</time>
                            <span class="mx-2">•</span>
                            <span>Events</span>
                        </div>
                        <h3 class="mt-1 text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                            Annual Hackathon 2023 Results
                        </h3>
                        <p class="mt-2 text-gray-600">
                            Over 50 students competed in this year's 48-hour hackathon, creating innovative solutions for social impact.
                        </p>
                    </div>
                </div>
                
                <!-- Blog 2 -->
                <div class="group cursor-pointer">
                    <div class="overflow-hidden rounded-lg">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dd5cfe8f-2b21-4b0d-9b61-bc70b1f7d590.png" alt="Students attending a workshop at Navgurukul" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="mt-4">
                        <div class="flex items-center text-sm text-gray-500">
                            <time datetime="2023-04-22">Apr 22, 2023</time>
                            <span class="mx-2">•</span>
                            <span>Workshops</span>
                        </div>
                        <h3 class="mt-1 text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                            UI/UX Design Workshop with Industry Experts
                        </h3>
                        <p class="mt-2 text-gray-600">
                            Leading designers from top tech companies shared insights and practical tips with our SODA students.
                        </p>
                    </div>
                </div>
                
                <!-- Blog 3 -->
                <div class="group cursor-pointer">
                    <div class="overflow-hidden rounded-lg">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fc4f97ff-f72f-4b2d-b2dd-664fe4a0989b.png" alt="Navgurukul alumni reunion at the campus" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="mt-4">
                        <div class="flex items-center text-sm text-gray-500">
                            <time datetime="2023-03-10">Mar 10, 2023</time>
                            <span class="mx-2">•</span>
                            <span>Community</span>
                        </div>
                        <h3 class="mt-1 text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                            Alumni Network Meetup at Campus
                        </h3>
                        <p class="mt-2 text-gray-600">
                            Former students returned to share their industry experiences and mentor current learners.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Placement Stats -->
    <section class="py-16 bg-indigo-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl font-extrabold text-white">
                    Placement Highlights
                </h2>
                <p class="mt-4 max-w-2xl text-xl text-indigo-100 mx-auto">
                    Our students go on to work with leading companies and startups
                </p>
            </div>

            <div class="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
                <div class="text-center">
                    <p class="text-5xl font-extrabold text-white">95%</p>
                    <p class="mt-2 text-indigo-100">Placement Rate</p>
                </div>
                <div class="text-center">
                    <p class="text-5xl font-extrabold text-white">150+</p>
                    <p class="mt-2 text-indigo-100">Companies Hiring</p>
                </div>
                <div class="text-center">
                    <p class="text-5xl font-extrabold text-white">4.8L</p>
                    <p class="mt-2 text-indigo-100">Avg Starting Salary</p>
                </div>
                <div class="text-center">
                    <p class="text-5xl font-extrabold text-white">25+</p>
                    <p class="mt-2 text-indigo-100">Startups Founded</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Enrollment Section -->
    <section id="enroll" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                    <h2 class="text-3xl font-extrabold text-gray-900">
                        Ready to Join Navgurukul?
                    </h2>
                    <p class="mt-4 text-lg text-gray-600">
                        Take the first step toward transforming your future. Our application process is simple and transparent.
                    </p>
                    
                    <div class="mt-8">
                        <h3 class="text-xl font-medium text-gray-900">Eligibility Requirements</h3>
                        <ul class="mt-4 space-y-3">
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-check text-indigo-500"></i>
                                </div>
                                <p class="ml-3 text-gray-700">
                                    Minimum age: 18 years (for residential program)
                                </p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-check text-indigo-500"></i>
                                </div>
                                <p class="ml-3 text-gray-700">
                                    Class 10 pass (for SODA program)
                                </p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-check text-indigo-500"></i>
                                </div>
                                <p class="ml-3 text-gray-700">
                                    Class 12 pass (for SOP & SOB programs)
                                </p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-check text-indigo-500"></i>
                                </div>
                                <p class="ml-3 text-gray-700">
                                    Passion for learning and commitment to completing the program
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="mt-8 lg:mt-0">
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                        <div class="px-6 py-5 border-b border-gray-200 bg-indigo-600">
                            <h3 class="text-lg font-medium text-white">Admission Form</h3>
                        </div>
                        <div class="px-6 py-5">
                            <form class="space-y-6">
                                <div>
                                    <label for="full-name" class="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="full-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                </div>
                                <div>
                                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                                    <input type="tel" id="phone" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                </div>
                                <div>
                                    <label for="program" class="block text-sm font-medium text-gray-700">Program of Interest</label>
                                    <select id="program" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                        <option>Select a program</option>
                                        <option>School of Programming (SOP)</option>
                                        <option>School of Business (SOB)</option>
                                        <option>School of Digital Arts (SODA)</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="message" class="block text-sm font-medium text-gray-700">Why do you want to join Navgurukul?</label>
                                    <textarea id="message" rows="4" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                                </div>
                                <div>
                                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Submit Application
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl font-extrabold text-gray-900">
                    Contact Us
                </h2>
                <p class="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                    Get in touch with our team for any inquiries
                </p>
            </div>

            <div class="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                            <i class="fas fa-map-marker-alt text-indigo-600"></i>
                        </div>
                        <div class="ml-4">
                            <h3 class="text-lg font-medium text-gray-900">Address</h3>
                            <p class="mt-2 text-gray-600">
                                Navgurukul Sarjapur Campus<br>
                                123 Education Lane<br>
                                Sarjapur, Bangalore - 562125
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                            <i class="fas fa-phone-alt text-indigo-600"></i>
                        </div>
                        <div class="ml-4">
                            <h3 class="text-lg font-medium text-gray-900">Phone</h3>
                            <p class="mt-2 text-gray-600">
                                Admissions: +91 9876543210<br>
                                General Inquiries: +91 8765432109
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                            <i class="fas fa-envelope text-indigo-600"></i>
                        </div>
                        <div class="ml-4">
                            <h3 class="text-lg font-medium text-gray-900">Email</h3>
                            <p class="mt-2 text-gray-600">
                                admissions@navgurukul.org<br>
                                info@navgurukul.org
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Map -->
    <div class="w-full h-96">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.394774863781!2d77.77901731526988!3d12.991163090842514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0cf4a38e5d5d%3A0xef9f4024452cb13!2sSarjapur%20Road%2C%20Sarjapur%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1628570798188!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>


    <script>
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Carousel functionality
        const carouselSlides = document.querySelectorAll('.carousel-slide');
        const carouselIndicators = document.querySelectorAll('.carousel-indicator');
        let currentSlide = 0;

        function showSlide(index) {
            carouselSlides.forEach(slide => slide.classList.remove('active'));
            carouselIndicators.forEach(indicator => indicator.classList.remove('active'));
            carouselIndicators.forEach(indicator => indicator.classList.add('bg-white/50'));
            
            carouselSlides[index].classList.add('active');
            carouselIndicators[index].classList.remove('bg-white/50');
            carouselIndicators[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            let next = currentSlide + 1;
            if (next >= carouselSlides.length) {
                next = 0;
            }
            showSlide(next);
        }

        // Set up event listeners for indicators
        carouselIndicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                const slideIndex = parseInt(indicator.getAttribute('data-index'));
                showSlide(slideIndex);
            });
        });

        // Auto-advance slides every 5 seconds
        setInterval(nextSlide, 5000);

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>

```
*/