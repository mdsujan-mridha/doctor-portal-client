import React from 'react';
import docotor from '../../../assets/images/doctor.png';
import appoinment from '../../../assets/images/appointment.png'
const MakeAppointment = () => {
    return (
       <section style={{
           background: `url(${appoinment})`
       }}>
           <div className="flex justify-center items-center">
              <div className="flex-1 hidden lg:block">
              <img src={docotor} className='mt-[-200px]' alt="" />
              </div>
              <div className="flex-1 px-12">
                  <h3 className="text-xl text-primary font-bold leading-10 my-6">Appointment</h3>
                  <h2 className="text-4xl text-white leading-10 my-6">Make an Appointment today</h2>
                  <p className="text-white text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                  <button class="my-6 btn btn-secondary text-white font-bold bg-gradient-to-r from-secondary to-primary ...">Get Started</button>
              </div>
           </div>

       </section>
    );
};

export default MakeAppointment;