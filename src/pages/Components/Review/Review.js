import React from 'react';

const Review = ({ review }) => {
    console.log(review);
    const { name, img, body, address } = review;
    return (
        <section>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <p> {body} </p>
                    <div class="flex items-center mt-9">
                        <div>

                            <div class="avatar mr-5">
                                <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={img} alt="" />
                                </div>
                            </div>

                        </div>
                        <div>
                            <h2 class="card-title">Card title!</h2>
                            <h3>{address}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;