import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileList.css";

const initialProfiles = [
  {
    id: "AXF33674",
    name: "Swetha Arjunan",
    type: "Individual",
    jobTitle: "Web Developer",
    experience: "< 1",
    maxMonthlyRate: "INR 0",
    noticePeriod: "1",
    active: "Draft",
    status: "Pending",
    country: "India",
    city: "coimbatore",
    availability: "Ready to Interview",
    expanded: false,
  },
];

export default function ManageProfiles() {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState(initialProfiles);
  const [search, setSearch] = useState("");
  const [showEntries, setShowEntries] = useState(10);

  const toggleExpand = (id) => {
    setProfiles((prev) =>
      prev.map((p) => (p.id === id ? { ...p, expanded: !p.expanded } : p))
    );
  };

  const filtered = profiles.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase()) ||
      p.jobTitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="manage-profiles-wrapper">

      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-left">
          <h2 className="page-title">Manage Profiles</h2>
          <button className="btn-add-profile" onClick={() => navigate("/upload-profile")}>Add Profile</button>
        </div>
        <span className="breadcrumb">
          Home / <span className="breadcrumb-link"> Profiles</span>
        </span>
      </div>

      {/* Table Card */}
      <div className="table-card">

        {/* Controls */}
        <div className="table-controls">
          <div className="table-search">
            <label>Search:</label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="table-entries">
            <label>Show</label>
            <select
              value={showEntries}
              onChange={(e) => setShowEntries(Number(e.target.value))}
            >
              {[10, 25, 50, 100].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
            <span>entries</span>
          </div>
        </div>

        {/* Table */}
        <table className="profiles-table">
          <thead>
            <tr>
              {[
                "Unique ID",
                "Name",
                "Type",
                "Job title",
                "Experience",
                "Max monthly rate",
                "Notice period",
                "Active",
                "Status",
                "Action",
              ].map((col) => (
                <th key={col}>
                  {col}
                  <span className="sort-icon">⇅</span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filtered.slice(0, showEntries).map((profile) => (
              <>
                {/* Main Row */}
                <tr
                  key={profile.id}
                  className={`profile-row${profile.expanded ? " expanded" : ""}`}
                >
                  <td>
                    <div className="unique-id-cell">
                      <button
                        className={`btn-expand ${profile.expanded ? "is-expanded" : "is-collapsed"}`}
                        onClick={() => toggleExpand(profile.id)}
                        title={profile.expanded ? "Collapse" : "Expand"}
                      >
                        {profile.expanded ? "−" : "+"}
                      </button>
                      {profile.id}
                    </div>
                  </td>
                  <td>{profile.name}</td>
                  <td>
                    <span className="type-link">{profile.type}</span>
                  </td>
                  <td>{profile.jobTitle}</td>
                  <td>{profile.experience}</td>
                  <td>{profile.maxMonthlyRate}</td>
                  <td>{profile.noticePeriod}</td>
                  <td>
                    <span className="status-draft">{profile.active}</span>
                  </td>
                  <td>
                    <span className="status-pending">{profile.status}</span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-action" title="View">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      </button>
                      <button className="btn-action" title="Edit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                      </button>
                      <button className="btn-action btn-delete" title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Expanded Detail Row */}
                {profile.expanded && (
                  <tr key={profile.id + "-details"} className="expanded-row">
                    <td colSpan={10}>
                      <div className="expanded-details">
                        <div className="detail-item">
                          <span className="detail-label">Country</span>
                          <span className="detail-value">{profile.country}</span>
                        </div>
                        <div className="detail-divider" />
                        <div className="detail-item">
                          <span className="detail-label">City</span>
                          <span className="detail-value">{profile.city}</span>
                        </div>
                        <div className="detail-divider" />
                        <div className="detail-item">
                          <span className="detail-label">Availibility</span>
                          <span className="detail-value">{profile.availability}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>

        {/* Table Footer */}
        <div className="table-footer">
          <span className="table-footer-info">
            Showing 1 to {Math.min(filtered.length, showEntries)} of{" "}
            {filtered.length} entries
          </span>
          <div className="pagination">
            <button className="btn-page">Previous</button>
            <button className="btn-page active">1</button>
            <button className="btn-page">Next</button>
          </div>
        </div>
      </div>

     
    </div>
  );
}