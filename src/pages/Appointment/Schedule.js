import React from 'react';

const Schedule = ({ schedule,setTreatment }) => {
    // console.log(schedule);
    const { name, time } = schedule;

    return (
        <div>

            <div class="card lg:max-w-md bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-xl font-semibold text-secondary mt-10 text-center"> {name} </h2>
                     <p className='text-center mt-2.5'>
                         {
                             time.length 
                             ? <span>{time[0]}</span>
                             :
                             <span className='text-red-500'> slot out </span> 
                         }
                     </p>
                    <p className='text-center mt-3'> {time.length} {time.length > 1 ? "spaces" : "space"}  are available </p>
                    <div class="card-actions justify-center mt-4">
                        <label 
                        for="booking-modal"
                        disabled={time.length === 0} 
                        onClick={()=> setTreatment(schedule)} 
                        class="btn modal-button btn btn-secondary font-bold text-white text-sm uppercase"> Book Appointment </label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Schedule;