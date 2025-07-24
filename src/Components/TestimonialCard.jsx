// TestimonialCard.jsx
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="transition-transform bg-white p-6 rounded-lg shadow-lg hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <img src={testimonial.image} alt="Testimonial" className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
          <p className="text-indigo-600">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">{testimonial.quote}</p>
      {/* Rating stars */}
    </div>
  );
};

export default TestimonialCard;