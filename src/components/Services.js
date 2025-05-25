import React, { useState } from 'react';

const servicesData = [
  {
    id: 1,
    title: 'Szobanövény gondozás',
    description: 'Szakszerű növényápolás, öntözési tanácsokkal és növényápolási tippekkel.',
  },
  {
    id: 2,
    title: 'Kerttervezés',
    description: 'Egyedi kerttervek és ültetési tanácsadás az otthoni zöldterülethez.',
  },
  {
    id: 3,
    title: 'Növényértékesítés',
    description: 'Széles választék különleges és hagyományos szobanövényekből.',
  },
];

const Services = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container">
      <h2>Szolgáltatásaink</h2>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => setSelected(service.id)}
            style={{ cursor: 'pointer', border: selected === service.id ? '2px solid #4caf50' : 'none' }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;