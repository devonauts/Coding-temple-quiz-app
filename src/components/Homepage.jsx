import React, { useState } from "react";

const HomePage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    difficulty: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.difficulty) {
      setError("Please fill out all fields.");
      return;
    }
    setError("");
    onSubmit(formData);
  };

  return (
    <div className="home-page">
      <h2>Welcome to the Trivia Quiz!</h2>
      <p>Enter your name, pick a category and difficulty to start the quiz!</p>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Category:
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">-- Select Category --</option>
            <option value="9">General Knowledge</option>
            <option value="21">Sports</option>
            <option value="23">History</option>
            <option value="17">Science & Nature</option>
          </select>
        </label>
        <br />

        <label>
          Difficulty:
          <select name="difficulty" value={formData.difficulty} onChange={handleChange}>
            <option value="">-- Select Difficulty --</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <br />

        {error && <p className="error">{error}</p>}

        <button type="submit">Get Question</button>
      </form>
    </div>
  );
};

export default HomePage;
