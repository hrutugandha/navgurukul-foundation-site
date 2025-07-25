import React from 'react'

const EnrollmentSection = () => {
  return (
    <>
     {/* <!-- Enrollment Section --> */}
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
                                    <input type="text" id="full-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                                </div>
                                <div>
                                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                                    <input type="tel" id="phone" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
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
    </>
  )
}

export default EnrollmentSection