export type Car = {
  id: number;
  name: string;
  brand: string;
  type: "Sedan" | "SUV" | "Coupe" | "Hatchback";
  year: number;
  price: number;
  mileage: number;
  fuel: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Automatic" | "Manual";
  img: string;
  badge?: string;
  color: string;
  engine: string;
  doors: number;
  description: string;
  photos: string[];
};

export const cars: Car[] = [
  {
    id: 1,
    name: "BMW 5 Series",
    brand: "BMW",
    type: "Sedan",
    year: 2023,
    price: 49900,
    mileage: 12000,
    fuel: "Petrol",
    transmission: "Automatic",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=700&q=80",
    badge: "Popular",
    color: "Alpine White",
    engine: "2.0L 4-cylinder Turbo, 184 hp",
    doors: 4,
    description:
      "This BMW 5 Series is in exceptional condition with full service history from an authorised BMW dealer. Features include the Professional Navigation package, Driving Assistant Plus, heated front seats, and panoramic sunroof. One previous owner — a private individual — with no accident history. Available for immediate handover.",
    photos: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=90",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    ],
  },
  {
    id: 2,
    name: "Mercedes GLC 300",
    brand: "Mercedes",
    type: "SUV",
    year: 2022,
    price: 54500,
    mileage: 28000,
    fuel: "Diesel",
    transmission: "Automatic",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=700&q=80",
    color: "Selenite Grey",
    engine: "2.0L Diesel, 245 hp",
    doors: 5,
    description:
      "A well-maintained Mercedes-Benz GLC 300d 4MATIC with full leather interior, Burmester audio system, 360° camera, and active parking assist. The vehicle comes with two sets of keys and the original booklet pack. Service history maintained at an authorised Mercedes dealership.",
    photos: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=90",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    ],
  },
  {
    id: 3,
    name: "Audi A4 40 TFSI",
    brand: "Audi",
    type: "Sedan",
    year: 2024,
    price: 42000,
    mileage: 4500,
    fuel: "Petrol",
    transmission: "Automatic",
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=700&q=80",
    badge: "New",
    color: "Myth Black",
    engine: "2.0L TFSI, 204 hp",
    doors: 4,
    description:
      "Nearly new Audi A4 registered in early 2024 with only 4,500 km. Still under full factory warranty until 2027. Equipped with virtual cockpit plus, Audi smartphone interface, LED headlights, and S line exterior package. Ideal for buyers seeking a brand-new experience at a reduced price.",
    photos: [
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=90",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    ],
  },
  {
    id: 4,
    name: "Volkswagen Golf 8",
    brand: "Volkswagen",
    type: "Hatchback",
    year: 2023,
    price: 26900,
    mileage: 15000,
    fuel: "Petrol",
    transmission: "Automatic",
    img: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=700&q=80",
    color: "Reflex Silver",
    engine: "1.5L TSI, 130 hp",
    doors: 5,
    description:
      "A practical and efficient Volkswagen Golf 8 with DSG automatic gearbox and the Life trim level. Features include digital cockpit, LED headlights, App-Connect (Apple CarPlay / Android Auto), and front assist. Service performed at a VW authorised workshop. One private owner.",
    photos: [
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&q=90",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    ],
  },
  {
    id: 5,
    name: "Tesla Model 3",
    brand: "Tesla",
    type: "Sedan",
    year: 2023,
    price: 38000,
    mileage: 18000,
    fuel: "Electric",
    transmission: "Automatic",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=700&q=80",
    badge: "EV",
    color: "Pearl White",
    engine: "Dual Motor AWD, 358 hp",
    doors: 4,
    description:
      "Tesla Model 3 Long Range AWD in perfect condition. Range up to 602 km WLTP. Autopilot included, premium audio, glass roof, and wireless charging. Access to Tesla Supercharger network across Europe. No accidents, software fully up to date. Ideal for daily commuting and long-distance travel.",
    photos: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=90",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    ],
  },
  {
    id: 6,
    name: "Porsche 911 Carrera",
    brand: "Porsche",
    type: "Coupe",
    year: 2022,
    price: 119000,
    mileage: 8000,
    fuel: "Petrol",
    transmission: "Automatic",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80",
    badge: "Premium",
    color: "GT Silver",
    engine: "3.0L flat-six Turbo, 385 hp",
    doors: 2,
    description:
      "A meticulously maintained Porsche 911 Carrera (992 generation) with Sport Chrono Package, PASM sport suspension, Bose surround sound, and heated/ventilated sport seats. Inspected by our Porsche-certified technician. Full OPC service history. A rare opportunity to own an entry-level 992 at this mileage.",
    photos: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=90",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    ],
  },
  {
    id: 7,
    name: "Ford Mustang GT",
    brand: "Ford",
    type: "Coupe",
    year: 2021,
    price: 45000,
    mileage: 32000,
    fuel: "Petrol",
    transmission: "Manual",
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=700&q=80",
    color: "Race Red",
    engine: "5.0L V8, 450 hp",
    doors: 2,
    description:
      "Ford Mustang GT 5.0 V8 with 6-speed manual gearbox. Features include the Performance Pack, Brembo brakes, MagneRide suspension, launch control, and line-lock. B&O Play audio system. This car has been driven on normal roads only — no track use. Imported from Germany, full service history available.",
    photos: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=90",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    ],
  },
  {
    id: 8,
    name: "Toyota Camry Hybrid",
    brand: "Toyota",
    type: "Sedan",
    year: 2023,
    price: 32500,
    mileage: 11000,
    fuel: "Hybrid",
    transmission: "Automatic",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=700&q=80",
    color: "Midnight Black",
    engine: "2.5L Hybrid, 218 hp combined",
    doors: 4,
    description:
      "Toyota Camry 2.5 Hybrid in Executive Plus trim. Features JBL premium audio, head-up display, 10\" touchscreen, wireless Apple CarPlay, and Toyota Safety Sense 3.0. Combined fuel consumption of 4.3L/100km. Ideal for business use or families seeking long-range comfort and reliability.",
    photos: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&q=90",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    ],
  },
];
