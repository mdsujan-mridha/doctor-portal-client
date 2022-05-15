import React from 'react';
import banner1 from '../../assets/images/chair.png'
import bannerBackground from '../../assets/images/bg.png'
import Info from './Info/Info';
import Services from '../Components/Services/Services';
import DentalCare from '../Components/DentalCare/DentalCare';
import MakeAppointment from '../Components/MakeAppointment/MakeAppointment';
import Testtimonial from '../Components/Testtimonial/Testtimonial';
import Contact from '../Components/Contact/Contact';
import Footer from '../Shared/Footer/Footer';
const Home = () => {
    return (

        <div>

<div className="hero min-h-screen px-12" style={{
  background:`url(${bannerBackground})`
}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner1} className="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold"> Your New Smile Starts Here </h1>
      <p className="py-6"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. </p>
      <button className="btn btn-secondary text-white font-bold bg-gradient-to-r from-secondary to-primary ...">Get Started</button>
    </div>
  </div>
</div>

{/* infocard  */}
<Info></Info>
<Services></Services>
<DentalCare></DentalCare>
<MakeAppointment></MakeAppointment>
<Testtimonial></Testtimonial>
<Contact></Contact>
<Footer></Footer>
        </div>



    );
};

export default Home;