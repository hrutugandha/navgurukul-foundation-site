import React from 'react';
import { useState, useEffect } from 'react';


    const Navbar = () => {


        const [scrolled, setScrolled] = useState(false);
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar?.classList.add('scrolled');
            } else {
                navbar?.classList.remove('scrolled');
            }
        });
      return (
        <>
          <nav className={`fixed w-full z-50 bg-white/90 backdrop-blur-md transition-all ${scrolled ? 'scrolled' : ''}`}>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0 flex items-center">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/be83ede4-03cc-49ed-8734-f11316452a55.png" alt="Navgurukul logo with inspirational text" class="h-10"/>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a href="index.html" class="px-3 py-2 rounded-md text-sm font-medium text-indigo-700 bg-indigo-100">Home</a>
                            <a href="about.html" class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50">About Us</a>
                            <a href="programs.html" class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50">Programs</a>
                            <a href="blog.html" class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50">Blog</a>
                            <a href="contact.html" class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50">Contact</a>
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

        <div class="md:hidden hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="index.html" class="block px-3 py-2 rounded-md text-base font-medium text-indigo-700 bg-indigo-100">Home</a>
                <a href="about.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50">About Us</a>
                <a href="programs.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50">Programs</a>
                <a href="blog.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50">Blog</a>
                <a href="contact.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-indigo-50">Contact</a>
                <a href="#enroll" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600">Enroll Now</a>
            </div>
        </div>
    </nav>
        </>
      )
}


export default Navbar;