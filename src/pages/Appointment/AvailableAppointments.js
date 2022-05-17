import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointments = ({date,setDate}) => {
    const[schedules, setSchedules] = useState([]);
    useEffect( ()=>{
        fetch('Schedule.json')
         .then(res => res.json())
          .then(data => setSchedules(data) )

    } ,[])
    return (
        <div>
            <div>
            <p className='text-secondary font-bold text-center text-xl lg: mt-[-120px]'> Available Appointments on {format(date, 'PP')}.</p>
            </div>
            <div>
                {
                    schedules.map(schedule=>console.log(schedule))
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;