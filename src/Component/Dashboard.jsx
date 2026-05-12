import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Home/Footer";
import { submitCompleteProfile } from "../api";

const CompleteProfile = () => {
  const [user, setUser] = useState({ userName: "", email: "" });
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [skills, setSkills] = useState([]);
  const [inputSkill, setInputSkill] = useState("");
  const [resume, setResume] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) return navigate("/login");
    setUser({ userName: storedUser.userName, email: storedUser.email });

    const storedDetails = JSON.parse(localStorage.getItem("jobSeekerDetails"));
    if (storedDetails?.email === storedUser.email) {
      setExperience(storedDetails.experience || "");
      setLocation(storedDetails.location || "");
      setPhoneNumber(storedDetails.phoneNumber?.replace("+91", "") || "");
      setSkills(storedDetails.skills || []);
      setDescription(storedDetails.description || "");
    }
  }, [navigate]);

  const addSkill = () => {
    const skill = inputSkill.trim().toLowerCase();
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
    } else if (skills.includes(skill)) {
      toast.warning("Skill already added");
    }
    setInputSkill("");
  };

  const handleSkillKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const handleSkillDelete = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const validatePhoneNumber = (number) => /^\d{10}$/.test(number);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(phoneNumber)) {
      toast.error("Phone number must be exactly 10 digits");
      return;
    }

    if (!description.trim()) {
      toast.error("Description is required");
      return;
    }

    const formData = new FormData();
    formData.append("userId", user.email);
    formData.append("name", user.userName);
    formData.append("email", user.email);
    formData.append("experience", experience);
    formData.append("location", location);
    formData.append("phoneNumber", `+91${phoneNumber}`);
    formData.append("description", description);
    formData.append("skills", JSON.stringify(skills));
    if (resume) formData.append("resume", resume);
    if (profilePicture) formData.append("profilePicture", profilePicture);

    try {
      const res = await submitCompleteProfile(formData);
      if (res.data.success) {
        toast.success("✅ Profile saved!");
        localStorage.setItem("jobSeekerDetails", JSON.stringify(res.data.jobSeeker));
        setTimeout(() => navigate("/finddev"), 2000);
      } else {
        toast.error(res.data.message || "Failed to save");
      }
    } catch {
      toast.error("Server error. Please try again later.");
    }
  };

  return (
    <>
      <div className="container my-5">
        <ToastContainer position="top-right" />
        <div className="card p-4 shadow-sm">
          <h4 className="mb-4 text-center">Complete Your Profile</h4>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control form-control-sm" value={user.userName} disabled />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control form-control-sm" value={user.email} disabled />
              </div>
              <div className="col-md-6">
                <label className="form-label">Experience (years)</label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control form-control-sm"
                  placeholder="+91 9876543210"
                  maxLength="10"
                  value={phoneNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 10) setPhoneNumber(value);
                  }}
                  required
                />
                <small className="text-muted">Indian mobile format only</small>
              </div>

              <div className="col-md-6">
                <label className="form-label">Add Skills</label>
                <div className="d-flex gap-2 flex-wrap">
                  <input
                    type="text"
                    className="form-control form-control-sm flex-grow-1"
                    placeholder="Type skill"
                    value={inputSkill}
                    onChange={(e) => setInputSkill(e.target.value)}
                    onKeyDown={handleSkillKeyDown}
                  />
                  <button type="button" className="btn btn-primary btn-sm" onClick={addSkill}>
                    Add
                  </button>
                </div>
                <small className="text-muted">Tap "Add" or press Enter to submit</small>
                <div className="mt-2">
                  {skills.map((skill, i) => (
                    <span key={i} className="badge bg-primary me-2 mb-1">
                      {skill}{" "}
                      <span style={{ cursor: "pointer" }} onClick={() => handleSkillDelete(skill)}>
                        ✕
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Upload Resume (PDF)</label>
                <input
                  type="file"
                  className="form-control form-control-sm"
                  accept=".pdf"
                  onChange={(e) => setResume(e.target.files[0])}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Upload Profile Picture</label>
                <input
                  type="file"
                  className="form-control form-control-sm"
                  accept="image/*"
                  onChange={(e) => setProfilePicture(e.target.files[0])}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Short Description</label>
                <textarea
                  className="form-control form-control-sm"
                  rows="3"
                  placeholder="Write a short description about yourself..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-success btn-sm px-4">
                Save Profile
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompleteProfile;
