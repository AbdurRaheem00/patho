import React from 'react'
import './Home.css';
import UsedBy from '../UsedBy';


const Home = () => {
  return (
    <div className='homecontainer'>
     
      <h1 className='text1'>
        Lorem ipsum dolor sit, amet consectetur      
        </h1>
        <h1 className='text2'>
        Lorem ipsum dolor sit, ame esse sed vitae s rem autem nam a?      
        </h1>

        <div className='twobtn'>
          <button className='btn'>Connect wallet</button>
         
         
        </div>
        <div className='twod'>
        <div className='download'>
          <img src='src\assets\img\meta.png' className='oculuslogo'></img>
          <p className='ptag'>Download on <br/> Oculus store</p>
        </div>
        <div className='dashboard'>
          <img src='src\assets\img\physiology.png' className='oculuslogo'></img>
          <p className='ptag'>Try Our<br/> Dashboard</p>
        </div>
        </div>
        

        <div className='container1'>
          <UsedBy/>
          </div>
      
    </div>
    
  )
}

export default Home