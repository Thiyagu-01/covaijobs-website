import { useState } from "react";
import { useLocation } from "react-router-dom";  // ✅ ADD
import "./JobDetails.css";

const jobTypes = [
    "Full-time",
    "Permanent",
    "Fresher",
    "Part-time",
    "Internship",
    "Contractual / Temporary",
    "Freelance",
    "Volunteer",
];

export default function Jobdetails({ goBack }) {
    const location = useLocation();   // ✅ ADD (optional if receiving data)

    // ✅ Data from HiringGoals page (if passed)
    const { timeline, count } = location.state || {};

    const [selectedTypes, setSelectedTypes] = useState([]);
    const [fixedHours, setFixedHours] = useState("");
    const [showBy, setShowBy] = useState("Fixed hours");
    const [contractLength, setContractLength] = useState("");
    const [contractPeriod, setContractPeriod] = useState("month(s)");

    const toggleType = (type) => {
        setSelectedTypes((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    const isSelected = (type) => selectedTypes.includes(type);

    const showPartTimeSection = selectedTypes.includes("Part-time");
    const showInternshipSection = selectedTypes.includes("Internship");

    
    // ✅ CONTINUE BUTTON FUNCTION
    const handleContinue = () => {
        if (selectedTypes.length === 0) {
            alert("Please select at least one job type.");
            return;
        }

        alert("Proceeding to next step...");
        // navigate("/nextpage");  // you can add next route here
    };

    return (
        <div className="jd-wrapper">
            {/* Main Content */}
            <main className="jd-main">
                <div className="jd-card">
                    <h1 className="jd-title">Add job details</h1>

                    {/* OPTIONAL: Display previous page data */}
                    {timeline && (
                        <div style={{ marginBottom: "15px", fontSize: "14px" }}>
                            <strong>Timeline:</strong> {timeline} |
                            <strong> Hiring:</strong> {count}
                        </div>
                    )}

                    {/* Job Type Section */}
                    <div className="jd-section">
                        <label className="jd-label">
                            Job type <span className="jd-required">*</span>
                        </label>
                        <div className="jd-chips">
                            {jobTypes.map((type) => (
                                <button
                                    type="button"
                                    key={type}
                                    className={`jd-chip ${isSelected(type) ? "jd-chip--active" : ""}`}
                                    onClick={() => toggleType(type)}
                                >
                                    <span className="jd-chip-icon">
                                        {isSelected(type) ? "✓" : "+"}
                                    </span>
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Part-time Section */}
                    {showPartTimeSection && (
                        <div className="jd-section jd-section--animated">
                            <label className="jd-label">Expected hours</label>
                            <div className="jd-row">
                                <div className="jd-field-group">
                                    <span className="jd-field-label">Show by</span>
                                    <select
                                        className="jd-select"
                                        value={showBy}
                                        onChange={(e) => setShowBy(e.target.value)}
                                    >
                                        <option>Fixed hours</option>
                                        <option>Range</option>
                                        <option>Flexible</option>
                                    </select>
                                </div>
                                <div className="jd-field-group">
                                    <span className="jd-field-label">Fixed at</span>
                                    <div className="jd-input-unit">
                                        <input
                                            type="number"
                                            className="jd-input"
                                            value={fixedHours}
                                            onChange={(e) => setFixedHours(e.target.value)}
                                            min="1"
                                            max="99"
                                        />
                                        <span className="jd-unit">Hours per week</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Internship Section */}
                    {showInternshipSection && (
                        <div className="jd-section jd-section--animated">
                            <label className="jd-label">How long is the contract?</label>
                            <div className="jd-row">
                                <div className="jd-field-group">
                                    <span className="jd-field-label">Length</span>
                                    <input
                                        type="number"
                                        className="jd-input jd-input--wide"
                                        value={contractLength}
                                        onChange={(e) => setContractLength(e.target.value)}
                                        min="1"
                                    />
                                </div>
                                <div className="jd-field-group">
                                    <span className="jd-field-label">Period</span>
                                    <select
                                        className="jd-select"
                                        value={contractPeriod}
                                        onChange={(e) => setContractPeriod(e.target.value)}
                                    >
                                        <option>month(s)</option>
                                        <option>week(s)</option>
                                        <option>year(s)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="jd-actions">
                        <button
                            className="jd-btn jd-btn--back"
                            onClick={goBack}
                        >
                            ← Back
                        </button>

                        <button
                            className="jd-btn jd-btn--continue"
                            onClick={handleContinue}
                        >
                            Continue →
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}