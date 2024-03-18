import React from 'react'
import logo from '../logo.png'
import glass from '../glass.png'
import voice from '../voice.jpg'
import create from '../create.jpg'

const Header = () => {
  return (
    <div className="header">
        <div className="containers">
    <button className="side-btn"> ☰ </button>
    <img className="logo" src={logo} alt="youtube-logo"/>
    </div>
    <div className="containers">
    <div className="search" >
    <input className="input" type="text" placeholder='Search'></input>
    <div className="glass">
    <img className="glass-logo" src={glass}/>
    </div>
    </div>
    <button className="mike-btn">
      <img className="voice-btn" src={voice}/>  
    </button>
    </div>
    <div className="containers">
    <button className="record-btn">
        <img className="voice-btn" src={create}/>
    </button>
    <button className="Notifications-btn">Notifications</button>
    <button className="profile-btn">Profile</button>
    </div>
    </div>
  )
}

export default Header