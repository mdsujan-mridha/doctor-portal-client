import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section className='my-24 pt-16 pb-20' style={{
            background:`url(${appointment})`
        }}>
            <div>
                <h1 className='text-center text-primary font-bold text-xl'> Contact Us </h1>
                <p className="text-center text-4xl text-white"> Stay connected with us </p>
            </div>
            <div className='flex flex-col items-center mt-10'>



         
               
                <input type="email" placeholder="Enter email" class="input input-bordered input-md w-full max-w-lg mt-5" />
                <input type="text" placeholder="Subject" class="input input-bordered input-md w-full max-w-lg mt-5" />
                <input type="text" placeholder="Enter your message" style={{height:'136px'}} class="input input-bordered input-lg  w-full max-w-lg mt-5" />
                <button class="btn btn-active btn-primary mt-9">SUBMIT</button>
       
               


            </div>
        </section>
    );
};

export default Contact;