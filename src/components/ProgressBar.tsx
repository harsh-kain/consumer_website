import React from 'react';

interface ProgressBarProps {
  step: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
  const steps = [
    { id: 1, name: 'Basic Info' },
    { id: 2, name: 'Attach Reports' },
    { id: 3, name: 'Pick A Timeslot' },
    { id: 4, name: 'Make Payment' },
  ];

  return (
    <div className="flex justify-between items-center my-4 w-full">
      {steps.map((item) => (
        <div key={item.id} className="flex-1 flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= item.id ? 'bg-[#3A643B] text-white' : 'border border-gray-800 text-gray-600'
            } `}
          >
            {item.id}
          </div>
          <span
            className={`mt-2 text-sm md:text-md xl:text-md ${
              step >= item.id ? 'text-[--primary]' : 'text-gray-600'
            }`}
          >
            {item.name}
          </span>
          {item.id !== steps.length && (
            <div
              className={`flex-1 h-0.5 ${
                step >= item.id + 1 ? 'bg-[#3A643B]' : ''
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
