// ProgramCard.jsx
const ProgramCard = ({ program }) => {
  return (
    <div className="transition-all bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:scale-103">
      <div className={`px-4 py-5 sm:p-6 bg-gradient-to-r from-${program.colorFrom} to-${program.colorTo}`}>
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-white/10 p-3 rounded-full">
            <i className={`fas ${program.icon} text-white`}></i>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-white">{program.title}</h3>
          </div>
        </div>
      </div>
      {/* Rest of program card content */}
    </div>
  );
};

export default ProgramCard;