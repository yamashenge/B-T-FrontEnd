import React from "react";

const JobForm = () => {
  return (
    <div className="container" style={{
      width: "80%",
      maxWidth: "800px",
      margin: "50px auto",
      padding: "30px",
      background: "white",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4"
    }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Job Application Form</h1>
      <form action="#" method="POST" encType="multipart/form-data">
        {/* Personal Information */}
        <label htmlFor="fullname" style={{ display: "block", marginTop: "15px", fontWeight: "bold" }}>Full Name:</label>
        <input type="text" id="fullname" name="fullname" required style={inputStyle} />

        <label htmlFor="email" style={labelStyle}>Email Address:</label>
        <input type="email" id="email" name="email" required style={inputStyle} />

        <label htmlFor="phone" style={labelStyle}>Phone Number:</label>
        <input type="tel" id="phone" name="phone" required pattern="[0-9]{10}" title="Enter a 10-digit phone number" style={inputStyle} />

        <label htmlFor="dob" style={labelStyle}>Date of Birth:</label>
        <input type="date" id="dob" name="dob" required style={inputStyle} />

        <label htmlFor="gender" style={labelStyle}>Gender:</label>
        <select id="gender" name="gender" required style={inputStyle}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {/* Job Details */}
        <label htmlFor="position" style={labelStyle}>Position Applying For:</label>
        <input type="text" id="position" name="position" required style={inputStyle} />

        <label htmlFor="experience" style={labelStyle}>Years of Experience:</label>
        <input type="number" id="experience" name="experience" min="0" required style={inputStyle} />

        <label htmlFor="expectedSalary" style={labelStyle}>Expected Monthly Salary (ZAR):</label>
        <input type="number" id="expectedSalary" name="expectedSalary" required style={inputStyle} />

        {/* Resume and Supporting Documents */}
        <label htmlFor="cv" style={labelStyle}>Upload Your CV:</label>
        <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" required style={inputStyle} />
        <small style={{ color: "#666", marginTop: "5px", display: "block" }}>Accepted formats: .pdf, .doc, .docx</small>

        <label htmlFor="coverLetter" style={labelStyle}>Upload Cover Letter (optional):</label>
        <input type="file" id="coverLetter" name="coverLetter" accept=".pdf,.doc,.docx" style={inputStyle} />
        <small style={{ color: "#666", marginTop: "5px", display: "block" }}>Optional</small>

        {/* Motivation */}
        <label htmlFor="motivation" style={labelStyle}>Why do you want this job?</label>
        <textarea id="motivation" name="motivation" rows="4" required style={inputStyle}></textarea>

        {/* References */}
        <label htmlFor="reference" style={labelStyle}>Reference Name & Contact:</label>
        <input type="text" id="reference" name="reference" required style={inputStyle} />

        {/* Declaration */}
        <label style={{ marginTop: "15px", display: "block" }}>
          <input type="checkbox" name="declaration" required />
          {' '}I declare that the information provided is true and complete.
        </label>

        <input
          type="submit"
          value="Submit Application"
          style={{
            marginTop: "20px",
            backgroundColor: "#28a745",
            color: "white",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            borderRadius: "4px"
          }}
        />
      </form>
    </div>
  );
};

// Common styles for inputs, selects and textareas
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block",
  marginTop: "15px",
  fontWeight: "bold",
};

export default JobForm;
