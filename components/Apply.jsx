// src/components/Apply.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Apply = () => {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState('');
  const navigate = useNavigate();

  const opportunityTypes = ['Job', 'Learnership', 'Internship'];

  const allPosts = [
    { id: 1, title: 'Frontend Developer', type: 'Job' },
    { id: 2, title: 'Graphic Design Internship', type: 'Internship' },
    { id: 3, title: 'Digital Marketing Learnership', type: 'Learnership' },
  ];

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleContinue = () => {
    if (selectedType) {
      setStep(2);
    }
  };

  const handleApply = (post) => {
    const route =
      post.type === 'Job'
        ? '/job-form'
        : post.type === 'Internship'
        ? '/internship-form'
        : '/learnership-form';

    navigate(route, { state: { selectedPost: post } });
  };

  const filteredPosts = allPosts.filter((post) => post.type === selectedType);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {step === 1 && (
        <div>
          <h2>Select Opportunity Type</h2>
          <select value={selectedType} onChange={handleTypeChange}>
            <option value="">-- Select Type --</option>
            {opportunityTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <br />
          <br />
          <button disabled={!selectedType} onClick={handleContinue}>
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>{selectedType} Opportunities</h2>
          {filteredPosts.length === 0 ? (
            <p>No opportunities available.</p>
          ) : (
            <ul>
              {filteredPosts.map((post) => (
                <li key={post.id} style={{ marginBottom: '10px' }}>
                  <strong>{post.title}</strong>
                  <br />
                  <button onClick={() => handleApply(post)}>Apply</button>
                </li>
              ))}
            </ul>
          )}
          <button onClick={() => setStep(1)} style={{ marginTop: '10px' }}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Apply;
