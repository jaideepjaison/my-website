import React, { useState } from 'react';
import './PhoneNumber.css'; // Import custom styles instead of bootstrap

const PhoneNumbers = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handlePasswordSubmit = (e) => {
    e?.preventDefault(); // Prevent default form submission if wrapped in a form
    if (password === '3666') { // Replace '3666' with your desired password
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const phoneNumbersList = [
    { id: 1, firstName: 'Jaison', phoneNumber: '7624851480' },
    { id: 2, firstName: 'Mummy', phoneNumber: '9945482712' },
    { id: 3, firstName: 'Jasmine', phoneNumber: '9611389276' },
    { id: 4, firstName: 'Dad', phoneNumber: '8147454960' },
    { id: 5, firstName: 'Shashank', phoneNumber: '7090428414' },
    { id: 6, firstName: 'Rohan Dattu', phoneNumber: '9741943236' },
    { id: 7, firstName: 'Raghav PG', phoneNumber: '93900046417' },
    { id: 8, firstName: 'Prajwal', phoneNumber: '7899455674' },
    { id: 9, firstName: 'Utkarsh', phoneNumber: '9453100401' },
    { id: 10, firstName: 'Vaishno Pg Owner', phoneNumber: '9986053444' }
  ];

  return (
    <div className="phonenumber-wrapper">
      {!isAuthenticated ? (
        <div className="custom-modal-backdrop">
          <div className="custom-modal-content">
            <h3>Secure Access</h3>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                className={`custom-input ${error ? 'input-error' : ''}`}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                placeholder="Enter passcode"
                autoFocus
              />
              {error && <p className="error-text">Incorrect password, try again.</p>}
              <button
                type="submit"
                className="custom-btn"
              >
                Unlock
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="data-container">
          <h2>Contact Directory</h2>
          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {phoneNumbersList.map((person) => (
                  <tr key={person.id}>
                    <td data-label="#">{person.id}</td>
                    <td data-label="Name">{person.firstName}</td>
                    <td data-label="Phone Number" className="phone-text">{person.phoneNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneNumbers;