import React from 'react';
import './UsedBy.css';

const UsedBy = () => {
  return (
    <div className='usedby'>
        <div className='title'>
            <h1 className='usedbyfont'>Used By</h1>
        </div>

        <div className='cards'>
            <div className='box'>Universities
            <p> - Full-time and distance learning <br/>
                - Access for all professors and students <br/>
                - Tracking of students engagement<br/>
                - Unique 3D models</p>
            </div>
            <div className='box'>Students</div>
            <div className='box'>Clinics</div>
            <div className='box'>Professors</div>
        </div>
    </div>
  );
};

export default UsedBy;
