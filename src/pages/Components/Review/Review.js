import React from 'react';

const Review = ({ review }) => {
    console.log(review);
    const { name, img, body, address } = review;
    return (
        <section>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <p> {body} </p>
                    <div className="flex items-center mt-9">
                        <div>

                            <div className="avatar mr-5">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={img} alt="" />
                                </div>
                            </div>

                        </div>
                        <div>
                            <h2 className="card-title">Card title!</h2>
                            <h3>{address}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;