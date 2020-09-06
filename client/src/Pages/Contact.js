import React, { Component } from 'react';
import '../App.css';
import logo from '../img/placeholder.PNG';
import EllenNavbar from '../Components/Navbar/Ellen-Navbar';
function App() {
  return (
    <div className="App">
    <EllenNavbar />
      <div className="App-header">
        <table class="contact-table">
          <tbody>
            <tr>
              <td class="contact-table-item">Telephone</td>
              <td class="contact-table-item pink-text">(816) 800-1857</td>
            </tr>
            <tr>
              <td class="contact-table-item">Email</td>
              <td class="contact-table-item pink-text">estheticianellen@gmail.com</td>
            </tr>
            <tr>
              <td class="contact-table-item">Instagram</td>
              <td class="contact-table-item pink-text">@estheticianellen</td>
            </tr>
            <tr>
              <td class="contact-table-item">Facebook</td>
              <td class="contact-table-item pink-text">Ellen Watkins Esthetics</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
