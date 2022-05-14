import React from 'react';
import banner1 from '../../assets/images/chair.png'
import bannerBackground from '../../assets/images/bg.png'
import Info from './Info/Info';
import Services from '../Components/Services/Services';
import DentalCare from '../Components/DentalCare/DentalCare';
import MakeAppointment from '../Components/MakeAppointment/MakeAppointment';
const Home = () => {
    return (

        <div>

<div class="hero min-h-screen px-12" style={{
  background:`url(${bannerBackground})`
}}>
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={banner1} class="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold"> Your New Smile Starts Here </h1>
      <p class="py-6"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. </p>
      <button class="btn btn-secondary text-white font-bold bg-gradient-to-r from-secondary to-primary ...">Get Started</button>
    </div>
  </div>
</div>

{/* infocard  */}
<Info></Info>
<Services></Services>
<DentalCare></DentalCare>
<MakeAppointment></MakeAppointment>

        </div>



    );
};

export default Home;