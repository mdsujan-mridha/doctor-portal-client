import React from 'react';

const BookingModal = ({treatment}) => {
    const {name ,time} = treatment;

    return (
        <div>


            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box mt-5">
                 <div className='mb-12'>
                 <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-xl">{name} </h3>
                 </div>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="booking-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BookingModal;