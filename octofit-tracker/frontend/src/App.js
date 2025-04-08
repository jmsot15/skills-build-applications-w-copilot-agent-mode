import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../public/octofitapp-small.png';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="OctoFit Logo" style={{ height: '40px', marginRight: '10px' }} />
          OctoFit Tracker
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <h1 className="display-4 text-center">Welcome to OctoFit Tracker</h1>
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">Track Your Fitness</h5>
            <p className="card-text">Log your activities, compete with friends, and stay fit!</p>
            <a href="#" className="btn btn-primary">Get Started</a>
          </div>
        </div>

        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Activity</th>
              <th scope="col">Duration</th>
              <th scope="col">Calories Burned</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Running</td>
              <td>30 mins</td>
              <td>300</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Walking</td>
              <td>45 mins</td>
              <td>200</td>
            </tr>
          </tbody>
        </table>

        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">
          Open Modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                This is a Bootstrap modal example.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
