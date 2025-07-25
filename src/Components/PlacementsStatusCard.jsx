import React from 'react'

const PlacementsStatusCard = () => {
  return (
    <>
     {/* <!-- Placement Stats --> */}
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
    </>
  )
}

export default PlacementsStatusCard