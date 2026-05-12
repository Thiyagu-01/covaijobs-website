import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/CreateAccount.css";

function CreateAccount() {
  const [accountType, setAccountType] = useState("organisation");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // 🔥 stop page refresh
    setError("");

    const formData = new FormData(e.target);

    const requiredFields =
      accountType === "organisation"
        ? [
            "firstName",
            "lastName",
            "email",
            "organisation",
            "website",
            "phone",
            "city",
            "crn",
          ]
        : ["firstName", "lastName", "email", "phone", "city"];

    const isEmpty = requiredFields.some(
      (field) => !formData.get(field)?.trim()
    );

    if (isEmpty) {
      setError("Please fill all required fields ❗");
      return;
    }

    // ✅ SUCCESS → go to upload profile
    navigate("/Upload-Profile");
  };

  return (
    <div className="account-page">
      <div className="account-container">

        {/* LEFT */}
        <div className="account-left">
          <h1>
            Create your <span>Covaijobs</span> Account
          </h1>
          <p>
            We provide access to top companies and resources that help
            accelerate your growth.
          </p>

          <div className="toggle">
            <button
              className={accountType === "organisation" ? "active" : ""}
              onClick={() => setAccountType("organisation")}
              type="button"
            >
              Organisation
            </button>

            <button
              className={accountType === "individual" ? "active" : ""}
              onClick={() => setAccountType("individual")}
              type="button"
            >
              Individual
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="account-right">

          {accountType === "organisation" && (
            <form className="account-form" onSubmit={handleSubmit}>
              <input name="firstName" placeholder="First Name *" />
              <input name="lastName" placeholder="Last Name *" />
              <input name="email" placeholder="Work Email *" />
              <input name="organisation" placeholder="Organisation *" />
              <input name="website" placeholder="Website *" />
              <input name="phone" placeholder="Phone Number *" />
              <input name="city" placeholder="City *" />
              <input name="crn" placeholder="Corporate Registration Number *" />
              <input name="referral" placeholder="Referral Code" />

              {error && <p className="error-text">{error}</p>}

              <button type="submit">Register</button>
            </form>
          )}

          {accountType === "individual" && (
            <form className="account-form" onSubmit={handleSubmit}>
              <input name="firstName" placeholder="First Name *" />
              <input name="lastName" placeholder="Last Name *" />
              <input name="email" placeholder="Email *" />
              <input name="phone" placeholder="Phone Number *" />
              <input name="city" placeholder="City *" />
              <input name="referral" placeholder="Referral Code" />

              {error && <p className="error-text">{error}</p>}

              <button type="submit">Register</button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
