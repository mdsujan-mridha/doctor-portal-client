import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Schedule from './Schedule';

const AvailableAppointments = ({date,setDate}) => {
    const[schedules, setSchedules] = useState([]);
    const [treatment ,setTreatment] = useState(null);
    useEffect( ()=>{
        fetch('Schedule.json')
         .then(res => res.json())
          .then(data => setSchedules(data) )
           
        //    console.log(schedules);
    } ,[])
    return (
        <div>
            <div>
            <p className='text-secondary font-bold text-center text-xl lg: mt-[-120px]'> Available Appointments on {format(date, 'PP')}.</p>
            </div>
            <div className=' px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    schedules.map(schedule=><Schedule
                    key={schedule._id}
                    schedule={schedule}
                    setTreatment={setTreatment}
                    ></Schedule>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;