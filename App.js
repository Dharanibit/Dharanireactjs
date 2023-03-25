import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    RollNo: '',
    DateofBirth: '',
    Department: '',
    CollegeName: '',
    email: '',
    Currentsemester: '',
    password: '',
    course: '',
    language: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <h1>REACTJS FORM CREATION!!</h1>
      <label>
          First Name:
          <input
            type="text"
            name="FirstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="LastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Roll No:
          <input
            type="text"
            name="RollNo"
            value={formData.rollNo}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Department:
          <input
            type="text"
            name="Department"
            value={formData.dept}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          CollegeName:
          <input
            type="text"
            name="CollegeName"
            value={formData.CollegeName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          CuurentSemester:
          <select
            name="Current semester"
            value={formData.semester}
            onChange={handleChange}
          >
            <option value="">--Please select a semester--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="Dateofbirth"
            value={formData.dob}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Course:
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Language:
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {Object.keys(formData).map((key) => (
        <p key={key}>{`${key}: ${formData[key]}`}</p>
      ))}
    </div>
  );
}

export default App;
