import { useState } from "react";
import "./MyAppliedJobs.css";

const initialJobs = [];

export default function AppliedJobs() {
  const [jobs] = useState(initialJobs);
  const [search, setSearch] = useState("");
  const [showEntries, setShowEntries] = useState(10);

  const filtered = jobs.filter(
    (j) =>
      j.name?.toLowerCase().includes(search.toLowerCase()) ||
      j.jdId?.toLowerCase().includes(search.toLowerCase()) ||
      j.jobTitle?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="applied-jobs-wrapper">

      {/* Page Header */}
      <div className="page-header">
        <h2 className="page-title">Applied Jobs</h2>
        <span className="breadcrumb">
          Home / <span className="breadcrumb-link">Applied Jobs</span>
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
            <span>Show</span>
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
        <table className="applied-jobs-table">
          <thead>
            <tr>
              {["JD ID", "Applied Date", "Job Title", "Unique ID", "Name", "Action",].map((col) => (
                <th key={col}>
                  {col}
                 <span className="sort-icon">⇅</span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="empty-message">
                  You have not applied for any jobs yet
                </td>
              </tr>
            ) : (
              filtered.slice(0, showEntries).map((job) => (
                <tr key={job.jdId} className="job-row">
                  <td>{job.jdId}</td>
                  <td>{job.appliedDate}</td>
                  <td>{job.jobTitle}</td>
                  <td>{job.uniqueId}</td>
                  <td>{job.name}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-action" title="View">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </button>
                      <button className="btn-action btn-delete" title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"/>
                          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                          <path d="M10 11v6"/><path d="M14 11v6"/>
                          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Table Footer */}
        <div className="table-footer">
          <span className="table-footer-info">
            Showing 0 to 0 of {filtered.length} entries
          </span>
          <div className="pagination">
            <button className="btn-page">Previous</button>
            <button className="btn-page">Next</button>
          </div>
        </div>
      </div>

      
    </div>
  );
}