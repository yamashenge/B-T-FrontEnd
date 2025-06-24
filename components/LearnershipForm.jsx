// src/components/LearnershipForm.jsx
import React from "react";

const LearnershipForm = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Learnership / Internship Application</h1>
      <form style={styles.form} encType="multipart/form-data">
        {/* Personal Details */}
        <label>Full Name:</label>
        <input type="text" name="fullname" required style={styles.input} />

        <label>Email:</label>
        <input type="email" name="email" required style={styles.input} />

        <label>Phone Number:</label>
        <input type="tel" name="phone" required style={styles.input} />

        <label>Date of Birth:</label>
        <input type="date" name="dob" required style={styles.input} />

        <label>Gender:</label>
        <select name="gender" required style={styles.input}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {/* Education */}
        <label>Highest Education:</label>
        <select name="education" required style={styles.input}>
          <option value="">Select...</option>
          <option value="matric">Matric</option>
          <option value="certificate">Certificate</option>
          <option value="diploma">Diploma</option>
          <option value="degree">Degree</option>
        </select>

        <label>Institution Name:</label>
        <input type="text" name="institution" required style={styles.input} />

        <label>Field of Study:</label>
        <input type="text" name="field" required style={styles.input} />

        <label>Year Completed:</label>
        <input type="number" name="completionYear" required style={styles.input} />

        {/* Employment */}
        <label>Do you have work experience?</label>
        <select name="experience" required style={styles.input}>
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label>Previous Company (if any):</label>
        <input type="text" name="company" style={styles.input} />

        <label>Position Held:</label>
        <input type="text" name="role" style={styles.input} />

        {/* File Uploads */}
        <label>Upload Your CV:</label>
        <input type="file" name="cv" accept=".pdf,.doc,.docx" required style={styles.input} />

        <label>Upload ID Document:</label>
        <input type="file" name="id" accept=".pdf,.jpg,.jpeg,.png" required style={styles.input} />

        <label>Upload Matric Certificate:</label>
        <input type="file" name="matric" accept=".pdf,.jpg,.jpeg,.png" required style={styles.input} />

        <label>Upload Bank Statement:</label>
        <input type="file" name="bank" accept=".pdf,.jpg,.jpeg,.png" required style={styles.input} />
        {/* SARS Document Upload */}
<label>Upload SARS Document:</label>
<input
  type="file"
  name="sars"
  accept=".pdf,.jpg,.jpeg,.png"
  required
  style={styles.input}
/>




        <label>Upload Disability Letter (if applicable):</label>
        <input type="file" name="disability" accept=".pdf,.jpg,.jpeg,.png" style={styles.input} />

        {/* Motivation */}
        <label>Why are you applying for this program?</label>
        <textarea name="motivation" rows="4" required style={styles.input}></textarea>

        
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

const styles = {
  container: {
    width: "85%",
    margin: "50px auto",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f2f5"
  },
  heading: {
    textAlign: "center",
    color: "#2c3e50"
  },
  form: {
    marginTop: "20px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box"
  },
  button: {
    marginTop: "25px",
    backgroundColor: "#3498db",
    color: "white",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    padding: "12px 20px",
    borderRadius: "5px"
  }
};

export default LearnershipForm;
