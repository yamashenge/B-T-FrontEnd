import React from "react";

const InternshipForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Internship application submitted!");
    // Here you could add API call to submit form data
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Internship Application</h1>
      <form style={styles.form} encType="multipart/form-data" onSubmit={handleSubmit}>
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
        <label>Current Level of Education:</label>
        <select name="educationLevel" required style={styles.input}>
          <option value="">Select...</option>
          <option value="highschool">High School</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="postgraduate">Postgraduate</option>
          <option value="other">Other</option>
        </select>

        <label>Institution Name:</label>
        <input type="text" name="institution" required style={styles.input} />

        <label>Field of Study:</label>
        <input type="text" name="field" required style={styles.input} />

        {/* Availability */}
        <label>Available Start Date:</label>
        <input type="date" name="startDate" required style={styles.input} />

        <label>Duration of Internship (months):</label>
        <input type="number" name="duration" min="1" max="12" required style={styles.input} />

        {/* Experience */}
        <label>Previous Internship or Work Experience:</label>
        <textarea name="experience" rows="3" placeholder="Describe any previous internship or work experience" style={styles.input}></textarea>

        {/* File Uploads */}
        <label>Upload Your CV:</label>
        <input type="file" name="cv" accept=".pdf,.doc,.docx" required style={styles.input} />

        <label>Upload ID Document:</label>
        <input type="file" name="id" accept=".pdf,.jpg,.jpeg,.png" required style={styles.input} />

        {/* Motivation */}
        <label>Why are you interested in this internship?</label>
        <textarea name="motivation" rows="4" required style={styles.input}></textarea>

        {/* Declaration */}
        <label style={{ marginTop: "15px", display: "block" }}>
          <input type="checkbox" name="declaration" required /> I declare that the information provided is true and complete.
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
            borderRadius: "4px",
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
    backgroundColor: "#f0f2f5",
  },
  heading: {
    textAlign: "center",
    color: "#2c3e50",
  },
  form: {
    marginTop: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
  },
};

export default InternshipForm;
