const cars = [
    {
      name: "Toyota Corolla",
      model: "SE",
      year: 2021,
      color: "White",
      distanceDriven: "18,000 km",
      image: ".//..//../assets/toyotacorolla.jpg",
      location: "San Francisco",
      fuelEfficiency:"15 km/l"
    },
    {
      name: "Honda Civic",
      model: "EX",
      year: 2020,
      color: "Red",
      distanceDriven: "24,000 km",
      image: ".//..//../assets/hondacivic.jpg",
      location: "San Francisco",
      fuelEfficiency:"16 km/l"
    },
    {
      name: "Hyundai Elantra",
      model: "SEL",
      year: 2022,
      color: "Blue",
      distanceDriven: "10,000 km",
      image: ".//..//../assets/hyundaielantra.jpg",
      location: "San Francisco",
      fuelEfficiency:"14 km/l"
    },
    {
      name: "Ford Mustang",
      model: "GT",
      year: 2019,
      color: "Black",
      distanceDriven: "30,000 km",
      image: ".//..//../assets/fordmustang.jpg",
      location: "San Francisco",
      fuelEfficiency:"16 km/l"
    },
    {
      name: "Tesla Model 3",
      model: "Standard Plus",
      year: 2021,
      color: "Silver",
      distanceDriven: "12,500 km",
      image: ".//..//../assets/teslamodel3.jpg",
      location: "San Francisco",
      fuelEfficiency:"20 km/l"
    },
  
    {
      name: "BMW 3 Series",
      model: "330i",
      year: 2020,
      color: "White",
      distanceDriven: "19,000 km",
      image: ".//..//../assets/bmw3series.jpg.jpg",
      location: "San Jose",
      fuelEfficiency:"16 km/l"
    },
    {
      name: "Audi A4",
      model: "Premium",
      year: 2022,
      color: "Gray",
      distanceDriven: "9,000 km",
      image: ".//..//../assets/audia4.jpg.jpg",
      location: "San Jose",
      fuelEfficiency:"15 km/l"
    },
    {
      name: "Chevrolet Malibu",
      model: "LT",
      year: 2019,
      color: "Black",
      distanceDriven: "28,000 km",
      image: ".//..//../assets/chevroletmalibu.jpg",
      location: "San Jose",
      fuelEfficiency:"14 km/l"
    },
    {
      name: "Kia Forte",
      model: "LXS",
      year: 2021,
      color: "Blue",
      distanceDriven: "15,000 km",
      image: ".//..//../assets/kiaForte.jpg",
      location: "San Jose",
      fuelEfficiency:"17 km/l"
    },
    {
      name: "Mazda 3",
      model: "Preferred",
      year: 2022,
      color: "Red",
      distanceDriven: "8,500 km",
      image: ".//..//../assets/mazda3.jpg",
      location: "San Jose",
      fuelEfficiency:"19 km/l"
    },
  
    {
      name: "Nissan Altima",
      model: "SV",
      year: 2020,
      color: "Silver",
      distanceDriven: "20,000 km",
      image: ".//..//../assets/nissanaltima.jpg",
      location: "San Diego",
      fuelEfficiency:"14 km/l"
    },
    {
      name: "Subaru Impreza",
      model: "Premium",
      year: 2021,
      color: "Green",
      distanceDriven: "16,000 km",
      image: ".//..//../assets/subruimpreza.jpg",
      location: "San Diego",
      fuelEfficiency:"17 km/l"
    },
    {
      name: "Volkswagen Jetta",
      model: "R-Line",
      year: 2019,
      color: "White",
      distanceDriven: "32,000 km",
      image: ".//..//../assets/volkwagenjetta.jpg",
      location: "San Diego",
      fuelEfficiency:"14 km/l"
    },
    {
      name: "Chrysler 300",
      model: "Touring",
      year: 2018,
      color: "Black",
      distanceDriven: "40,000 km",
      image: ".//..//../assets/chrysler300.jpg",
      location: "San Diego",
      fuelEfficiency:"13 km/l"
    },
    {
      name: "Toyota Camry",
      model: "XSE",
      year: 2022,
      color: "Blue",
      distanceDriven: "6,000 km",
      image: ".//..//../assets/camry.jpg",
      location: "San Diego",
      fuelEfficiency:"20 km/l"
    },
  
    {
      name: "Honda Accord",
      model: "Sport",
      year: 2021,
      color: "Gray",
      distanceDriven: "11,000 km",
      image: ".//..//../assets/hondaaccordsport.jpg",
      location: "Santa Clara",
      fuelEfficiency:"18 km/l"
    },
    {
      name: "Lexus IS",
      model: "300",
      year: 2022,
      color: "Black",
      distanceDriven: "7,500 km",
      image: ".//..//../assets/lexusis.jpg",
      location: "Santa Clara",
      fuelEfficiency:"18 km/l"
    },
    {
      name: "Infiniti Q50",
      model: "Luxe",
      year: 2020,
      color: "White",
      distanceDriven: "22,000 km",
      image: ".//..//../assets/infinitiq50.jpg",
      location: "Santa Clara",
      fuelEfficiency:"15 km/l"
    },
    {
      name: "Genesis G70",
      model: "2.0T",
      year: 2019,
      color: "Red",
      distanceDriven: "26,000 km",
      image: ".//..//../assets/genesisg70.jpg",
      location: "Santa Clara",
      fuelEfficiency:"16 km/l"
    },
    {
      name: "Mercedes-Benz C-Class",
      model: "C 300",
      year: 2021,
      color: "Silver",
      distanceDriven: "13,000 km",
      image: ".//..//../assets/mercedesbenz300.jpg",
      location: "Santa Clara",
      fuelEfficiency:"18 km/l"
    },
  
    {
      name: "Dodge Charger",
      model: "SXT",
      year: 2021,
      color: "Blue",
      distanceDriven: "17,500 km",
      image: ".//..//../assets/dodgecharger.jpg",
      location: "San Ramon",
      fuelEfficiency:"19 km/l"
    },
    {
      name: "Cadillac CT5",
      model: "Luxury",
      year: 2022,
      color: "Gray",
      distanceDriven: "5,000 km",
      image: ".//..//../assets/cadilacct5.jpg",
      location: "San Ramon",
      fuelEfficiency:"15 km/l"
    },
    {
      name: "Volvo S60",
      model: "Momentum",
      year: 2020,
      color: "Black",
      distanceDriven: "19,000 km",
      image: ".//..//../assets/volvos60.jpg",
      location: "San Ramon",
      fuelEfficiency:"14 km/l"
    },
    {
      name: "Alfa Romeo Giulia",
      model: "Ti",
      year: 2019,
      color: "Red",
      distanceDriven: "23,000 km",
      image: ".//..//../assets/alfaromeo.jpg",
      location: "San Ramon",
      fuelEfficiency:"15 km/l"
    },
    {
      name: "Jaguar XE",
      model: "R-Dynamic",
      year: 2021,
      color: "White",
      distanceDriven: "14,000 km",
      image: ".//..//../assets/jaguarxe.jpg",
      location: "San Ramon",
      fuelEfficiency:"15 km/l"
    }
  ];
  
  export default cars;
  