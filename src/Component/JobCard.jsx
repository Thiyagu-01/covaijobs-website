import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaTrash, FaBuilding, FaMapMarkerAlt, FaMoneyBillWave,
  FaBriefcase, FaClock
} from 'react-icons/fa';
import { debounce } from 'lodash';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/JobList.css';
import Footer from '../Home/Footer';
import { fetchAllJobs, deleteJob } from '../api';

const JobList = ({ refresh }) => {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [filters, setFilters] = useState({
    jobType: '', location: '', minSalary: '', maxSalary: '', title: '',
  });
  const [isApplying, setIsApplying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  const username = user?.userName || '';

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetchAllJobs();
        setJobs(res.data);
        setAllJobs(res.data);
      } catch {
        toast.error("Error fetching jobs");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [refresh]);

  const applyFilters = (filterData) => {
    const filtered = allJobs.filter((job) => {
      const matchesTitle = filterData.title === '' || job.title.toLowerCase().includes(filterData.title.toLowerCase());
      const matchesType = filterData.jobType === '' || job.type === filterData.jobType;
      const matchesLocation = job.location.toLowerCase().includes(filterData.location.toLowerCase());
      const matchesMinSalary = filterData.minSalary === '' || parseInt(job.salary) >= parseInt(filterData.minSalary);
      const matchesMaxSalary = filterData.maxSalary === '' || parseInt(job.salary) <= parseInt(filterData.maxSalary);
      return matchesTitle && matchesType && matchesLocation && matchesMinSalary && matchesMaxSalary;
    });
    setJobs(filtered);
  };

  const debouncedFilter = debounce((updatedFilters) => {
    setFilters(prev => {
      const newFilters = { ...prev, ...updatedFilters };
      applyFilters(newFilters);
      return newFilters;
    });
  }, 400);

  useEffect(() => () => debouncedFilter.cancel(), []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    debouncedFilter({ [name]: value });
  };

  const handleDelete = async (id) => {
    try {
      await deleteJob(id);
      setJobs(prev => prev.filter((job) => job._id !== id));
      setAllJobs(prev => prev.filter((job) => job._id !== id));
      toast.success("Job deleted successfully!");
    } catch {
      toast.error("Failed to delete job.");
    }
  };

  const showDeleteConfirm = (id, e) => {
    e.stopPropagation();
    if (confirmDeleteId === id) return;
    setConfirmDeleteId(id);
    toast(
      <div>
        <p className="mb-2">Are you sure you want to delete this job?</p>
        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-sm btn-danger" onClick={() => {
            handleDelete(id);
            setConfirmDeleteId(null);
            toast.dismiss();
          }}>
            Yes, Delete
          </button>
          <button className="btn btn-sm btn-secondary" onClick={() => {
            setConfirmDeleteId(null);
            toast.dismiss();
          }}>
            Cancel
          </button>
        </div>
      </div>,
      {
        position: 'top-center',
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        draggable: false,
      }
    );
  };

  const handleApply = (jobId) => {
    if (!user) return navigate('/signup');
    setIsApplying(true);
    const job = jobs.find((j) => j._id === jobId);
    navigate('/apply', { state: { jobDetails: job } });
  };

  const handleSort = (e) => {
    const value = e.target.value;
    let sorted = [...jobs];
    if (value === 'salary-high') sorted.sort((a, b) => b.salary - a.salary);
    else if (value === 'salary-low') sorted.sort((a, b) => a.salary - b.salary);
    else if (value === 'experience') sorted.sort((a, b) => b.experience - a.experience);
    setJobs(sorted);
  };

  const resetFilters = () => {
    const defaultFilters = {
      jobType: '', location: '', minSalary: '', maxSalary: '', title: '',
    };
    setFilters(defaultFilters);
    setJobs(allJobs);
  };

  return (
    <>
      <ToastContainer />
      <div className="container my-4">
        {/* Mobile Filters */}
        <div className="d-md-none mb-3">
          <input type="text" name="title" className="form-control mb-2" placeholder="Search Job Title" onChange={handleFilterChange} />
          <input type="text" name="location" className="form-control mb-2" placeholder="Location" onChange={handleFilterChange} />
          <select name="jobType" className="form-select mb-2" onChange={handleFilterChange}>
            <option value="">Type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
            <option value="Freelance">Freelance</option>
          </select>
          <select className="form-select" onChange={handleSort}>
            <option value="">Sort</option>
            <option value="salary-high">Salary: High to Low</option>
            <option value="salary-low">Salary: Low to High</option>
            <option value="experience">Experience Required</option>
          </select>
        </div>

        <div className="row">
          {/* Sidebar filters for desktop */}
          <div className="col-md-3 d-none d-md-block">
            <h5>Filters</h5>
            <input type="text" name="title" placeholder="Job Title" className="form-control mb-2" onChange={handleFilterChange} />
            <select name="jobType" className="form-select mb-2" onChange={handleFilterChange}>
              <option value="">Job Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
              <option value="Freelance">Freelance</option>
            </select>
            <input type="text" name="location" placeholder="Location" className="form-control mb-2" onChange={handleFilterChange} />
            <input type="number" name="minSalary" placeholder="Min Salary" className="form-control mb-2" onChange={handleFilterChange} />
            <input type="number" name="maxSalary" placeholder="Max Salary" className="form-control mb-2" onChange={handleFilterChange} />
            <button className="btn btn-outline-danger w-100" onClick={resetFilters}>Reset</button>
            <select className="form-select mt-3" onChange={handleSort}>
              <option value="">Sort By</option>
              <option value="salary-high">Salary: High to Low</option>
              <option value="salary-low">Salary: Low to High</option>
              <option value="experience">Experience Required</option>
            </select>
          </div>

          {/* Job Cards */}
          <div className="col-md-9">
            <h3>All Posted Jobs</h3>
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : jobs.length === 0 ? (
              <div className="text-center">
                <img src="/no-data-found.svg" alt="No Jobs" style={{ width: '250px' }} />
                <p>No jobs matched your search criteria.</p>
              </div>
            ) : (
              <div className="row">
                {jobs.map((job) => (
                  <div className="col-md-6 col-lg-4 mb-4" key={job._id}>
                    <div className="card h-100" onClick={() => handleApply(job._id)}>
                      <div className="card-body">
                        <h5 className="card-title">{job.title}</h5>
                        {username === 'admin' && (
                          <div className="text-end">
                            <button className="btn btn-sm btn-outline-danger" onClick={(e) => showDeleteConfirm(job._id, e)}>
                              <FaTrash />
                            </button>
                          </div>
                        )}
                        <p><FaBuilding /> <strong>{job.company}</strong></p>
                        <p><FaBriefcase /> {job.experience} yrs | <FaMoneyBillWave /> ₹{job.salary}</p>
                        <p><FaMapMarkerAlt /> {job.location}</p>
                        <p><FaClock /> {job.type}</p>
                        <p>{job.description.length > 100 ? job.description.slice(0, 100) + '...' : job.description}</p>
                        <button className="btn btn-primary w-100 mt-2" onClick={(e) => { e.stopPropagation(); handleApply(job._id); }}>
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobList;