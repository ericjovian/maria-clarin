import React from 'react';
import './styles.css';
import StarParticles from './components/StarBackground';
import PCard from './components/Photocard';
import screamingkarin from './screamingkarin.mp4'
import ReactPlayer from 'react-player';

export default function App(){
  return (
    <div className="App">
      <StarParticles/>
      <div>
        <PCard/>
        <br/>
        <br/>
        <br/>
        <p className="line-1 anim-typewriter not-selectable">Hi Karin</p>
        <br/>
        <ReactPlayer url={screamingkarin} controls style={{position: 'relative', margin:'auto'}}/>
      </div>
    </div>
    );
  }