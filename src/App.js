import React, { useState } from 'react';
import './App.css';

function App() {
  const [marks, setMarks] = useState({
    english: 0,
    language: 0,
    maths: 0,
    science: 0,
    socialScience: 0,
  });

  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMarks({ ...marks, [name]: Number(value) });
  };

  const calculatePercentage = () => {
    const totalMarks =
      marks.english + marks.language + marks.maths + marks.science + marks.socialScience;

    if (totalMarks > 500) {
      alert("Total marks cannot exceed 500");
      return;
    }

    setTotal(totalMarks);
    const calculatedPercentage = ((totalMarks / 500) * 100).toFixed(2);
    setPercentage(calculatedPercentage);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CBSE Class 10 Percentage Calculator</h1>
        <p>Made by <a href="https://github.com/codewithriza" target="_blank" rel="noopener noreferrer">codewithriza</a></p>
      </header>
      <main className="App-main">
        <div className="calculator">
          <div className="input-container">
            <label htmlFor="english">English:</label>
            <input
              type="number"
              id="english"
              name="english"
              value={marks.english}
              onChange={handleInputChange}
              placeholder="Enter marks (0-100)"
            />
          </div>
          <div className="input-container">
            <label htmlFor="language">Language:</label>
            <input
              type="number"
              id="language"
              name="language"
              value={marks.language}
              onChange={handleInputChange}
              placeholder="Enter marks (0-100)"
            />
          </div>
          <div className="input-container">
            <label htmlFor="maths">Maths:</label>
            <input
              type="number"
              id="maths"
              name="maths"
              value={marks.maths}
              onChange={handleInputChange}
              placeholder="Enter marks (0-100)"
            />
          </div>
          <div className="input-container">
            <label htmlFor="science">Science:</label>
            <input
              type="number"
              id="science"
              name="science"
              value={marks.science}
              onChange={handleInputChange}
              placeholder="Enter marks (0-100)"
            />
          </div>
          <div className="input-container">
            <label htmlFor="socialScience">SST:</label>
            <input
              type="number"
              id="socialScience"
              name="socialScience"
              value={marks.socialScience}
              onChange={handleInputChange}
              placeholder="Enter marks (0-100)"
            />
          </div>
          <button onClick={calculatePercentage}>Calculate Percentage</button>
          <div className="result-container">
            <label htmlFor="total">Total:</label>
            <input type="text" id="total" value={total} disabled />
            <label htmlFor="percentage">Percentage:</label>
            <input type="text" id="percentage" value={`${percentage}%`} disabled />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
