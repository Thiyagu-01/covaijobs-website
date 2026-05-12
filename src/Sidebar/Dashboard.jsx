import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      
      {/* Top Breadcrumb */}
      <div className="dashboard-header">
        <h2>Welcome back, Pradeepa S!</h2>
        <div className="breadcrumb">
          <span className="home-link">Home</span> / Dashboard
        </div>
      </div>

      {/* Upload Card */}
      <div className="upload-card">
        <p>
          Please upload your profile to get matched with projects.
        </p>

        <p>
          Get insights & analytics specifically for your profile as soon as you upload them!
        </p>

        <button className="upload-btn">Upload</button>
      </div>

    </div>
  );
}