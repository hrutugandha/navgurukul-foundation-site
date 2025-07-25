import React from 'react'

const ProgramCard = () => {
  return (
    <>
     {/* <!-- Programs Section --> */}
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

        <div className="transition-all bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:scale-103">
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
                
                {/* <!-- SOB --> */}
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
                
                {/* <!-- SODA --> */}
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
    </>
  )
}

export default ProgramCard