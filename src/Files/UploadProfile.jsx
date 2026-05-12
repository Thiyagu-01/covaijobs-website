import { useState } from "react";
import "./UploadProfile.css";


import ProgressSteps from "../Components/ProgressSteps";

import Step1Profile from "./Step1Profile";
import Step2Experience from "./Step2Experience";
import Step3Skills from "./Step3Skills";
import Step4Employment from "./Step4Employment";
import Step5Projects from "./Step5Projects";
import Step6Education from "./Step6Education";
import Step7Finish from "./Step7Finish";

function UploadProfile() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 7));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="up-page">
      <h2>Upload Profile</h2>

      <ProgressSteps currentStep={step} />

      <form onSubmit={(e) => e.preventDefault()}>
        {step === 1 && <Step1Profile nextStep={nextStep} />}
        {step === 2 && (
          <Step2Experience nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 3 && (
          <Step3Skills nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 4 && (
          <Step4Employment nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 5 && (
          <Step5Projects nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 6 && (
          <Step6Education nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 7 && <Step7Finish prevStep={prevStep} />}
      </form>
    </div>
  );
}


export default UploadProfile;
