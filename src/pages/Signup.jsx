import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/CreateAccount.css";

function CreateAccount() {
  const [type, setType] = useState("organisation");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    website: "",
    phone: "",
    crn: "",
    organization: "",
    email: "",
    city: "",
    referral: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    setError("");
    setSuccess("");

    const requiredFields =
      type === "organisation"
        ? [
            "firstName",
            "lastName",
            "jobTitle",
            "website",
            "phone",
            "crn",
            "organization",
            "email",
            "city",
          ]
        : ["firstName", "lastName", "phone", "email", "city"];

    const isEmpty = requiredFields.some(
      (field) => !formData[field].trim()
    );

    if (isEmpty) {
      setError("Please fill all required fields ❗");
      return;
    }

    setSuccess("Registered successfully ✔️");

    // ✅ GO TO PROFILE PAGE
    setTimeout(() => {
      navigate("/upload-profile");
    }, 800);
  };

  return (
    <div className="ca-wrapper">
      <div className="ca-container">
        <div className="ca-right">
          <h1>Create your covaijobs Account</h1>

          <p className="ca-desc">
            Covaijobs is an exclusive network of the world's top talent.
          </p>

          {/* RADIO */}
          <div className="ca-radio">
            <label>
              <input
                type="radio"
                checked={type === "organisation"}
                onChange={() => setType("organisation")}
              />
              Organisation
            </label>

            <label>
              <input
                type="radio"
                checked={type === "individual"}
                onChange={() => setType("individual")}
              />
              Individual
            </label>
          </div>

          {/* FORM */}
          <div className="ca-form">
            <div className="ca-col">
              {type === "organisation" && (
                <>
                  <input name="firstName" placeholder="First Name *" onChange={handleChange} />
                  <input name="jobTitle" placeholder="Job title *" onChange={handleChange} />
                  <input name="website" placeholder="Website *" onChange={handleChange} />
                  <input name="phone" placeholder="Phone number *" onChange={handleChange} />
                  <input name="crn" placeholder="Corporate Registration Number *" onChange={handleChange} />
                </>
              )}

              {type === "individual" && (
                <>
                  <input name="firstName" placeholder="First Name *" onChange={handleChange} />
                  <input name="city" placeholder="City *" onChange={handleChange} />
                  <input name="email" placeholder="Work email *" onChange={handleChange} />
                </>
              )}
            </div>

            <div className="ca-col">
              {type === "organisation" && (
                <>
                  <input name="lastName" placeholder="Last Name *" onChange={handleChange} />
                  <input name="organization" placeholder="Organization *" onChange={handleChange} />
                  <input name="email" placeholder="Work email *" onChange={handleChange} />
                  <input name="city" placeholder="City *" onChange={handleChange} />
                  <input name="referral" placeholder="Referral code" onChange={handleChange} />
                </>
              )}

              {type === "individual" && (
                <>
                  <input name="lastName" placeholder="Last Name *" onChange={handleChange} />
                  <input name="phone" placeholder="Phone number *" onChange={handleChange} />
                  <input name="referral" placeholder="Referral code" onChange={handleChange} />
                </>
              )}
            </div>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}

          <div className="ca-left">
            <button className="register-btn" onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
