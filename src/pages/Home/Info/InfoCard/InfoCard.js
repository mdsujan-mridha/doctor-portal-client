import React from 'react';

const InfoCard = ({card}) => {
    const{img,title,body,bgClass}=card;
    // console.log(card)
    return (
        <div className={`card card-side  shadow-xl ${bgClass}`}>
        <figure className='pl-5'>
            <img src={img} alt="Movie"/>

            </figure>
        <div className="card-body text-white">
          <h2 className="card-title"> {title} </h2>
          <p> {body} </p>
        </div>
      </div>
    );
};

export default InfoCard;