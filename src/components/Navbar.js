import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end
            style={({ isActive }) => ({
              color: isActive ? '#4caf50' : '#e6e6e6',
              fontWeight: isActive ? 'bold' : 'normal',
            })}
          >
            Főoldal
          </NavLink>
        </li>
        <li>
          <NavLink to="/services"
            style={({ isActive }) => ({
              color: isActive ? '#4caf50' : '#e6e6e6',
              fontWeight: isActive ? 'bold' : 'normal',
            })}
          >
            Szolgáltatások
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact"
            style={({ isActive }) => ({
              color: isActive ? '#4caf50' : '#e6e6e6',
              fontWeight: isActive ? 'bold' : 'normal',
            })}
          >
            Kapcsolat
          </NavLink>
        </li>
        <li>
          <NavLink to="/novenyadatbazis"
            style={({ isActive }) => ({
              color: isActive ? '#4caf50' : '#e6e6e6',
              fontWeight: isActive ? 'bold' : 'normal',
            })}
          >
            Növény Adatbázis
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
