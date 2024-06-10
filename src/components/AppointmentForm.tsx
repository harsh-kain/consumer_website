import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AppointmentFormProps {
  onNext: (formData: FormData) => void;
}

interface FormData {
  mode: string;
  height: string;
  weight: string;
  age: string;
  sleepPattern: string;
  concern: string;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onNext }) => {
  const [formData, setFormData] = useState<FormData>({
    mode: 'Video',
    height: '',
    weight: '',
    age: '',
    sleepPattern: '',
    concern: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleModeChange = (mode: string) => {
    setFormData({
      ...formData,
      mode,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div className="bg-white p-8 min-w-[90%] rounded-xl border border-[#E7E7E7] my-[3rem]">
      <div className="fee w-full flex justify-between items-center p-4 my-3 border border-gray-400 rounded-lg">
        <h1>Appointment Fee</h1>
        <span>₹699.00</span>
      </div>
      <form className="space-y-4 w-full" onSubmit={handleSubmit}>
        <div className="flex justify-between my-4 bg-[#F3F3F3]">
          {['In-Clinic', 'Video', 'Chat'].map((mode) => (
            <button
              type="button"
              key={mode}
              onClick={() => handleModeChange(mode)}
              className={`flex-1 p-2 text-center ${
                formData.mode === mode ? ' border-[#3A643B] text-[#3A643B]' : '  text-gray-600'
              } border rounded mx-1`}
            >
              {mode}
              {formData.mode === mode && <span className="ml-2 text-[#3A643B]">&#10003;</span>}
            </button>
          ))}
        </div>
        <div className="w-full border border-gray-400 rounded-lg p-2">
          <label htmlFor="">Height</label>
          <input
            className="border-none w-full outline-none bg-white focus:outline-none focus:ring-2 focus:ring-[#3A643B]"
            type="text"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full border border-gray-400 rounded-lg p-2">
          <label htmlFor="">Weight</label>
          <input
            className="border-none w-full outline-none bg-white focus:outline-none focus:ring-2 focus:ring-[#3A643B]"
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full border border-gray-400 rounded-lg p-2">
          <label htmlFor="">Age</label>
          <input
            className="border-none w-full outline-none bg-white focus:outline-none focus:ring-2 focus:ring-[#3A643B]"
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full border border-gray-400 rounded-lg p-2">
          <label htmlFor="">Sleep Pattern</label>
          <input
            className="border-none w-full outline-none bg-white focus:outline-none focus:ring-2 focus:ring-[#3A643B]"
            type="text"
            name="sleepPattern"
            value={formData.sleepPattern}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full border border-gray-400 rounded-lg p-2">
          <label htmlFor="">Concern</label>
          <textarea
            className="outline-none w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#3A643B]"
            name="concern"
            value={formData.concern}
            onChange={handleChange}
          />
        </div>
        <button className="bg-[#3A643B] text-white p-2 w-full" type="submit">
          Proceed
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
