// Replaced by new structure
const BASE = import.meta.env.BASE_URL || "/";

const workData = {
  "trenching": {
    id: 1,
    title: "Civil Works – Trenching",
    desc: "Manual and mechanical excavation for secure cable routing.",
    images: [
      `${BASE}assets/images/projects/trenching.jpg`,
      `${BASE}assets/images/projects/civil/civil1.jpg`,
      `${BASE}assets/images/projects/civil/civil2.jpg`
    ],
    items: [
      "Manual trenching",
      "Mechanical trenching (JCB)",
      "Trench excavation",
      "Cable trench trenching & making",
      "RCC trench",
      "Trough / duct placing",
      "Track crossing",
      "Horizontal boring / drilling"
    ]
  },
  "foundations": {
    id: 2,
    title: "Civil Works – Foundations & Structural",
    desc: "Robust foundations for location boxes and signals.",
    images: [
      `${BASE}assets/images/projects/rcc/rcc1.jpg`,
      `${BASE}assets/images/projects/rcc/rcc2.jpg`,
      `${BASE}assets/images/projects/civil/civil3.jpg`
    ],
    items: [
      "Foundation works",
      "Structural works",
      "Full location box foundation",
      "Half location box foundation",
      "Signal foundation",
      "Shunt signal foundation",
      "Masonry works"
    ]
  },
  "chambers": {
    id: 3,
    title: "RCC & Chamber Works",
    desc: "Durable reinforced concrete chambers and coil pits.",
    images: [
      `${BASE}assets/images/projects/rcc/rcc1.jpg`,
      `${BASE}assets/images/projects/rcc/rcc2.jpg`,
      `${BASE}assets/images/projects/rcc/rcc3.jpg`
    ],
    items: [
      "RCC chamber",
      "Coil pit with cable entry"
    ]
  },
  "cabling": {
    id: 4,
    title: "S&T Works – Cabling & Ducting",
    desc: "Laying optical fiber and signaling cables with protection.",
    images: [
      `${BASE}assets/images/projects/ofc.jpg`,
      `${BASE}assets/images/projects/st/st1.jpg`,
      `${BASE}assets/images/projects/st/st2.jpg`
    ],
    items: [
      "Cable laying",
      "OFC / HDPE duct laying",
      "Cable laying through H-boring",
      "Cable laying through pipes",
      "GI pipe laying / fixing"
    ]
  },
  "equipment": {
    id: 5,
    title: "S&T Works – Equipment Installation",
    desc: "Installation and termination of signaling equipment.",
    images: [
      `${BASE}assets/images/projects/signal.jpg`,
      `${BASE}assets/images/projects/st/st1.jpg`,
      `${BASE}assets/images/projects/st/st2.jpg`
    ],
    items: [
      "Earth electrode / GI earth pipe installation",
      "Cable route marker erection / fixing",
      "Location box wiring",
      "Signal box wiring",
      "Post erection / fitting",
      "Splicing works",
      "Quad jointing"
    ]
  },
  "electrical": {
    id: 6,
    title: "Electrical & Earthing Works",
    desc: "Comprehensive earthing and electrical safety solutions.",
    images: [
      `${BASE}assets/images/projects/earthing.jpg`,
      `${BASE}assets/images/projects/electrical/electrical1.jpg`,
      `${BASE}assets/images/projects/electrical/electrical2.jpg`
    ],
    items: [
      "Electrical earthing",
      "GI earth pipe installation",
      "Earthing connections"
    ]
  },
  "labor": {
    id: 7,
    title: "Labor, Machinery & Site Support",
    desc: "Skilled workforce and machinery for railway projects.",
    images: [
      `${BASE}assets/images/projects/hero.jpg`, // Placeholder
      `${BASE}assets/images/projects/civil/civil1.jpg` // Placeholder
    ],
    items: [
      "Skilled & unskilled labour",
      "Daily wages labour",
      "Night watchman",
      "Machinery support"
    ]
  },
  "misc": {
    id: 8,
    title: "Miscellaneous Site Works",
    desc: "Site preparation, clearing, and material handling.",
    images: [
      `${BASE}assets/images/projects/civil/civil2.jpg`, // Placeholder
      `${BASE}assets/images/projects/rcc/rcc1.jpg` // Placeholder
    ],
    items: [
      "Jungle clearing / cutting",
      "Material / lorry unloading",
      "Railway S&T projects support",
      "Telecom & OFC support works"
    ]
  }
};

export default workData;
