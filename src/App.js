import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import DashboardLayout from "./layout/DashboardLayout";
import Home from "./pages/Home";
import GetAJob from "./Sidebar/GetAJob.jsx";
import ViewJobs from "./pages/Home";
import Account from "./Sidebar/Account";
import EditAccount from "./Sidebar/EditAccount";
import Step6Education from "./Files/Step6Education";
import JobTitle from "./Sidebar/GetAjob/JobTitle";
import EditJobTitle from "./Sidebar/GetAjob/EditJobTitle.jsx";
import Dashboard from "./Sidebar/Dashboard";
import AboutUs from "./Home/AboutUs";
import ProfileList from "./Sidebar/ProfileList";
import MyAppliedJobs from "./Sidebar/MyAppliedJobs";
import HiringGoals from "./Sidebar/GetAjob/HiringGoals.jsx";
import Jobdetails from "./Sidebar/GetAjob/JobDetails.jsx";
// import UploadProfile from "./Files/UploadProfile.jsx";
import HomeSlider from "./Home/HomeSlider";
// import Testimonial from "./Home/Testimonial.jsx";
import Staff from "./pages/staff.jsx";
import PostJobPanel from "./Component/PostJobPanel";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import JobCard from "./Component/JobCard";
import JobApplicationForm from "./Component/ApplyForm.jsx";
import ApplySuccess from "./Component/ApplySuccess.jsx";
import Contact from "./Home/Contact";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import UploadProfile from "./Files/UploadProfile.jsx";
import { UserContext } from "./Context/AuthContext";



function App() {
  return (
    <UserContext>
      <BrowserRouter>
        {/* PUBLIC PAGES */}
        <Navbar />

        <Routes>
  {/* PUBLIC ROUTES */}
  <Route path="/" element={<HomeSlider />} />
  <Route path="/home" element={<Home />} />
  <Route path="/view-jobs" element={<Home />} />
  <Route path="/staff-augmentation" element={<Staff />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/currentjobs" element={<JobCard />} />
  <Route path="/apply" element={<JobApplicationForm />} />
  <Route path="/apply-success" element={<ApplySuccess />} />
  <Route path="/forgot-password" element={<ForgotPasswordPage />} />
  <Route path="/reset-password" element={<ResetPassword />} />

  {/* ✅ CONTACT FIX */}
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<AboutUs />} />

  {/* DASHBOARD ROUTES (PROPER STRUCTURE) */}
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="upload-profile" element={<UploadProfile />} />
    <Route path="account" element={<Account />} />
    <Route path="edit-account" element={<EditAccount />} />
    <Route path="step6-education" element={<Step6Education />} />
    <Route path="get-a-job" element={<GetAJob />} />
    <Route path="profile-list" element={<ProfileList />} />
    <Route path="job-title" element={<JobTitle />} />
    <Route path="edit-job-title" element={<EditJobTitle />} />
    <Route path="applied-jobs" element={<MyAppliedJobs />} />
    <Route path="hiringgoals" element={<HiringGoals />} />
    <Route path="job-details" element={<Jobdetails />} />
  </Route>

</Routes>
      </BrowserRouter>
    </UserContext>
  );
}

export default App;