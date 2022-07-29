import React from 'react';
import './styles.css';
import StarParticles from './components/StarBackground';
import PCard from './components/Photocard';
import screamingkarin from './screamingkarin.mp4'
import ReactPlayer from 'react-player';
import Card from './components/Card';

export default function App(){
  return (
    <div className="App">
      <StarParticles/>
      <div>
        <PCard/>
        <br/>
        <br/>
        <br/>
        <p className="line-1 anim-typewriter not-selectable">Hi, this is Karin</p>
        <br/>
        <br/>
      </div>
      <div style={{ position:'relative'}}>
        <Card
          img={"https://cdn.discordapp.com/attachments/942706380689772575/1002499550788980826/unknown.png"}
          title={"Maria Clarin"}
         />
      </div>
      <br/>
      <br/>
      <h3 style={{ position:"relative", color:"white", fontFamily:"monospace" }}>Empty Space to play with the stars 🌟</h3>
      <div className='emptyspc'>
        
      </div>
      <h3 style={{ position:"relative", color:"white", marginLeft:"13vh", fontFamily:"cursive" }}>Bloopers:</h3>
      <ReactPlayer className='player' url={screamingkarin} controls/>
      <div className='ericpic'>
        <img 
          src={'https://cdn.discordapp.com/attachments/942706380689772575/1002580997088493588/stickman_1.png'}
          alt="me and karin"
        />
      </div>
      <div className='footer'>
        <a style={{ position:"relative", paddingBottom: "0" }} href="https://github.com/ericjovian/maria-clarin/tree/master">
          <button type="button" className="btn">
            <p>view code &#8599;</p>
          </button>
        </a>
        <h3 style={{ position:"relative", color:"white", fontFamily:"cursive" }}>
          Creds to Lithium and ionized for pics and vids
        </h3>
      </div>
    </div>
    );
  }