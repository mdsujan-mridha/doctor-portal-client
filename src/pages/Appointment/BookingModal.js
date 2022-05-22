import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { name, time } = treatment;
    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(slot);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box mt-5">
                    <div className='mb-12'>
                        <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="font-bold text-xl">{name} </h3>
                    </div>
                    <div className=''>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-center mt-5 mb-5 items-center'>
                            <input disabled type="text" value={format(date, 'PP')} class="input input-bordered w-full max-w-full font-semibold" />

                            <select name='slot' class="select select-bordered w-full max-w-full bg-zinc-200 border-none">

                                {
                                    time.map(t => <option value={t}>{t}</option>)
                                }
                            </select>

                            <input type="name" name='name' placeholder="Full name" class="input input-bordered w-full max-w-full" />
                            <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-full" />
                            <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-full" />
                            <input type="submit" value="submit" class="btn btn-secondary w-full max-w-full" />

                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BookingModal;