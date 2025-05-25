import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Üdvözlünk a Növénymenhelyen 🌿</h1>
      <p className="home-intro">
        Ahol a növények új esélyt kapnak, és a zöld szeretet közösséget épít.
      </p>

      <div className="home-section">
        <h2>🌱 Mi is ez a hely?</h2>
        <p>
          A Növénymenhely egy olyan különleges tér, ahol a növények örökbefogadása mellett
          gondozási tanácsokat, inspirációt és egy támogató közösséget is találsz.
        </p>
      </div>

      <div className="home-section">
        <h2>🌻 Mit találsz nálunk?</h2>
        <ul>
          <li>Szobanövények, kerti növények örökbefogadása</li>
          <li>Tippek, tanácsok kezdőknek és haladóknak</li>
          <li>Modern, könnyen kezelhető adatbázis</li>
          <li>Közösségi élmények, megosztható növénytörténetek</li>
        </ul>
      </div>

      <div className="home-section">
        <h2>🤝 Csatlakozz hozzánk!</h2>
        <p>
          Legyél részese a zöld mozgalomnak! Segíts növényeknek otthonra találni,
          tanulj velünk, és ossz meg te is tapasztalatokat.
        </p>
      </div>
    </div>
  );
};

export default Home;