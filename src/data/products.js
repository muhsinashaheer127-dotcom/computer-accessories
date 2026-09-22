export const CATEGORIES = [
  { id: 'laptops', name: 'Laptops', icon: 'Laptop', count: 18, image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80' },
  { id: 'desktops', name: 'Desktops', icon: 'Monitor', count: 12, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80' },
  { id: 'gaming', name: 'Gaming', icon: 'Gamepad2', count: 42, image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80' },
  { id: 'monitors', name: 'Monitors', icon: 'Tv', count: 15, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80' },
  { id: 'keyboards', name: 'Keyboards', icon: 'Keyboard', count: 24, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80' },
  { id: 'mice', name: 'Mice', icon: 'Mouse', count: 20, image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80' },
  { id: 'headsets', name: 'Headsets', icon: 'Headphones', count: 16, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80' },
  { id: 'components', name: 'Components', icon: 'Cpu', count: 30, image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80' },
  { id: 'gpu', name: 'Graphics Cards', icon: 'CircuitBoard', count: 14, image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=600&q=80' },
  { id: 'storage', name: 'Storage', icon: 'HardDrive', count: 22, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80' }
];

export const BRANDS = [
  { id: 'asus', name: 'ASUS', logo: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=200&q=80' },
  { id: 'msi', name: 'MSI', logo: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=200&q=80' },
  { id: 'lenovo', name: 'Lenovo', logo: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=200&q=80' },
  { id: 'hp', name: 'HP', logo: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=200&q=80' },
  { id: 'dell', name: 'Dell', logo: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=200&q=80' },
  { id: 'logitech', name: 'Logitech', logo: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=200&q=80' },
  { id: 'razer', name: 'Razer', logo: 'https://images.unsplash.com/photo-1626218174358-7769486c4b79?auto=format&fit=crop&w=200&q=80' },
  { id: 'corsair', name: 'Corsair', logo: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=200&q=80' },
  { id: 'samsung', name: 'Samsung', logo: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=200&q=80' },
  { id: 'nvidia', name: 'NVIDIA', logo: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=200&q=80' }
];

export const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'ASUS ROG Strix SCAR 18 Performance Laptop',
    brand: 'ASUS',
    category: 'laptops',
    description: 'Flagship computing workstation powered by Intel Core i9-14900HX, NVIDIA GeForce RTX 4090 16GB, 32GB DDR5 RAM, 2TB PCIe Gen4 SSD, and 18-inch 2.5K 240Hz Nebula Display.',
    price: 8499,
    originalPrice: 9299,
    discount: 9,
    rating: 4.9,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 5,
    isFeatured: true,
    isDeal: true,
    dealEndsHours: 14,
    tags: ['Best Seller', 'RTX 4090', 'High Performance'],
    specifications: {
      'Processor': 'Intel Core i9-14900HX (24 Cores, up to 5.8 GHz)',
      'Graphics': 'NVIDIA GeForce RTX 4090 16GB GDDR6',
      'RAM': '32GB DDR5 5600MHz (Expandable to 64GB)',
      'Storage': '2TB M.2 NVMe PCIe 4.0 SSD',
      'Display': '18" QHD+ (2560 x 1600) 240Hz 3ms ROG Nebula Display',
      'OS': 'Windows 11 Pro',
      'Weight': '3.10 kg',
      'Warranty': '2 Years Official UAE Warranty'
    },
    features: [
      'ROG Intelligent Cooling with Conductonaut Extreme liquid metal on CPU and GPU',
      'Per-key backlighting mechanical keyboard with Aura Sync technology',
      'Four-speaker system with Smart Amp and Dolby Atmos support',
      'Wi-Fi 6E (802.11ax) + Bluetooth 5.3 ultra-fast wireless interface'
    ]
  },
  {
    id: 'prod-2',
    name: 'Razer BlackWidow V4 Pro Mechanical Keyboard',
    brand: 'Razer',
    category: 'keyboards',
    description: 'Immersive underglow and per-key illumination, dedicated command dial, tactile mechanical switches engineered for typing precision and reliability.',
    price: 649,
    originalPrice: 799,
    discount: 19,
    rating: 4.8,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 18,
    isFeatured: true,
    isDeal: false,
    tags: ['Mechanical', 'Command Dial', 'Tactile'],
    specifications: {
      'Switch Type': 'Razer Green Mechanical (Clicky & Tactile)',
      'Keycap Material': 'Doubleshot ABS Keycaps',
      'Lighting': 'Chroma Multi-zone Underglow',
      'Connectivity': 'Detachable Type-C Cable',
      'Polling Rate': '8000Hz HyperPolling',
      'Wrist Rest': 'Magnetic Plush Leatherette Wrist Rest'
    },
    features: [
      'Multi-function Command Dial for smooth zooming, navigation and media control',
      '8 Dedicated Macro & productivity keys for rapid workflows',
      'Sound dampening acoustic foam inside the aluminum top chassis'
    ]
  },
  {
    id: 'prod-3',
    name: 'Logitech G Pro X Superlight 2 Wireless Mouse',
    brand: 'Logitech',
    category: 'mice',
    description: 'Precision engineered lightweight wireless mouse with HERO 2 Sensor (32,000 DPI), hybrid optical-mechanical switches, and 95-hour battery life.',
    price: 449,
    originalPrice: 529,
    discount: 15,
    rating: 4.9,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 25,
    isFeatured: true,
    isDeal: true,
    dealEndsHours: 8,
    tags: ['Wireless', 'Superlight 60g', 'HERO 2'],
    specifications: {
      'Sensor': 'HERO 2 Optical Sensor',
      'Resolution': '100 – 32,000 DPI',
      'Max Acceleration': '> 40G',
      'Weight': '60 grams',
      'Battery Life': 'Up to 95 Hours continuous use',
      'Switches': 'LIGHTFORCE Optical-Mechanical Hybrid'
    },
    features: [
      'Zero-additive PTFE feet for frictionless glide across desks',
      'USB-C fast charging interface',
      'POWERPLAY wireless charging compatible'
    ]
  },
  {
    id: 'prod-4',
    name: 'Samsung Odyssey OLED G9 49" Curved Dual QHD Monitor',
    brand: 'Samsung',
    category: 'monitors',
    description: 'Dual QHD 5120x1440 resolution, 240Hz refresh rate, 0.03ms response time, Neo Quantum Processor Pro, and DisplayHDR True Black 400 for stunning visual fidelity.',
    price: 4499,
    originalPrice: 5199,
    discount: 13,
    rating: 4.8,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 7,
    isFeatured: true,
    isDeal: false,
    tags: ['OLED', 'Dual QHD', '240Hz', 'Ultrawide'],
    specifications: {
      'Screen Size': '49 Inch 1800R Curved',
      'Resolution': 'Dual QHD (5120 x 1440)',
      'Aspect Ratio': '32:9 Super Ultra-Wide',
      'Refresh Rate': '240Hz',
      'Response Time': '0.03ms (GtG)',
      'Panel Type': 'OLED with Quantum Dot Technology',
      'HDR': 'VESA DisplayHDR True Black 400'
    },
    features: [
      'CoreSync & Core Lighting+ matches ambient lighting with screen colors',
      'Integrated Smart Hub for seamless productivity & media streaming',
      'Adaptive Sync technology eliminates screen stutter and tearing'
    ]
  },
  {
    id: 'prod-5',
    name: 'NVIDIA GeForce RTX 4080 Super Founders Edition 16GB',
    brand: 'NVIDIA',
    category: 'gpu',
    description: 'Powered by NVIDIA Ada Lovelace architecture. 10,240 CUDA Cores, 3rd Gen RT Cores, DLSS 3.5 AI-accelerated performance, 16GB GDDR6X VRAM.',
    price: 3899,
    originalPrice: 4299,
    discount: 9,
    rating: 4.9,
    reviews: 310,
    image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 4,
    isFeatured: true,
    isDeal: true,
    dealEndsHours: 19,
    tags: ['GPU', 'RTX 4080 Super', 'DLSS 3.5'],
    specifications: {
      'CUDA Cores': '10,240',
      'Boost Clock': '2.55 GHz',
      'Memory Size': '16GB GDDR6X',
      'Memory Bus': '256-bit',
      'Power Consumption': '320W (750W PSU Recommended)',
      'Outputs': '3x DisplayPort 1.4a, 1x HDMI 2.1a'
    },
    features: [
      'NVIDIA DLSS 3.5 Frame Generation & AI Ray Reconstruction',
      'Dual Axial Flow Through Thermal System for silent, cool operation',
      'AV1 hardware encoder for ultra high quality video production'
    ]
  },
  {
    id: 'prod-6',
    name: 'Corsair Virtuoso Wireless XT High-Fidelity Headset',
    brand: 'Corsair',
    category: 'headsets',
    description: 'High-Fidelity spatial sound with 50mm Neodymium drivers, Slipstream Wireless + Bluetooth dual connection, Dolby Atmos, broadcast-grade detachable mic.',
    price: 699,
    originalPrice: 849,
    discount: 18,
    rating: 4.7,
    reviews: 176,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 12,
    isFeatured: false,
    isDeal: false,
    tags: ['Spatial Audio', 'Wireless', 'Dolby Atmos'],
    specifications: {
      'Driver Size': '50mm Custom High-Density Neodymium',
      'Frequency Response': '20Hz - 40,000 Hz',
      'Impedance': '32 Ohms @ 1kHz',
      'Battery Life': 'Up to 15 Hours',
      'Connectivity': '2.4GHz Slipstream, Bluetooth, 3.5mm, USB Wired 24bit/96kHz',
      'Weight': '382g'
    },
    features: [
      'Premium lightweight machined aluminum construction',
      'Simultaneous dual-wireless connections (Slipstream + Bluetooth)',
      'Broadcast-grade 9.5mm omni-directional detachable microphone'
    ]
  },
  {
    id: 'prod-7',
    name: 'Samsung 990 PRO 2TB PCIe 4.0 NVMe M.2 SSD with Heatsink',
    brand: 'Samsung',
    category: 'storage',
    description: 'Ultimate SSD speed. Up to 7450 MB/s read and 6900 MB/s write speed, integrated slim heatsink compatible with PS5 & Desktop workstations.',
    price: 549,
    originalPrice: 649,
    discount: 15,
    rating: 4.9,
    reviews: 430,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 30,
    isFeatured: false,
    isDeal: true,
    dealEndsHours: 11,
    tags: ['Gen4 NVMe', 'High Speed', '7450 MB/s'],
    specifications: {
      'Capacity': '2TB M.2 2280',
      'Sequential Read': 'Up to 7,450 MB/s',
      'Sequential Write': 'Up to 6,900 MB/s',
      'Interface': 'PCIe Gen 4.0 x4, NVMe 2.0',
      'Controller': 'Samsung In-House Pascal Controller',
      'Warranty': '5 Years Official Manufacturer Warranty'
    },
    features: [
      'Smart thermal control with nickel-coated controller and heatsink',
      '50% improved power efficiency over 980 PRO',
      'Samsung Magician Software for firmware update and health monitoring'
    ]
  },
  {
    id: 'prod-8',
    name: 'MSI MEG Creator Workstation Desktop PC',
    brand: 'MSI',
    category: 'desktops',
    description: 'High-end workstation desktop with Intel Core i9-13900KF, RTX 4090 24GB, 64GB DDR5, 2TB NVMe + 2TB HDD, and silent liquid cooling architecture.',
    price: 12999,
    originalPrice: 14499,
    discount: 10,
    rating: 5.0,
    reviews: 44,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 2,
    isFeatured: true,
    isDeal: false,
    tags: ['Workstation PC', 'RTX 4090', '64GB RAM'],
    specifications: {
      'Processor': 'Intel Core i9-13900KF (24 Cores, 32 Threads)',
      'Graphics': 'MSI GeForce RTX 4090 SUPRIM 24GB',
      'RAM': '64GB DDR5 5600MHz',
      'Storage': '2TB PCIe Gen4 SSD + 2TB 7200RPM HDD',
      'Motherboard': 'Intel Z790 Chipset MEG Board',
      'Power Supply': '1000W 80 PLUS Gold PCIe 5.0 PSU',
      'Cooling': '240mm AIO Liquid Cooler'
    },
    features: [
      'System status dial for live thermal monitoring and performance tuning',
      'Integrated premium headset cradle on both sides',
      '2.5G + 1G Dual LAN + Wi-Fi 6E wireless connectivity'
    ]
  },
  {
    id: 'prod-9',
    name: 'Corsair 5000X Tempered Glass Mid-Tower PC Case',
    brand: 'Corsair',
    category: 'components',
    description: 'Showcase your build behind four clean tempered glass panels, included 3x 120mm AirGuide fans and RapidRoute cable management system.',
    price: 499,
    originalPrice: 599,
    discount: 17,
    rating: 4.8,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 14,
    isFeatured: false,
    isDeal: false,
    tags: ['PC Case', 'Glass Panels', 'Cable Management'],
    specifications: {
      'Form Factor': 'Mid-Tower',
      'Motherboard Support': 'Mini-ITX, Micro-ATX, ATX, E-ATX',
      'Radiator Support': 'Up to 360mm front and top',
      'GPU Max Length': '400 mm',
      'CPU Cooler Max Height': '170 mm',
      'Included Fans': '3x 120mm AirGuide Fans + Lighting Node CORE'
    },
    features: [
      '4x Tool-free tempered glass side and front panels',
      'Spacious interior fits up to 10x 120mm or 4x 140mm fans',
      'RapidRoute cable management routes major cables through a single channel'
    ]
  },
  {
    id: 'prod-10',
    name: 'Lenovo Legion Pro 7i Gen 8 Performance Laptop',
    brand: 'Lenovo',
    category: 'laptops',
    description: 'AI-tuned workstation power with Intel Core i9-13900HX, RTX 4080 12GB, 32GB RAM, 1TB SSD, and 16" WQXGA 240Hz 500 nits IPS Display.',
    price: 6999,
    originalPrice: 7799,
    discount: 10,
    rating: 4.9,
    reviews: 164,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 6,
    isFeatured: true,
    isDeal: false,
    tags: ['High Performance', 'RTX 4080', 'WQXGA Display'],
    specifications: {
      'Processor': 'Intel Core i9-13900HX (24 Cores)',
      'Graphics': 'NVIDIA GeForce RTX 4080 12GB GDDR6',
      'RAM': '32GB DDR5 5600MHz',
      'Storage': '1TB M.2 NVMe PCIe Gen4 SSD',
      'Display': '16" WQXGA (2560x1600) IPS 240Hz 500 nits HDR400',
      'Weight': '2.8 kg'
    },
    features: [
      'Dedicated AI hardware engine dynamically optimizes performance',
      'Vapor chamber cooling with liquid metal thermal compound',
      'TrueStrike precision keyboard with tactile feedback'
    ]
  },
  {
    id: 'prod-11',
    name: 'Logitech G915 LIGHTSPEED Wireless Mechanical Keyboard',
    brand: 'Logitech',
    category: 'keyboards',
    description: 'Low-profile mechanical switches, aircraft-grade aluminum alloy top, LIGHTSPEED 1ms wireless, per-key backlighting, up to 40 hours battery.',
    price: 599,
    originalPrice: 699,
    discount: 14,
    rating: 4.7,
    reviews: 388,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 20,
    isFeatured: false,
    isDeal: true,
    dealEndsHours: 5,
    tags: ['Low Profile', 'Wireless', 'LIGHTSPEED'],
    specifications: {
      'Switch Type': 'GL Tactile Low Profile Mechanical',
      'Actuation Distance': '1.5 mm',
      'Battery Life': '40 hours (at 100% illumination)',
      'Connectivity': 'LIGHTSPEED 2.4GHz Wireless + Bluetooth + USB Wired',
      'Media Controls': 'Dedicated aluminum volume roller & media keys'
    },
    features: [
      'Ultra-thin 22mm sleek brushed aluminum frame',
      'Connect to multiple devices simultaneously with instant button switch',
      'Custom key illumination via Logitech G HUB software'
    ]
  },
  {
    id: 'prod-12',
    name: 'Dell UltraSharp 32 4K USB-C Hub Monitor (U3223QE)',
    brand: 'Dell',
    category: 'monitors',
    description: 'World’s first 31.5" 4K monitor with IPS Black technology. 2000:1 contrast ratio, 98% DCI-P3, USB-C hub with 90W Power Delivery and RJ45 ethernet.',
    price: 2499,
    originalPrice: 2899,
    discount: 14,
    rating: 4.8,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 9,
    isFeatured: false,
    isDeal: false,
    tags: ['4K IPS Black', 'Creator Monitor', '90W USB-C'],
    specifications: {
      'Screen Size': '31.5 Inch',
      'Resolution': '4K UHD (3840 x 2160)',
      'Panel Type': 'IPS Black Tech',
      'Color Gamut': '98% DCI-P3, 100% sRGB',
      'Contrast Ratio': '2000:1',
      'Ports': 'HDMI 2.0, DP 1.4, USB-C 90W PD, RJ45 Ethernet, 5x USB 10Gbps'
    },
    features: [
      'IPS Black Technology delivers deeper blacks and superior viewing angles',
      'Built-in KVM switch control two PCs with a single keyboard & mouse',
      'ComfortView Plus reduces harmful blue light without color degradation'
    ]
  }
];

export const SERVICE_FEATURES = [
  {
    icon: 'Truck',
    title: 'Fast Delivery Across UAE',
    desc: 'Free delivery on orders above AED 150 across all 7 Emirates'
  },
  {
    icon: 'ShieldCheck',
    title: '100% Secure Payments',
    desc: 'Cards, Apple Pay, Tabby Installments & COD'
  },
  {
    icon: 'RotateCcw',
    title: '14 Days Easy Returns',
    desc: 'Hassle-free return policy with quick replacements'
  },
  {
    icon: 'Headphones',
    title: 'UAE Tech Support',
    desc: 'Expert support based in Dubai for all equipment'
  }
];

