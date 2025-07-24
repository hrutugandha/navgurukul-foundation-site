// BlogCard.jsx
import { useState } from 'react';

const BlogCard = ({ blog }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-lg">
        <img 
          src={blog.image} 
          alt={blog.title}
          className={`w-full h-48 object-cover transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
        />
      </div>
      {/* Rest of blog content */}
    </div>
  );
};

export default BlogCard;