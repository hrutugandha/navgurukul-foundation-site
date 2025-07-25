import React from 'react'

const CouncilMembersCard = () => {
  return (
    <>
     {/* <!-- Council Members --> */}
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
                {/* <!-- Health Facilitator --> */}
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <img src="" alt="Portrait of the Health Facilitator at Navgurukul" class="w-full h-48 object-cover"/>
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium text-gray-900">Health Facilitator</h3>
                        <p class="mt-2 text-gray-600">Ensures student wellness and manages health-related initiatives on campus.</p>
                    </div>
                </div>
                
                {/* <!-- Placement Coordinator --> */}
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <img src=""/>
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium text-gray-900">Placement Coordinator</h3>
                        <p class="mt-2 text-gray-600">Manages internship and job placement opportunities for students.</p>
                    </div>
                </div>
                
                {/* <!-- Hackathon Incharge --> */}
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <img src=""/>
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium text-gray-900">Hackathon Incharge</h3>
                        <p class="mt-2 text-gray-600">Organizes coding challenges and innovation events throughout the year.</p>
                    </div>
                </div>
                
                {/* <!-- Food Coordinator --> */}
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <img src=""/>
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium text-gray-900">Food Coordinator</h3>
                        <p class="mt-2 text-gray-600">Manages the dining facilities and ensures quality meals for students.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default CouncilMembersCard