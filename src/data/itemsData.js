const BASE = import.meta.env.BASE_URL;

const itemsData = [
  // Cable & Markers
  { id: 1, name: "RCC Cable Route Marker", price: 350, category: "Cable", image: `${BASE}assets/images/products/rcc-marker.jpg` },
  { id: 2, name: "RCC OFC Marker", price: 420, category: "Cable", image: `${BASE}assets/images/products/ofc-marker.jpg` },
  { id: 3, name: "RCC Termination Marker", price: 380, category: "Cable", image: `${BASE}assets/images/products/termination-marker.jpg` },
  { id: 4, name: "Cable Joint Marker", price: 300, category: "Cable", image: `${BASE}assets/images/products/rcc-marker.jpg` }, // Fallback
  { id: 5, name: "Danger Caution Board", price: 550, category: "Cable", image: `${BASE}assets/images/products/no-image.png` },

  // Earthing
  { id: 6, name: "RCC Earth Chamber", price: 3200, category: "Earthing", image: `${BASE}assets/images/products/earth-chamber.jpg` },
  { id: 7, name: "FRP Earth Chamber", price: 4500, category: "Earthing", image: `${BASE}assets/images/products/earth-chamber.jpg` }, // Fallback
  { id: 8, name: "GI Earth Pipe Electrode 40mm", price: 950, category: "Earthing", image: `${BASE}assets/images/products/gi-earth-pipe.jpg` },
  { id: 9, name: "Copper Bonded Earth Electrode", price: 2200, category: "Earthing", image: `${BASE}assets/images/products/earthing.jpg` },
  { id: 10, name: "Earth Pit Cover", price: 680, category: "Earthing", image: `${BASE}assets/images/products/rcc-chamber.jpg` },

  // Duct & Protection
  { id: 11, name: "RCC Cable Trough", price: 1500, category: "Duct", image: `${BASE}assets/images/products/rcc-item.jpg` },
  { id: 12, name: "RCC Trench Cover Slab", price: 1200, category: "Duct", image: `${BASE}assets/images/products/rcc-item.jpg` },
  { id: 13, name: "HDPE Duct 40mm", price: 120, category: "Duct", image: `${BASE}assets/images/products/hdpe-duct.jpg` },
  { id: 14, name: "HDPE Duct 63mm", price: 180, category: "Duct", image: `${BASE}assets/images/products/duct.jpg` },
  { id: 15, name: "HDPE Duct 110mm", price: 320, category: "Duct", image: `${BASE}assets/images/products/duct.jpg` },

  // Signal & Relay
  { id: 26, name: "Signal Post", price: 8200, category: "Signal", image: `${BASE}assets/images/products/signal-post.jpg` },
  { id: 27, name: "Signal Foundation Bolt", price: 480, category: "Signal", image: `${BASE}assets/images/products/no-image.png` },
  { id: 28, name: "LED Signal Lamp", price: 1250, category: "Signal", image: `${BASE}assets/images/products/signal-post.jpg` }, // Fallback
  { id: 29, name: "Signal Control Relay", price: 4200, category: "Signal", image: `${BASE}assets/images/products/junction-box.jpg` },
  { id: 30, name: "Track Circuit Relay", price: 6800, category: "Signal", image: `${BASE}assets/images/products/junction-box.jpg` },

  // Power & Accessories
  { id: 36, name: "Power Supply Unit 24V", price: 3800, category: "Power", image: `${BASE}assets/images/products/no-image.png` },
  { id: 37, name: "SMPS Unit", price: 4200, category: "Power", image: `${BASE}assets/images/products/no-image.png` },
  { id: 38, name: "Battery 12V 100Ah", price: 9800, category: "Power", image: `${BASE}assets/images/products/no-image.png` },
  { id: 39, name: "Battery Rack", price: 3200, category: "Accessories", image: `${BASE}assets/images/products/no-image.png` },
  { id: 40, name: "Earthing Strip GI", price: 180, category: "Accessories", image: `${BASE}assets/images/products/gi-earth-pipe.jpg` },
];

export default itemsData;
