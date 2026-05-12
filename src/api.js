import axios from "axios";

// ✅ Define BASE_URL from environment variable
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// ✅ Create reusable Axios instance if needed
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const applyToJob = (formData) =>
  axios.post(`${BASE_URL}/apply`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const submitCompleteProfile = (formData) =>
  axios.post(`${BASE_URL}/jobseeker/profile/details`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const fetchAllJobs = () =>
  axios.get(`${BASE_URL}/jobs`);

// ✅ DELETE: Job by ID
export const deleteJob = (id) =>
  axios.delete(`${BASE_URL}/jobs/${id}`);

export const postJob = (jobData) =>
  axios.post(`${BASE_URL}/jobs/add`, jobData);