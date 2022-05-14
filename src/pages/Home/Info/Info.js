import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard/InfoCard';

const Info = () => {
    const cardsInfo = [
        {"img":clock,"title":"Opening Hours","body":"Lorem Ipsum is simply dummy text of the pri","bgClass":"bg-gradient-to-r from-secondary to-primary","_id":1},
        {"img":marker,"title":"Visit our location","body":"Lorem Ipsum is simply dummy text of the pri","bgClass":"bg-accent","_id":2},
        {"img":phone,"title":"Contact us now","body":"Lorem Ipsum is simply dummy text of the pri","bgClass":"bg-gradient-to-r from-secondary to-primary","_id":3}
    ]
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
            {/* <InfoCard img={clock}></InfoCard>
            <InfoCard img={marker}></InfoCard>
            <InfoCard img={clock}></InfoCard> */}
            {
               cardsInfo.map(card=> <InfoCard 
                key={card._id}
                card={card}></InfoCard>) 
            }
        </div>
    );
};

export default Info;