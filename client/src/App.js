import React, { Component } from 'react';
import './App.css';
import logo from './img/ellen-logo.PNG';
import video from './video/Video.mov';
import EllenNavbar from './Components/Navbar/Ellen-Navbar';

function App() {
  return (
    <div className="App">
<EllenNavbar />  
      <div className="App-header">
      <video className="ellen-video"  controls>
      <source src={video} type="video/mp4" />
     </video>
        <div className="fall">
          Hi I'm Ellen Watkins, a licensed esthetician in Lee's Summit MO.  I'm passionate about working with others to achieve their skincare goals through facials and advanced skin treatments.  To learn more about what I offer, please check out my service menu.  
                  </div>
        <div className="luxury">
          luxury skin services + treatments
        </div>
        <a
          className="App-link"
          href="https://linktr.ee/estheticianellen"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkTree
        </a>

      </div>
    </div>
  );
}

export default App;
