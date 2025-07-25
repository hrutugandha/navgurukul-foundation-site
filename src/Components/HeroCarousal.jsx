import React from 'react'

const HeroCarousal = () => {

      const carouselSlides = document.querySelectorAll('.carousel-slide');
        const carouselIndicators = document.querySelectorAll('.carousel-indicator');
        let currentSlide = 0;

        function showSlide(index) {
            carouselSlides.forEach(slide => slide.classList.remove('active'));
            carouselIndicators.forEach(indicator => indicator.classList.remove('active'));
            carouselIndicators.forEach(indicator => indicator.classList.add('bg-white/50'));
            
            // carouselSlides[index].add('active');
            // carouselIndicators[index].remove('bg-white/50');
            // carouselIndicators[index].add('active');
            // currentSlide = index;
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

        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton?.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });


  return (
    <>
       <div class="hero-carousel mt-16">
        <div className="carousel-slide active" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center px-6 max-w-4xl">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Transform Your Future at Navgurukul</h1>
                    <p class="text-xl text-gray-200 mb-8">Learn coding, business and design skills in our innovative peer-learning community</p>
                    <a href="programs.html" class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg">Explore Programs</a>
                </div>
            </div>
        </div>
        <div class="carousel-slide" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center px-6 max-w-4xl">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Real-World Projects & Hackathons</h1>
                    <p class="text-xl text-gray-200 mb-8">Apply your skills through collaborative projects and compete in exciting tech challenges</p>
                    <a href="blog.html" class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg">See Student Work</a>
                </div>
            </div>
        </div>
        <div class="carousel-slide" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')" }}>
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
    </>
  )
}

export default HeroCarousal