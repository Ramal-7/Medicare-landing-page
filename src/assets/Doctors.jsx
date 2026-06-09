import React from "react";
import "./Doctors.css";
const doctorList = [
  {
    name: "Dr. Sadaf",
    specialty: "Orthopedist",
    image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
  },
  {
    name: "Dr. Saad",
    specialty: "Obesity Specialist",
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1jnbA5.img",
  },
  {
    name: "Dr. Zuha",
    specialty: "Dermatologist",
    image: "https://th.bing.com/th/id/OIP.VTVhwSHQAc8n_8wlaq1xWwAAAA?w=474&h=315&rs=1&pid=ImgDetMain",
  },
  {
    name: "Dr. Haleema",
    specialty: "Neurologist",
    image: "https://img.freepik.com/free-photo/attractive-female-doctor-white-coat_88135-9004.jpg?size=626&ext=jpg",
  },
];

function Doctors(){
  return (
    <section className="doctors" id="doctors">
      <h2>Book an Appointment</h2>
      <div className="doctor-grid">
        {doctorList.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <img src={doctor.image} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Doctors;