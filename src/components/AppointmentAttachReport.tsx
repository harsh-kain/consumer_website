import React, { useState, ChangeEvent, FormEvent } from 'react';
import PhotoUploader from './PhotoUploader';

interface AppointmentAttachReportsProps {
  onNext: (reports: File | null) => void;
}

const AppointmentAttachReports: React.FC<AppointmentAttachReportsProps> = ({ onNext }) => {
  const [reports, setReports] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setReports(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onNext(reports);
  };

  return (
    <div className="bg-white p-8 w-[90%] flex justify-center items-center flex-col">
      <div className="fee w-full flex justify-center items-center p-4 my-3">
        <h1>Attach Report</h1>
      </div>

      <form className="space-y-4 flex justify-center items-center flex-col w-[60%]" onSubmit={handleSubmit}>
        {/* <input
          className="border p-2 w-full"
          type="file"
          onChange={handleFileChange}
          required
        /> */}
        <PhotoUploader />
        <span>OR</span>
        <PhotoUploader />
        <button className="bg-[#3A643B] text-white p-2 w-full rounded-lg" type="submit">
          Proceed
        </button>
      </form>
    </div>
  );
};

export default AppointmentAttachReports;
