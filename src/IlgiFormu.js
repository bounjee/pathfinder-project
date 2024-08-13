import React, { useState } from 'react';

const IlgiFormu = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentSubStep, setCurrentSubStep] = useState(0);
  const [selectedMainOptions, setSelectedMainOptions] = useState([]);
  const [selectedSubOptions, setSelectedSubOptions] = useState({});
  const [duration, setDuration] = useState(1);

  const questions = [
    {
      question: "Şehri ziyaret etme amacınız nedir?",
      options: [
        { text: "Kültürel ve tarihi yerleri keşfetmek", tag: "tarihi_muze" },
        { text: "Alışveriş yapmak ve şehir merkezini gezmek", tag: "alışveriş" },
        { text: "Doğa yürüyüşleri ve açık hava aktiviteleri yapmak", tag: "doğa_yürüyüşü" },
        { text: "Gastronomi turu ve yerel lezzetleri keşfetmek", tag: "gastronomi" },
        { text: "Sanat ve kültür etkinliklerine katılmak", tag: "sanat_kültür" },
        { text: "Eğlence ve gece hayatını deneyimlemek", tag: "gece_hayatı" },
        { text: "Dinlenmek ve rahatlamak", tag: "rahatlama" }
      ],
      nextQuestions: {
        tarihi_muze: [
          {
            question: "Hangi tür kültürel ve tarihi yerleri ziyaret etmeyi tercih edersiniz?",
            options: [
              { text: "Müzeler", tag: "müze" },
              { text: "Tarihi anıtlar", tag: "tarihi_anıt" },
              { text: "Arkeolojik alanlar", tag: "arkeolojik_alan" },
              { text: "Tarihi binalar ve yapılar", tag: "tarihi_bina" },
              { text: "Kültürel miras alanları", tag: "kültürel_miras" },
              { text: "Dini yapılar", tag: "dini_yapı" }
            ]
          },
          {
            question: "Kültürel ve tarihi yerleri ziyaret ederken en çok neye önem verirsiniz?",
            options: [
              { text: "Bilgilendirici turlar ve rehberler", tag: "rehberli_tur" },
              { text: "Etkileşimli sergiler ve etkinlikler", tag: "etkileşimli_sergi" },
              { text: "Sessiz ve sakin ortamlar", tag: "sessiz_alan" },
              { text: "Fotoğraf çekme olanakları", tag: "fotoğraf_izni" }
            ]
          },
          {
            question: "Ziyaretleriniz sırasında rehberli turlara katılmak ister misiniz?",
            options: [
              { text: "Evet", tag: "rehber_evet" },
              { text: "Hayır", tag: "rehber_hayır" }
            ]
          }
        ],
        alışveriş: [
          {
            question: "Hangi tür alışveriş yerlerini ziyaret etmeyi tercih edersiniz?",
            options: [
              { text: "Büyük alışveriş merkezleri", tag: "büyük_alışveriş_merkezi" },
              { text: "Yerel butikler ve küçük mağazalar", tag: "yerel_butik" },
              { text: "Pazarlar ve sosyete pazarları", tag: "pazar" },
              { text: "Antika dükkanları ve ikinci el mağazalar", tag: "antika_dükkanı" },
              { text: "Lüks markaların mağazaları", tag: "lüks_mağaza" }
            ]
          },
          {
            question: "Alışveriş yaparken ne tür ürünler almayı planlıyorsunuz?",
            options: [
              { text: "Giysi ve aksesuar", tag: "giysi" },
              { text: "Elektronik eşya", tag: "elektronik" },
              { text: "Hediyelik eşya ve hatıralıklar", tag: "hediyelik_eşya" },
              { text: "Yerel ürünler ve el yapımı eşyalar", tag: "yerel_ürün" },
              { text: "Yiyecek ve içecek", tag: "yiyecek" }
            ]
          },
          {
            question: "Alışveriş yaparken en çok neye önem verirsiniz?",
            options: [
              { text: "Ürün çeşitliliği", tag: "ürün_çeşitliliği" },
              { text: "Fiyat ve indirimler", tag: "fiyat" },
              { text: "Kalite", tag: "kalite" },
              { text: "Mağazaların atmosferi ve dekorasyonu", tag: "mağaza_atmosferi" }
            ]
          }
        ],
        doğa_yürüyüşü: [
          {
            question: "Hangi tür açık hava aktivitelerini tercih edersiniz?",
            options: [
              { text: "Doğa yürüyüşleri ve trekking", tag: "doğa_yürüyüşü" },
              { text: "Bisiklet turları", tag: "bisiklet_turu" },
              { text: "Piknik ve kamp", tag: "piknik" },
              { text: "Dağcılık ve tırmanış", tag: "dağcılık" },
              { text: "Su sporları", tag: "su_sporları" },
              { text: "Hayvan gözlemciliği ve doğa fotoğrafçılığı", tag: "hayvan_gözlemciliği" }
            ]
          },
          {
            question: "Doğa yürüyüşleri ve açık hava aktiviteleri yaparken en çok neye önem verirsiniz?",
            options: [
              { text: "Manzara ve doğal güzellikler", tag: "manzara" },
              { text: "Güvenlik ve rehberlik hizmetleri", tag: "güvenlik" },
              { text: "Aktivitelerin zorluk seviyesi", tag: "zorluk_seviyesi" },
              { text: "Erişilebilirlik ve ulaşım", tag: "erişilebilirlik" },
              { text: "Kalabalıktan uzak, sakin alanlar", tag: "sakin_alan" }
            ]
          }
        ],
        gastronomi: [
          {
            question: "Herhangi bir gıda alerjiniz veya özel diyet gereksinimleriniz var mı?",
            options: [
              { text: "Evet", tag: "diyet_evet" },
              { text: "Hayır", tag: "diyet_hayır" }
            ]
          },
          {
            question: "Hangi tür mutfakları ve yemekleri denemeyi tercih edersiniz?",
            options: [
              { text: "Yerel mutfak", tag: "yerel_mutfak" },
              { text: "Deniz ürünleri", tag: "deniz_ürünleri" },
              { text: "Vegan veya vejetaryen yemekler", tag: "vegan" },
              { text: "Sokak yemekleri", tag: "sokak_yemekleri" },
              { text: "Lüks restoranlar", tag: "lüks_restoran" }
            ]
          },
          {
            question: "Gastronomi turu sırasında hangi tür yemek deneyimlerine önem verirsiniz?",
            options: [
              { text: "Geleneksel yemekler ve tarifler", tag: "geleneksel_yemekler" },
              { text: "Modern ve yenilikçi mutfaklar", tag: "modern_mutfak" },
              { text: "Tatlılar ve pastalar", tag: "tatlılar" },
              { text: "İçecekler (şarap, bira, yerel içecekler, vb.)", tag: "içecekler" },
              { text: "Atıştırmalıklar ve küçük porsiyonlar", tag: "atıştırmalıklar" }
            ]
          },
          {
            question: "Gastronomi turu sırasında en çok neye önem verirsiniz?",
            options: [
              { text: "Yiyeceklerin kalitesi ve tazeliği", tag: "kalite" },
              { text: "Restoran ve mekanların atmosferi", tag: "atmosfer" },
              { text: "Fiyat ve uygunluk", tag: "uygun_fiyat" },
              { text: "Müşteri hizmetleri ve servis", tag: "müşteri_hizmetleri" },
              { text: "Yerel halkla etkileşim ve kültürel deneyim", tag: "yerel_halk" }
            ]
          },
          {
            question: "Bu şehirde mutlaka denemek istediğiniz belirli bir yemek veya içecek var mı?",
            options: [
              { text: "Evet", tag: "belirli_yemek_evet" },
              { text: "Hayır", tag: "belirli_yemek_hayır" }
            ]
          },
          {
            question: "Gastronomi turu sırasında hangi tür ek hizmetlerden yararlanmak istersiniz?",
            options: [
              { text: "Yemek pişirme atölyeleri ve kurslar", tag: "yemek_pişirme_atölyesi" },
              { text: "Tadım etkinlikleri ve festivaller", tag: "tadım_etkinliği" },
              { text: "Restoran ve kafe önerileri", tag: "restoran_önerisi" },
              { text: "Hediyelik yemek ve yerel ürün dükkanları", tag: "hediyelik_yemek" }
            ]
          }
        ],
        sanat_kültür: [
          {
            question: "Hangi tür sanat ve kültür etkinliklerine katılmayı tercih edersiniz?",
            options: [
              { text: "Tiyatro oyunları", tag: "tiyatro" },
              { text: "Konserler ve müzik festivalleri", tag: "konser" },
              { text: "Sanat sergileri ve galeriler", tag: "sanat_sergisi" },
              { text: "Film gösterimleri ve festivalleri", tag: "film_gösterimi" },
              { text: "Dans gösterileri", tag: "dans_gösterisi" },
              { text: "Edebiyat etkinlikleri", tag: "edebiyat_etkinliği" }
            ]
          }
        ],
        gece_hayatı: [
          {
            question: "Hangi tür eğlence ve gece hayatı etkinliklerine katılmayı tercih edersiniz?",
            options: [
              { text: "Barlar ve pub'lar", tag: "bar" },
              { text: "Gece kulüpleri", tag: "gece_kulübü" },
              { text: "Canlı müzik mekanları", tag: "canlı_müzik" },
              { text: "Karaoke barlar", tag: "karaoke_bar" },
              { text: "Açık hava etkinlikleri ve festivaller", tag: "açık_hava_etkinliği" }
            ]
          },
          {
            question: "Eğlence ve gece hayatı etkinliklerine katılırken en çok neye önem verirsiniz?",
            options: [
              { text: "Mekanın atmosferi ve dekorasyonu", tag: "atmosfer" },
              { text: "Müzik türü ve performans kalitesi", tag: "müzik_türü" },
              { text: "Giriş ücretleri ve içecek fiyatları", tag: "giriş_ücreti" },
              { text: "Güvenlik ve müşteri hizmetleri", tag: "güvenlik" },
              { text: "Mekanın merkezi konumu ve ulaşım kolaylığı", tag: "merkezi_konum" }
            ]
          }
        ],
        rahatlama: [
          {
            question: "Dinlenmek ve rahatlamak için hangi tür aktiviteleri tercih edersiniz?",
            options: [
              { text: "Spa ve masaj terapileri", tag: "spa" },
              { text: "Türk Hamamı", tag: "türk_hamamı" },
              { text: "Kaplıcalar ve termal havuzlar", tag: "kaplıca" },
              { text: "Meditasyon ve yoga seansları", tag: "meditasyon" },
              { text: "Plajda dinlenme", tag: "plajda_dinlenme" }
            ]
          },
          {
            question: "Dinlenme ve rahatlama aktiviteleri sırasında en çok neye önem verirsiniz?",
            options: [
              { text: "Hizmet kalitesi ve profesyonellik", tag: "hizmet_kalitesi" },
              { text: "Mekanın temizliği ve hijyen", tag: "temizlik" },
              { text: "Atmosfer ve dekorasyon", tag: "atmosfer" },
              { text: "Fiyat ve uygunluk", tag: "fiyat" },
              { text: "Sessiz ve sakin ortam", tag: "sessiz_ortam" }
            ]
          }
        ]
      }
    },
    {
      question: "Şehri ziyaretiniz için konaklama rezervasyonu yaptınız mı?",
      options: [
        { text: "Evet", tag: "konaklama_evet" },
        { text: "Hayır", tag: "konaklama_hayır" }
      ]
    },
    {
      question: "Şehirde kaç gün konaklamayı planlıyorsunuz?",
      type: "input"
    },
    {
      question: "Konaklama rezervasyonunuz yoksa, nasıl bir yerde kalmak istersiniz?",
      options: [
        { text: "Butik otel", tag: "butik_otel" },
        { text: "Lüks otel", tag: "lüks_otel" },
        { text: "Otantik konaklama", tag: "otantik_konaklama" },
        { text: "Pansiyon veya hostel", tag: "pansiyon" },
        { text: "Tatil köyü veya resort", tag: "tatil_köyü" }
      ]
    },
    {
      question: "Şehri gezerken hangi ulaşım yöntemini tercih edersiniz?",
      options: [
        { text: "Toplu taşıma", tag: "toplu_taşıma" },
        { text: "Yürüyerek", tag: "yürüyerek" },
        { text: "Bisiklet veya scooter", tag: "bisiklet" },
        { text: "Taksi veya kişisel araç", tag: "taksi" },
        { text: "Kiralık araç", tag: "kiralık_araç" }
      ]
    },
    {
      question: "Gezide özel olarak yapmak istediğiniz başka bir şey var mı?",
      options: [
        { text: "Evet", tag: "özel_istek_evet" },
        { text: "Hayır", tag: "özel_istek_hayır" }
      ]
    }
  ];

  const handleMainOptionSelect = (tag) => {
    if (!selectedMainOptions.includes(tag)) {
      setSelectedMainOptions([...selectedMainOptions, tag]);
    } else {
      setSelectedMainOptions(selectedMainOptions.filter(option => option !== tag));
    }
  };

  const handleNextStep = () => {
    if (currentStep === 0) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep <= selectedMainOptions.length) {
      const currentMainOption = selectedMainOptions[currentStep - 1];
      const subQuestions = questions[0].nextQuestions[currentMainOption];

      if (currentSubStep < subQuestions.length - 1) {
        setCurrentSubStep(currentSubStep + 1);
      } else {
        setCurrentSubStep(0);
        setCurrentStep(currentStep + 1);
      }
    } else if (currentStep > selectedMainOptions.length) {
      if (currentStep < selectedMainOptions.length + 5) {
        setCurrentStep(currentStep + 1);
      } else {
        onSubmit(selectedSubOptions, duration);
      }
    }
  };

  const handleSubOptionSelect = (mainTag, subTag) => {
    const currentSubOptions = selectedSubOptions[mainTag] || [];
    if (currentSubOptions.includes(subTag)) {
      setSelectedSubOptions({
        ...selectedSubOptions,
        [mainTag]: currentSubOptions.filter(option => option !== subTag)
      });
    } else {
      setSelectedSubOptions({
        ...selectedSubOptions,
        [mainTag]: [...currentSubOptions, subTag]
      });
    }
  };

  const handleInputChange = (e) => {
    setDuration(e.target.value);
  };

  return (
    <div className="container">
      {currentStep === 0 && (
        <div>
          <h2 className="question">{questions[currentStep].question}</h2>
          {questions[currentStep].options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${selectedMainOptions.includes(option.tag) ? 'selected' : ''}`}
              onClick={() => handleMainOptionSelect(option.tag)}
            >
              {option.text}
            </button>
          ))}
          <button onClick={handleNextStep} className="option-button next-button">Sonraki</button>
        </div>
      )}

{currentStep > 0 && currentStep <= selectedMainOptions.length && (
      <div>
        {(() => {
          const currentMainOption = selectedMainOptions[currentStep - 1];
          const subQuestions = questions[0].nextQuestions[currentMainOption];
          const subQuestion = subQuestions[currentSubStep];

          return (
            <div key={currentSubStep}>
              <h3 className="selected-main-option">
                Seçilen: {questions[0].options.find(opt => opt.tag === currentMainOption).text}
              </h3>
              <h2 className="question">{subQuestion.question}</h2>
              {subQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${selectedSubOptions[currentMainOption]?.includes(option.tag) ? 'selected' : ''}`}
                  onClick={() => handleSubOptionSelect(currentMainOption, option.tag)}
                >
                  {option.text}
                </button>
              ))}
            </div>
          );
        })()}
        <button onClick={handleNextStep} className="option-button next-button">Sonraki</button>
      </div>
    )}

      {currentStep > selectedMainOptions.length && (
        <div>
          {currentStep === selectedMainOptions.length + 1 && (
            <>
              <h2 className="question">{questions[1].question}</h2>
              {questions[1].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${selectedSubOptions['konaklama'] === option.tag ? 'selected' : ''}`}
                  onClick={() => handleSubOptionSelect('konaklama', option.tag)}
                >
                  {option.text}
                </button>
              ))}
              <button onClick={handleNextStep} className="option-button next-button">Sonraki</button>
            </>
          )}

          {currentStep === selectedMainOptions.length + 2 && (
            <div className="input-container">
              <h2 className="question">{questions[2].question}</h2>
              <input
                type="number"
                min="1"
                value={duration}
                onChange={handleInputChange}
              />
              <button onClick={handleNextStep} className="option-button next-button">Sonraki</button>
            </div>
          )}

          {currentStep === selectedMainOptions.length + 3 && (
            <>
              <h2 className="question">{questions[3].question}</h2>
              {questions[3].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${selectedSubOptions['konaklama_yok'] === option.tag ? 'selected' : ''}`}
                  onClick={() => handleSubOptionSelect('konaklama_yok', option.tag)}
                >
                  {option.text}
                </button>
              ))}
              <button onClick={handleNextStep} className="option-button next-button">Sonraki</button>
            </>
          )}

          {currentStep === selectedMainOptions.length + 4 && (
            <>
              <h2 className="question">{questions[4].question}</h2>
              {questions[4].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${selectedSubOptions['ulaşım'] === option.tag ? 'selected' : ''}`}
                  onClick={() => handleSubOptionSelect('ulaşım', option.tag)}
                >
                  {option.text}
                </button>
              ))}
              <button onClick={handleNextStep} className="option-button next-button">Sonraki</button>
            </>
          )}

          {currentStep === selectedMainOptions.length + 5 && (
            <>
              <h2 className="question">{questions[5].question}</h2>
              {questions[5].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${selectedSubOptions['özel_istek'] === option.tag ? 'selected' : ''}`}
                  onClick={() => handleSubOptionSelect('özel_istek', option.tag)}
                >
                  {option.text}
                </button>
              ))}
              <button onClick={handleNextStep} className="option-button next-button">Rota Oluştur</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default IlgiFormu;
