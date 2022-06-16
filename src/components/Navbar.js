import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Profile from './Profile/Profile';
import Dragons from '../pages/Dragons';
import Mission from './Missions/Missions';
import Rockets from '../pages/Rockets';
import Logo from '../assets/planet.png';

function Navbar() {
  return (
    <>
      <div className="nav">
        <img src={Logo} alt="logo" className="logo" />
        <p className="logoTitle">Space Travelers Hub</p>
        <NavLink
          to="dragons"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Dragons
        </NavLink>
        <NavLink
          to="/missions"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Missions
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Rockets
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Profile
        </NavLink>
      </div>
      <Routes>
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default Navbar;
