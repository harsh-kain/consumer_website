import React, { useState } from 'react';
import AppointmentForm from '../components/AppointmentForm';
import AppointmentAttachReports from '../components/AppointmentAttachReport';
import AppointmentPayment from '../components/AppointmentPayment';
import AppointmentSelectTimeSlot from '../components/AppointmentSelectTimeSlot';
import ProgressBar from '../components/ProgressBar';

// Define the types for the component props
interface AppointmentFormData {
  name?: string;
  email?: string;
  phone?: string;
  [key: string]: any;
}

interface AppointmentReports {
  [key: string]: any;
}

interface AppointmentDetails {
  name?: string;
  email?: string;
  phone?: string;
  reports?: AppointmentReports | null;
  date?: string | null;
  time?: string | null;
  expert?: string;
}

const AppointmentBookingPage: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<AppointmentFormData>({});
  const [reports, setReports] = useState<AppointmentReports | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleNextStep = (data: any) => {
    if (step === 1) setFormData(data);
    if (step === 2) setReports(data);
    if (step === 3) {
      setSelectedDate(data[0]);
      setSelectedTime(data[1]);
    }
    console.log(data);
    setStep(step + 1);
  };

  return (
    <div className="div w-full flex justify-center items-center bg-[#F3F3F3]">
      <div className="w-[100%] md:w-[80%] lg:w-[60%] xl:w-[30%]   p-4 my-8 rounded-lg flex justify-center items-center flex-col ">
      <ProgressBar step={step} />
      {step === 1 && <AppointmentForm onNext={handleNextStep} />}
      {step === 2 && <AppointmentAttachReports onNext={handleNextStep} />}
      {step === 3 && <AppointmentSelectTimeSlot onNext={handleNextStep} />}
      {step === 4 && (
        <AppointmentPayment
          appointmentDetails={{
            ...formData,
            reports,
            date: selectedDate,
            time: selectedTime,
            expert: 'Dr. Smith',
          }}
        />
      )}
    </div>
    </div>
  );
};

export default AppointmentBookingPage;
