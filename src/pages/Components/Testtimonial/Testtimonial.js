import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import pepole1 from '../../../assets/images/people1.png'
import pepole2 from '../../../assets/images/people2.png'
import pepole3 from '../../../assets/images/people3.png'
import Review from '../Review/Review';
const Testtimonial = () => {

    const reviews = [
        {
            "_id": 1,
            "name": "Winson Herry",
            "img": pepole1,
            "body": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            "address": "California"
        },
        {
            "_id": 2,
            "name": "Winson Herry",
            "img": pepole2,
            "body": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            "address": "California"
        },
        {
            "_id": 3,
            "name": "Winson Herry",
            "img": pepole3,
            "body": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            "address": "California"
        }
    ]
    return (
        <section className='px-12 my-28 pb-36'>
            <div>
                <div className='flex justify-between'>
                    <div>
                        <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                        <h1 className="text-4xl">What Our Patients Says </h1>
                    </div>
                    <div> <img className='lg:w-48 w-24' src={quote} alt="" /></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testtimonial;