// BlogCard.jsx
import { useState } from 'react';

const BlogCard = ({ blog }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <>
       {/* <!-- Blogs Section --> */}
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
                <div class="group cursor-pointer">
                    <div class="overflow-hidden rounded-lg">
                        <img src=""/>
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
                
                {/* <!-- Blog 2 --> */}
                <div class="group cursor-pointer">
                    <div class="overflow-hidden rounded-lg">
                        <img src=""/>
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
                
                {/* <!-- Blog 3 --> */}
                <div class="group cursor-pointer">
                    <div class="overflow-hidden rounded-lg">
                        <img src=""/>
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
    </>
  );
};

export default BlogCard;