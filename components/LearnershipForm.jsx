import React from "react";
import { useNavigate } from "react-router-dom";

const LearnershipForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your validation here if needed

    alert("Learnership application submitted!");
    navigate("/"); // Redirect to home after submission
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Learnership Application</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input type="text" name="fullname" required style={styles.input} />

        <label>Email:</label>
        <input type="email" name="email" required style={styles.input} />

        <label>Phone Number:</label>
        <input type="tel" name="phone" required style={styles.input} />

        <label>Highest Qualification:</label>
        <select name="qualification" required style={styles.input}>
          <option value="">Select Qualification</option>
          <option value="matric">Matric</option>
          <option value="diploma">Diploma</option>
          <option value="degree">Degree</option>
          <option value="other">Other</option>
        </select>

        <label>Field of Interest:</label>
        <input type="text" name="field" required style={styles.input} />

        <label>Upload Your CV:</label>
        <input
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx"
          required
          style={styles.input}
        />

        <label>Upload ID Document:</label>
        <input
          type="file"
          name="id"
          accept=".pdf,.jpg,.jpeg,.png"
          required
          style={styles.input}
        />

        <label>Why are you interested in this learnership?</label>
        <textarea
          name="motivation"
          rows="4"
          required
          style={styles.input}
        ></textarea>

        <label style={{ marginTop: "15px", display: "block" }}>
          <input type="checkbox" name="declaration" required /> I declare that
          the information provided is true and complete.
        </label>

        <input
          type="submit"
          value="Submit Application"
          style={styles.submitBtn}
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
  submitBtn: {
    marginTop: "20px",
    backgroundColor: "#28a745",
    color: "white",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "4px",
  },
};

export default LearnershipForm;
