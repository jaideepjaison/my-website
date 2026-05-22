import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PhoneNumbers = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordSubmit = () => {
    if (password === '3666') { // Replace '3666' with your desired password
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password!');
    }
  };

  const PhoneNumbers = [
    { id: 1, firstName: 'Jaison', phoneNumber: '7624851480' },
    { id: 2, firstName: 'Mummy', phoneNumber: '9945482712' },
    { id: 3, firstName: 'Jasmine', phoneNumber: '9611389276' },
    { id: 4, firstName: 'Dad', phoneNumber: '8147454960' },
    { id: 5, firstName: 'Shashank', phoneNumber: '7090428414' },
    { id: 6, firstName: 'Rohan Dattu', phoneNumber: '9741943236' },
    { id: 7, firstName: 'Hamdan PG', phoneNumber: '9326085437' },
    { id: 8, firstName: 'Prajwal', phoneNumber: '7899455674' },
  ];

  return (
    <>
      {!isAuthenticated && (
        <div
          className="modal show d-flex justify-content-center align-items-center"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enter Password</h5>
              </div>
              <div className="modal-body">
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handlePasswordSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isAuthenticated && (
        <div className="container-new">
          <h2>Phone Number Details</h2>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {PhoneNumbers.map((person) => (
                <tr key={person.id}>
                  <th scope="row">{person.id}</th>
                  <td>{person.firstName}</td>
                  <td>{person.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default PhoneNumbers;