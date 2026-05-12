import { useState } from "react";
import "../FileStyle/Step4Employment.css";

export default function Step4Employment({ nextStep, prevStep }) {
  const [jobs, setJobs] = useState([
    {
      company: "",
      title: "",
      location: "",
      employmentType: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...jobs];
    updated[index][field] = value;
    setJobs(updated);
  };

  const addJob = () => {
    setJobs([
      ...jobs,
      {
        company: "",
        title: "",
        location: "",
        employmentType: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeJob = () => {
    if (jobs.length > 1) {
      setJobs(jobs.slice(0, -1));
    }
  };

  return (
    <>
      <div className="employment-wrapper">
        <h2 className="page-title">Employment History</h2>

        {jobs.map((job, index) => (
          <div className="employment-card" key={index}>
            <div className="grid-3">
              <div>
                <label>Company name</label>
                <input
                  placeholder="Company name"
                  value={job.company}
                  onChange={(e) =>
                    handleChange(index, "company", e.target.value)
                  }
                />
              </div>

              <div>
                <label>Job title</label>
                <input
                  placeholder="Job title"
                  value={job.title}
                  onChange={(e) =>
                    handleChange(index, "title", e.target.value)
                  }
                />
              </div>

              <div>
                <label>Location</label>
                <input
                  placeholder="Location"
                  value={job.location}
                  onChange={(e) =>
                    handleChange(index, "location", e.target.value)
                  }
                />
              </div>

              <div>
                <label>Employment type</label>
                <select
                  value={job.employmentType}
                  onChange={(e) =>
                    handleChange(index, "employmentType", e.target.value)
                  }
                >
                  <option value="" disabled>
                    Select employment type
                  </option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Self-Employment</option>
                  <option>Freelance</option>
                  <option>Internship</option>
                  <option>Trainee</option>
                </select>
              </div>

              <div>
                <label>Start date</label>
                <input
                  type="month"
                  value={job.startDate}
                  onChange={(e) =>
                    handleChange(index, "startDate", e.target.value)
                  }
                />
              </div>

              <div>
                <label>End date</label>
                <input
                  type="month"
                  value={job.endDate}
                  onChange={(e) =>
                    handleChange(index, "endDate", e.target.value)
                  }
                />
              </div>
            </div>

            <label>Description</label>
            <textarea
              placeholder="Describe your work and achievements..."
              value={job.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
            />
          </div>
        ))}

        <div className="employment-actions">
          {jobs.length > 1 && (
            <button className="btn-remove" onClick={removeJob}>
              Remove extra fields
            </button>
          )}

          <button className="btn-add" onClick={addJob}>
            + Add more records
          </button>
        </div>
      </div>

      {/* Bottom Nav */}
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
