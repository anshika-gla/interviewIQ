import React, { useState } from "react";

import Step1SetUp from "../components/Step1SetUp";
import Step2Interview from "../components/Step2Interview";
import Step3Report from "../components/Step3Report";

function InterviewPage() {
  const [step, setStep] = useState(1);
  const [interviewData, setInterviewData] = useState(null);

  const handleStart = (data) => {
    console.log("Interview Data:", data);

    if (!data) {
      console.log("No interview data received");
      return;
    }

    setInterviewData(data);
    setStep(2);
  };

  const handleFinish = (report) => {
    setInterviewData(report);
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {step === 1 && (
        <Step1SetUp onStart={handleStart} />
      )}

      {step === 2 && interviewData && (
        <Step2Interview
          interviewData={interviewData}
          onFinish={handleFinish}
        />
      )}

      {step === 3 && interviewData && (
        <Step3Report report={interviewData} />
      )}
    </div>
  );
}

export default InterviewPage;