import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from '../Service/Service';

const Services = () => {

 const services = [
     {
         "_id":1,
         "img":fluoride,
         "title":"Fluoride Treatment",
         "body":"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
     },
     {
         "_id":2,
         "img":cavity,
         "title":"Cavity Filling",
         "body":"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
     },
     {
         "_id":3,
         "img":whitening,
         "title":"Teeth Whitening",
         "body":"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
     }
 ]

    return (
        <div className='my-28'>
            <div className='text-center'>
            <h1 className='text-primary text-xl font-semibold'>  OUR SERVICES </h1>
            <h2 className='text-4xl font-normal mt-5'>  Services We Provide </h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 mt-20'>
                {
                   services.map(service=> <Service
                   key={service._id}
                   service={service}
                   ></Service>) 
                }
            </div>
        </div>
    );
};

export default Services;