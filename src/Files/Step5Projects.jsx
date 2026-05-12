import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../FileStyle/Step5Projects.css"; // Make sure CSS is in this path

const emptyProject = {
  title: "",
  description: "",
  technologies: "",
  startDate: null,
  endDate: null,
  responsibilities: "",
  industry: "",
  url: "",
};

function Step5Projects({ nextStep, prevStep }) {
  const [projects, setProjects] = useState([emptyProject]);

  const addProject = () => setProjects([...projects, emptyProject]);

  const removeProject = () => {
    if (projects.length > 1) setProjects(projects.slice(0, -1));
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  const handleStartDateChange = (index, date) => {
    handleInputChange(index, "startDate", date);
  };

  const handleEndDateChange = (index, date) => {
    handleInputChange(index, "endDate", date);
  };

  return (
    <>
      <div className="projects-wrapper">
        <h2 className="page-title">Project details</h2>

        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* Row 1 */}
            <div className="grid-2">
              <div className="form-group">
                <label>Project Title*</label>
                <input
                  placeholder="Project title"
                  value={project.title}
                  onChange={(e) => handleInputChange(index, "title", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Technologies used*</label>
                <input
                  placeholder="Technologies used"
                  value={project.technologies}
                  onChange={(e) =>
                    handleInputChange(index, "technologies", e.target.value)
                  }
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid-2">
              <div className="form-group">
                <label>Project Description*</label>
                <textarea
                  placeholder="Project Description"
                  value={project.description}
                  onChange={(e) =>
                    handleInputChange(index, "description", e.target.value)
                  }
                ></textarea>
              </div>
              <div className="form-group">
                <label>Your Responsibilities*</label>
                <textarea
                  placeholder="Your Responsibilities"
                  value={project.responsibilities}
                  onChange={(e) =>
                    handleInputChange(index, "responsibilities", e.target.value)
                  }
                ></textarea>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid-3">
              <div className="form-group">
                <label>Start Date*</label>
                <DatePicker
                  selected={project.startDate}
                  onChange={(date) => handleStartDateChange(index, date)}
                  placeholderText="Start Date"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              <div className="form-group">
                <label>End Date*</label>
                <DatePicker
                  selected={project.endDate}
                  onChange={(date) => handleEndDateChange(index, date)}
                  placeholderText="End Date"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              <div className="form-group">
                <label>Industry *</label>
                <input
                  placeholder="Industry type"
                  value={project.industry}
                  onChange={(e) =>
                    handleInputChange(index, "industry", e.target.value)
                  }
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="form-group">
              <label>Project URL (Website / Play Store / App Store)</label>
              <input
                className="full-width"
                placeholder="Project URL"
                value={project.url}
                onChange={(e) => handleInputChange(index, "url", e.target.value)}
              />
              <p className="note">If project is not live, please leave empty</p>
            </div>
          </div>
        ))}

        {/* Add / Remove Buttons */}
        <div className="project-actions">
          {projects.length > 1 && (
            <button className="btn-remove" onClick={removeProject}>
              Remove project
            </button>
          )}
          <button className="btn-add" onClick={addProject}>
            Add more projects
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button className="btn-back" onClick={prevStep}>
          Back
        </button>
        <button className="btn-next" onClick={nextStep}>
          Next
        </button>
      </div>
    </>
  );
}

export default Step5Projects;
