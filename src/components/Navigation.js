import React from 'react';
import {
  faHome,
  faUser,
  faStickyNote,
  faClock,
  faBullseye,
  faCalendar,
  faBuilding,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Navigation = (props) => (
  <div>
    <nav class='main-menu'>
      <ul>
        <li class='menu'>
          <a href='index.html'>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </li>
        <li className='selected'>
          <a href='index.html'>
            <FontAwesomeIcon icon={faHome} />
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faUser} />
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faStickyNote} />
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faClock} />
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faBuilding} />
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faCalendar} />
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faBullseye} />
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
