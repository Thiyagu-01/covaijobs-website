import "./ProgressSteps.css";

const steps = [
  "Profile",
  "Experience",
  "Skills",
  "Employment",
  "Projects",
  "Education",
  "Finish",
];

function ProgressSteps({ currentStep }) {
  return (
    <div className="progress-wrapper">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const active = stepNumber === currentStep;
        const completed = stepNumber < currentStep;

        return (
          <div className="progress-step" key={label}>
            <div
              className={`step-circle ${
                active ? "active" : completed ? "completed" : ""
              }`}
            >
              {stepNumber}
            </div>
            <span className="step-label">{label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ProgressSteps;
