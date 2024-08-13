import React, { useState } from 'react';
import IlgiFormu from './IlgiFormu';
import gaziantepData from './gaziantep_dataset.json';

const App = () => {
  const [rota, setRota] = useState([]);
  const [showRota, setShowRota] = useState(false);

  const handleSecim = (cevaplar, gunSayisi) => {
    // Flatten the selected answers into a single array of tags
    const secilenTagler = Object.values(cevaplar).flat();

    // Filter the locations based on selected tags
    const filtreliMekanlar = gaziantepData.filter((mekan) =>
      secilenTagler.some((tag) => mekan.tags.includes(tag))
    );

    const rota = [];
    const gunlukMekanSayisi = Math.ceil(filtreliMekanlar.length / gunSayisi);

    for (let i = 0; i < gunSayisi; i++) {
      const baslangic = i * gunlukMekanSayisi;
      const bitis = baslangic + gunlukMekanSayisi;
      rota.push(filtreliMekanlar.slice(baslangic, bitis));
    }

    setRota(rota);
    setShowRota(true);
  };

  return (
    <div>
      <h1>Seyahat Rehberi</h1>
      {!showRota ? (
        <IlgiFormu onSubmit={handleSecim} />
      ) : (
        <div>
          <h2>Oluşturulan Rota</h2>
          {rota.map((gun, index) => (
            <div key={index}>
              <h3>Gün {index + 1}</h3>
              <ul>
                {gun.map((mekan, mekanIndex) => (
                  <li key={mekanIndex}>
                    <a href={mekan.google_maps_link} target="_blank" rel="noopener noreferrer">
                      {mekan.name}
                    </a>: {mekan.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
