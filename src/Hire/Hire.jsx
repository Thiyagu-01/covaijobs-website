import React, { useState, useEffect } from "react";
import { api } from "../api"; // ✅ Centralized axios import
import { FaTrash } from "react-icons/fa";
import "./AllProfiles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [animatedIds, setAnimatedIds] = useState([]);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUsername(user?.userName || "");
  }, []);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await api.get("/jobseeker/profiles/all");
        if (data.success) {
          setProfiles(data.profiles);
          setFilteredProfiles(data.profiles);
          data.profiles.forEach((profile, idx) => {
            setTimeout(() => {
              setAnimatedIds((prev) =>
                prev.includes(profile._id) ? prev : [...prev, profile._id]
              );
            }, idx * 100);
          });
        } else {
          setError("Failed to load profiles");
        }
      } catch {
        setError("Error fetching profiles");
      } finally {
        setLoading(false);
      }
    };
    fetchProfiles();
  }, []);

  const handleDelete = async (id) => {
    setDeletingId(id);
    try {
      await api.delete(`/jobseeker/profiles/delete/${id}`, {
        headers: { "x-user": username },
      });
      toast.success("Profile deleted successfully!");
      setTimeout(() => {
        setProfiles((prev) => prev.filter((p) => p._id !== id));
        setFilteredProfiles((prev) => prev.filter((p) => p._id !== id));
        setAnimatedIds((prev) => prev.filter((animId) => animId !== id));
        setDeletingId(null);
        setConfirmDeleteId(null);
      }, 500);
    } catch {
      toast.error("Failed to delete profile or permission denied.");
      setDeletingId(null);
    }
  };

  const showDeleteConfirm = (id, e) => {
    e.stopPropagation();
    if (confirmDeleteId === id) return;

    setConfirmDeleteId(id);
    toast(
      <div>
        <p className="mb-2">Are you sure you want to delete this profile?</p>
        <div className="d-flex justify-content-end gap-2">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              handleDelete(id);
              toast.dismiss();
            }}
          >
            Yes, Delete
          </button>
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => {
              setConfirmDeleteId(null);
              toast.dismiss();
            }}
          >
            Cancel
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        draggable: false,
        toastId: `delete-${id}`,
      }
    );
  };

  useEffect(() => {
    const ft = filterText.trim().toLowerCase();
    if (!ft) return setFilteredProfiles(profiles);

    const filtered = profiles.filter((profile) => {
      const name = profile.name?.toLowerCase() || "";
      const location = profile.location?.toLowerCase() || "";
      const skills = Array.isArray(profile.skills)
        ? profile.skills.map((s) => s.toLowerCase())
        : [];
      return (
        name.includes(ft) ||
        location.includes(ft) ||
        skills.some((skill) => skill.includes(ft))
      );
    });
    setFilteredProfiles(filtered);
  }, [filterText, profiles]);

  const capitalize = (text) =>
    text?.charAt(0).toUpperCase() + text?.slice(1).toLowerCase();

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Loading profiles...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-danger text-center mt-5 fs-5">{error}</p>;
  }

  return (
    <div className="container my-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <h2 className="mb-4 text-center text-primary fw-bold">Job Seeker Profiles</h2>

      {username && (
        <p className="text-end text-muted small">
          Logged in as: <strong>{capitalize(username)}</strong>
        </p>
      )}

      <div className="search-wrapper mb-4 position-relative">
        <input
          type="search"
          className="form-control rounded-pill ps-5 py-2 shadow-sm"
          placeholder="Search by name, skills or location..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <i className="bi bi-search search-icon position-absolute top-50 translate-middle-y ps-3"></i>
      </div>

      {filteredProfiles.length === 0 ? (
        <p className="text-center text-muted fs-6">No profiles found.</p>
      ) : (
        <div className="row gy-4">
          {filteredProfiles.map((profile, index) => {
            const isAnimated = animatedIds.includes(profile._id);
            return (
              <div
                key={profile._id}
                className={`col-12 col-md-6 col-lg-4 profile-card-wrapper ${
                  isAnimated ? "card-entrance" : ""
                } ${deletingId === profile._id ? "fade-out" : ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="profile-card card shadow-sm border-0 rounded-4 p-3 position-relative gap-3">
                  {username === "admin" && (
                    <button
                      className="delete-icon"
                      onClick={(e) => showDeleteConfirm(profile._id, e)}
                      title="Delete Profile"
                      disabled={deletingId === profile._id}
                    >
                      {deletingId === profile._id ? (
                        <span className="spinner-border spinner-border-sm"></span>
                      ) : (
                        <FaTrash style={{ color: "red" }} />
                      )}
                    </button>
                  )}

                  <div className="d-flex gap-3 align-items-start">
                    <div className="flex-grow-1">
                      <h5 className="fw-semibold mb-1 text-capitalize">
                        {capitalize(profile.name) || "N/A"}{" "}
                        <span className="text-danger small">
                          {profile.employeeCode || ""}
                        </span>
                      </h5>
                      <p className="mb-1 fw-medium">
                        {profile.experience || "0"} years
                      </p>

                      <div className="d-flex flex-wrap gap-2 mb-2">
                        {profile.skills?.length > 0 ? (
                          profile.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="badge bg-light border text-dark rounded-pill px-2 py-1"
                            >
                              {capitalize(skill)}
                            </span>
                          ))
                        ) : (
                          <span className="text-muted small">No skills listed</span>
                        )}
                      </div>

                      <p className="small text-muted mb-2">
                        {profile.description || "No description available..."}
                      </p>

                      <a
                        href={`mailto:kchannel022@gmail.com?subject=Hire ${capitalize(
                          profile.name
                        )}&body=Hello,%0D%0AI want to hire ${capitalize(
                          profile.name
                        )}.%0D%0AThanks.`}
                        className="small text-primary text-decoration-none"
                      >
                        <i className="bi bi-person-plus me-1"></i>
                        Hire {capitalize(profile.name?.split(" ")[0])}
                      </a>
                    </div>

                    <div className="d-flex flex-column align-items-center ms-auto p-3">
                      {profile.profilePicture ? (
                        <img
                          src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${profile.profilePicture}`}
                          alt="Profile"
                          className="rounded-circle border border-2 border-primary mb-3"
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div className="profile-placeholder mb-3">
                          <i className="bi bi-person-fill fs-1 text-secondary"></i>
                        </div>
                      )}

                      {profile.resume ? (
                        <a
                          href={`${process.env.REACT_APP_API_BASE_URL}/uploads/${profile.resume}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-sm btn-outline-primary rounded-pill mb-1"
                        >
                          <i className="bi bi-download me-1"></i> Resume
                        </a>
                      ) : (
                        <span className="text-muted small mb-1">No resume</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AllProfiles;
