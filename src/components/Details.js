import React from 'react';

const Details = (props) => (
  <div className='col-xs-12 col-md-6 right'>
    <div className='jumbotron'>
      <div className='text-center'>
        <div className='avatar'>MH</div>
        <h4>Mike Huston</h4>
        <span>Product Manager @ XXX company</span>
      </div>
      <ul className='details'>
        <li>
          <span>Full Name:</span> <span>Mike Huston</span>
        </li>
        <li>
          <span>Email:</span> <span>Mike Huston</span>
        </li>
        <li>
          <span>Phone:</span> <span>Mike Huston</span>
        </li>
        <li>
          <span>Company:</span> <span>Mike Huston</span>
        </li>
        <li>
          <span>Address:</span> <span>Mike Huston</span>
        </li>
      </ul>
    </div>
  </div>
);

export default Details;
