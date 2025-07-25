// TestimonialCard.jsx
const TestimonialCard = ({ testimonial }) => {
  return (
   <>
     {/* <!-- Testimonials Section --> */}
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
        <div className="transition-transform bg-white p-6 rounded-lg shadow-lg hover:-translate-y-1">
                        <div class="flex items-center mb-4">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6246eca4-f362-4d6f-acb7-0a829981f452.png" alt="Portrait of a Navgurukul alumni" class="w-12 h-12 rounded-full"/>
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
                    
                    {/* <!-- Testimonial 2 --> */}
                    <div class="testimonial-card bg-white p-6 rounded-lg shadow-lg">
                        <div class="flex items-center mb-4">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9b6e6155-8b2d-42e0-97cb-804b227dba6c.png" alt="Portrait of a Navgurukul alumni" class="w-12 h-12 rounded-full"/>
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
                    
                    {/* <!-- Testimonial 3 --> */}
                    <div class="testimonial-card bg-white p-6 rounded-lg shadow-lg">
                        <div class="flex items-center mb-4">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/45b18957-1617-41c0-bc45-3488bd872c06.png" alt="Portrait of a Navgurukul alumni" class="w-12 h-12 rounded-full"/>
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
   </>
  );
};

export default TestimonialCard;