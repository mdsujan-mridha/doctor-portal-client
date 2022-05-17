import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({date,setDate}) => {
   

    return (
        <div class="hero h-screen">
            <div class="hero-content flex-col  lg:flex-row-reverse">
                <img className='max-w-xl lg:ml-5' src={chair} alt="" />
                <div>
                <DayPicker 
                
                mode="single"
                selected={date}
               onSelect={setDate}
                />
              
                </div>
                
            </div>
            
        </div>
    );
};

export default AppointmentBanner;