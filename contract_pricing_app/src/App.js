import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/main.css';
import image from './assets/css/images/SportuneOrange.png';

function App() {
  return (
    <div className="App">
      <div id="page-wrapper">

          <div id="header">

              <div class="inner">
                <header>



                <div className="logoimagebox">
                  <img className="logoimage" src={image} alt="Sportune">
                  </img>
                </div>



                </header>
              </div>


              <nav id="nav">
                <ul>
                  <li>
                    <a href="#">Home</a>
                    <ul>
                      <li><a href="#">Lorem ipsum dolor</a></li>
                      <li><a href="#">Magna phasellus</a></li>
                      <li><a href="#">Etiam dolore nisl</a></li>
                      <li>
                        <a href="#">And a submenu &hellip;</a>
                        <ul>
                          <li><a href="#">Lorem ipsum dolor</a></li>
                          <li><a href="#">Phasellus consequat</a></li>
                          <li><a href="#">Magna phasellus</a></li>
                          <li><a href="#">Etiam dolore nisl</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Veroeros feugiat</a></li>
                    </ul>
                  </li>
                  <li><a href="left-sidebar.html">Player Prediction</a></li>
                  <li><a href="right-sidebar.html">Personal Prediction</a></li>
                </ul>
              </nav>

          </div>

          <section class="carousel">
            <div class="reel">

              <article>
                <a href="#" class="image featured"><img src="images/pic02.jpg" alt="" /></a>
                <header>
                  <h3><a href="#">Player Prediction</a></h3>
                </header>
                <p>Get data-driven insights on player salaries. Input a player name and see how much the Sportune model predicts they should get paid!</p>
              </article>

              <article>
                <a href="#" class="image featured"><img src="images/pic03.jpg" alt="" /></a>
                <header>
                  <h3><a href="#">Personal Prediction</a></h3>
                </header>
                <p>Be an NBA player for a day. Input your own statistics and see how much the Sportune model predicts you should get paid!</p>
              </article>

            </div>
          </section>

              </div>
            </div>
  );
}

export default App;
