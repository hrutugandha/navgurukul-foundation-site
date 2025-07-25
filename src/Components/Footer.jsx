import React from 'react'

const Footer = () => {
  return (
    <>
      <footer class="bg-gray-900 text-gray-400">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div class="col-span-2">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/49e3ae61-3b80-455c-834c-b60c2dcf8b70.png" alt="Navgurukul logo with tagline" class="h-10"/>
                    <p class="mt-4 text-gray-300">
                        Navgurukul is a non-profit initiative that provides quality education to students from underprivileged backgrounds, helping them launch careers in technology and business.
                    </p>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-white tracking-wider uppercase">Quick Links</h3>
                    <ul class="mt-4 space-y-2">
                        <li><a href="#" class="hover:text-white">Home</a></li>
                        <li><a href="#about" class="hover:text-white">About Us</a></li>
                        <li><a href="#programs" class="hover:text-white">Programs</a></li>
                        <li><a href="#blogs" class="hover:text-white">Blogs</a></li>
                        <li><a href="#contact" class="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
                    <ul class="mt-4 space-y-2">
                        <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" class="hover:text-white">Terms & Conditions</a></li>
                        <li><a href="#" class="hover:text-white">Guidelines</a></li>
                    </ul>
                </div>
            </div>
            <div class="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
                <p class="text-sm text-gray-500">
                    © 2023 Navgurukul Sarjapur. All rights reserved.
                </p>
                <div class="mt-4 md:mt-0 flex space-x-6">
                    <a href="#" class="text-gray-400 hover:text-white">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer