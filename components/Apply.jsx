import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../assets/opp.webp'; // Adjust path accordingly

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

  const handleTypeChange = (e) => setSelectedType(e.target.value);

  const handleContinue = () => {
    if (selectedType) setStep(2);
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
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#1b1b1b',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Left side - Image */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0,
          overflow: 'hidden',
        }}
      >
        <img
          src={banner}
          alt="Opportunity Banner"
          style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* Right side - Form and opportunities */}
      <div
        style={{
          flex: 1,
          padding: '40px 30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflowY: 'auto',
        }}
      >
        {step === 1 && (
          <div>
            <h2>Select Opportunity Type</h2>
            <select
              value={selectedType}
              onChange={handleTypeChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                marginTop: '10px',
                fontSize: '16px',
                border: 'none',
              }}
            >
              <option value="">-- Select Type --</option>
              {opportunityTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <br />
            <br />
            <button
              disabled={!selectedType}
              onClick={handleContinue}
              style={{
                backgroundColor: selectedType ? '#ffffff' : '#555',
                color: selectedType ? '#1b1b1b' : '#aaa',
                padding: '8px 16px',
                border: 'none',
                cursor: selectedType ? 'pointer' : 'not-allowed',
                borderRadius: '4px',
                transition: 'background-color 0.3s',
              }}
            >
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
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {filteredPosts.map((post) => (
                  <li
                    key={post.id}
                    style={{
                      marginBottom: '15px',
                      backgroundColor: '#333',
                      padding: '10px',
                      borderRadius: '6px',
                    }}
                  >
                    <strong>{post.title}</strong>
                    <br />
                    <button
                      onClick={() => handleApply(post)}
                      style={{
                        backgroundColor: '#ffffff',
                        color: '#1b1b1b',
                        padding: '6px 12px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginTop: '6px',
                      }}
                    >
                      Apply
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={() => setStep(1)}
              style={{
                marginTop: '10px',
                backgroundColor: 'transparent',
                color: 'white',
                border: '1px solid white',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apply;
