import React from "react";
import "./Services.css";

const servicesList = [
  {
    title: "Instant Video Consultation",
    description: "Connect within minutes with top doctors.",
    image: 'https://th.bing.com/th/id/OIP.NgJVXPv7f0OAZ9UT5d7RhwHaEg?rs=1&pid=ImgDetMain'
   // color: "#c8e6c9", // light green
  },
  {
    title: "Find Doctors Near You",
    description: "Book appointments at nearby clinics.",
    image: 'https://th.bing.com/th/id/OIP.VNPjG-O_td-qC-Cuh1xjuQAAAA?rs=1&pid=ImgDetMain'
  },
  {
    title: "24/7 Medicicare",
    description: "Order medicines online, anytime.",
    image: 'https://www.shutterstock.com/image-photo/doctor-white-coat-uniform-holding-260nw-2278388265.jpg'
    //color: "#b3e5fc", // light blue
  },
  {
    title: "Lab Tests",
    description: "Book lab tests from home.",
    image: 'https://th.bing.com/th/id/OIP.ZSwI_6h7QlZ6hSWGMXdcGQHaE8?w=278&h=186&c=7&r=0&o=5&dpr=1.4&pid=1.7'
    //color: "#ffe0b2", // light orange
  },
];

const Services = () => {
  return (
    <section className="service" id="services">
      <h1>Healthcare Services</h1>
      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div className="service-card"  key={index} >
           
            <img src={service.image}></img>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
       
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;