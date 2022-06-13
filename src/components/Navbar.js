import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Profile from '../pages/Profile';
import Dragons from '../pages/Dragons';
import Mission from '../pages/Mission';
import Rockets from '../pages/Rockets';

function Navbar() {
  return (
    <>
      <div className="nav">
        <NavLink
          to="dragons"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Dragons
        </NavLink>
        <NavLink
          to="missions"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Missions
        </NavLink>
        <NavLink
          to="rockets"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Rockets
        </NavLink>
        <NavLink
          to="profile"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Profile
        </NavLink>
      </div>
      <Routes>
        <Route path="dragons" element={<Dragons />} />
        <Route path="missions" element={<Mission />} />
        <Route path="rockets" element={<Rockets />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default Navbar;