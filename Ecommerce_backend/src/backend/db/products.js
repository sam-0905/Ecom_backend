import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
//Mobile,watch,Bud,tabet

  //Redmi 
  { 
    _id: uuid(),
    title: "Redmi A4 5G",
    company : " REDMI",
    price: 8499,
    // discount_price : 699,
    type: "Mobile",
    image : require("../../assets/ProductImg/Redmi A4_5g.png"),
    starRating: 4.9,
    description: "Sparkle purple, 4GB RAM, 64GB Storage) | Global Debut SD 4s Gen 2 | Segment Largest 6.88in 120Hz | 50MP Dual Camera | Free 33W Charger in Box",
    category: "Mobile Phones",
  },
  { 
    _id: uuid(),
    title: "Redmi Note 13 Pro",
    company : " REDMI",
    price: 22999,
    discount_price : 3999,
    type: "Mobile",
    image : require("../../assets/ProductImg/Redmi_note_13pro.png"),
    starRating: 4.5,
    description: "Scarlet Red, 8GB RAM, 128GB Storage) | 1.5K AMOLED | 200MP Hi-Res Camera | Flagship 4nm SD 7s Gen 2 | 67W TurboCharge",
    category: "Mobile Phones",
  },
  { 
    _id: uuid(),
    title: "Redmi Note 13 Pro+",
    company : " REDMI",
    price: 27999,
    // discount_price : 3999,
    type: "Mobile",
    image : require("../../assets/ProductImg/Redmi Note_13Pro+.png"),
    starRating: 4.5,
    description: "Fusion Black, 8GB RAM, 256GB Storage) | World's First Mediatek 7200 Ultra 5G | 200MP Hi-Res Camera | 1.5K Curved AMOLED | 120W HyperCharge",
    category: "Mobile Phones",
  },
  { 
    _id: uuid(),
    title: "Redmi A3X",
    company : " REDMI",
    price: 7999,
    // discount_price : 3999,
    type: "Mobile",
    image : require("../../assets/ProductImg/Redmi_A3X.png"),
    starRating: 5.0,
    description: "Starry White, 3GB RAM, 64GB Storage) | Premium Halo Design | 90Hz Display | Powerful Octa Core Processor",
    category: "Mobile Phones",
  },  
  { 
    _id: uuid(),
    title: "Redmi 13 5G",
    company : "REDMI",
    price: 12999,
    // discount_price : 3999,
    type: "Mobile",
    image : require("../../assets/ProductImg/Redmi 13 5G.png"),
    starRating: 4.7,
    description: "Orchid Pink, 6GB+128GB | India Debut SD 4 Gen 2 AE | 108MP Pro Grade Camera | 6.79in Largest Display in Segment",
    category: "Mobile Phones",
  },
  { 
    _id: uuid(),
    title: "Redmi Watch 5 Active",
    company : "REDMI",
    price: 2499,
    // discount_price : 3999,
    type: "Watch",
    image : require("../../assets/ProductImg/Redmi_watch5g.png"),
    starRating: 4.0,
    description: "2 HD Screen|HyperOS connectivity|Metal body|18 days of Battery Life|200+ Watch Faces|IPX8 rating|140+ Sports Modes|Heart Rate,Period Cycle Monitor|Black",
    category: "Watches",
  },
  { 
    _id: uuid(),
    title: "Redmi Watch 5 Lite",
    company : "REDMI",
    price: 3399,
    // discount_price : 3999,
    type: "Watch",
    image : require("../../assets/ProductImg/Redmi_watch5g_lite.png"),
    starRating: 4.3,
    description: "1.96 AMOLED Screen|In-built GPS|BT Calling 2mic ENC|5 ATM|HyperOS Connectivity|18 days Battery Life|200+ WatchFaces|160+ SportsModes|SpO2,HeartRate&FemaleHealth Tracking|Light Gold",
    category: "Watches",
  },

  { 
    _id: uuid(),
    title: "Redmi Buds 5",
    company : "REDMI",
    price: 2499,
    // discount_price : 3999,
    type: "Buds",
    image : require("../../assets/ProductImg/Redmi_watch5g_lite.png"),
    starRating: 4.3,
    description: "Bluetooth TWS Earbuds, Up to 46dB Hybrid Noise Cancellation, Quad Mic with AI Call Enhancement, 10mins Charge for 4Hours Life, Up to 38Hrs Playback| Fusion Purple",
    category: "Watches",
  },
  { 
    _id: uuid(),
    title: "Redmi Buds 5C",
    company : "REDMI",
    price: 1799,
    // discount_price : 3999,
    type: "Buds",
    image : require("../../assets/ProductImg/Redmi-Buds5c.png"),
    starRating: 4.3,
    description: "Bluetooth TWS in Ear Earbuds, Up to 40Db Hybrid Noise Cancellation, Quad Mic, Custom Eq, 10Mins Charge for 2Hours Life, Up to 36Hrs Playback, Gaming TWS| Acoustic Black",
    category: "Buds",
  },
  { 
    _id: uuid(),
    title: "Redmi Pad SE 4g",
    company : "REDMI",
    price: 10999,
    // discount_price : 3999,
    type: "Tablets",
    image : require("../../assets/ProductImg/Redmi-Pad-SE4g.png"),
    starRating: 4.0,
    description: "MediaTek Helio G55| 8.7-inc Display | 6650mAh Battery | 90Hz Smooth Refresh Rate| 4GB, 64GB | 1340 x 800 Display | 1 Billion Colours | Dolby Atmos | Dual Speakers | Ocean Blue",
    category: "Tablets",
  },
  { 
    _id: uuid(),  
    title: "Redmi Pad SE",
    company : "REDMI",
    price: 12999,
    // discount_price : 2999,
    type: "Tablets",
    image : require("../../assets/ProductImg/Redmi-Pad-SE.png"),
    starRating: 4.2,
    description: "All Day Battery | Qualcomm Snapdragon 680| 90Hz Refresh Rate| 6GB, 128GB Tablet| FHD+ Display (11-inch/27.94cm)| Dolby Atmos| Quad Speakers| Wi-Fi| Green",
    category: "Tablets",
  },
  { 
    _id: uuid(),
    title: "Redmi Pad Pro 5G",
    company : "REDMI",
    price: 24999,
    // discount_price : 2999,
    type: "Tablets",
    image : require("../../assets/ProductImg/Redmi-Pad-Pro5g.png"),
    starRating: 4.2,
    description: "Snapdragon 7s Gen 2|30.7cm(12.1) Tablet|33+ Days Standby| 10000mAh|HyperOS|8GB, 128GB|Quad Speakers |Wi-Fi 6 + 5G |Graphite Grey",
    category: "Tablets",
  },


//Iphone


{
  _id: uuid(),
  title: "iPhone 16 Pro",
  company : "IPHONE",
  price: 119900,
  // discount_price : 699,
  type: "Mobile",
  image : require("../../assets/ProductImg/iphone_16pro.png"),
  starRating: 4.6,
  description: "iPhone 16 Pro Max 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Desert Titanium",
  category: "Mobile Phones",
},
{
  _id: uuid(),
  title: "iPhone 16",
  company : "IPHONE",
  price: 79900,
  // discount_price : 699,
  type: "Mobile",
  image : require("../../assets/ProductImg/iphone_16.png"),
  starRating: 4.9,
  description: "iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Ultramarine",
  category: "Mobile Phones",
},
{
  _id: uuid(),
  title: "iPhone 15",
  company : "IPHONE",
  price: 69900,
  // discount_price : 699,
  type: "Mobile",
  image : require("../../assets/ProductImg/iphone_15.png"),
  starRating: 4.3,
  description: "Super Retina XDR display,6.1‑inch (diagonal) all‑screen OLED display,Dual 48MP camera system (Ultra Wide and Main),12MP TrueDepth camera,A16 Bionic chip,6‑core CPU with 2 performance and 4 efficiency cores,5‑core GPU,16‑core Neural Engine",
  category: "Mobile Phones",
},
{
  _id: uuid(),
  title: "iPhone 14",
  company : "IPHONE",
  price: 59900,
  // discount_price : 699,
  type: "Mobile",
  image : require("../../assets/ProductImg/iphone_14.png"),
  starRating: 4.2,
  description: "6.1-inch Super Retina XDR display,Dual 12MP camera system (Ultra Wide and Wide),12MP TrueDepth camera,Face ID	,A15 Bionic chip with 6-core CPU (2 performance and 4 efficiency cores), 5-core GPU, and 16-core Neural Engine",
  category: "Mobile Phones",
},
{
  _id: uuid(),
  title: "iPhone SE",
  company : "IPHONE",
  price: 15900, 
  // discount_price : 699,
  type: "Mobile",
  image : require("../../assets/ProductImg/iphone_se.png"),
  starRating: 4.2,
  description: "11.94 cm (4.7-inch) Retina HD display,Advanced single-camera system with 12MP Wide camera; Smart HDR 4, Photographic Styles, Portrait mode, and 4K video up to 60 fps,7MP FaceTime HD camera with Smart HDR 4, Photographic Styles, Portrait mode, and 1080p video recording,A15 Bionic chip for lightning-fast performance IP67,Touch ID for secure authentication,iOS 15 packs new features to do more with iPhone than ever before",
  category: "Mobile Phones",
},
{
  _id: uuid(),
  title: "Apple Watch SE",
  company : "IPHONE",
  price: 29900,
  // discount_price : 699,
  type: "Watch",
  image : require("../../assets/ProductImg/Apple-watch-se.png"),
  starRating: 4.6,
  description: "Apple Watch SE (2nd Gen, 2023) [GPS + Cellular 40mm] Smartwatch with Aluminum Case with Starlight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display",
  category: "Watches",
},
{
  _id: uuid(),
  title: "Apple Watch Seris 9",
  company : "IPHONE",
  price: 49990,
  discount_price : 39999,
  type: "Watch",
  image : require("../../assets/ProductImg/Apple-watch-9.png"),
  starRating: 4.0,
  description: "GPS+Cellular with Light Pink Sport Loop - M/L(45mm Display, Pink Aluminium Case",
  category: "Watches",
},
{
  _id: uuid(),
  title: "Apple Watch Series 10",
  company : "IPHONE",
  price: 49999,
  // discount_price : 699,
  type: "Watch",
  image : require("../../assets/ProductImg/Apple-watch-10.png"),
  starRating: 4.6,
  description: "[GPS 46 mm] Smartwatch with Jet Black Aluminium Case with Ink Sport Loop. Fitness Tracker, ECG App, Always-On Retina Display, Carbon Neutral",
  category: "Watches",
},
{
  _id: uuid(),
  title: "Apple Watch Ultra 2",
  company : "IPHONE",
  price: 89999,
  // discount_price : 699,
  type: "Watch",
  image : require("../../assets/ProductImg/Apple-watch-ultra2.png"),
  starRating: 4.6,
  description: "[GPS + Cellular 49 mm] Smartwatch, Sports Watch with Black Titanium Case with Black Ocean Band. Fitness Tracker, Precision GPS, Action Button, Bright Retina Display",
  category: "Watches",
},

{
  _id: uuid(),
  title: "Air-Pods Pro 2nd Gen",
  company : "IPHONE",
  price: 1899,
  // discount_price : 699,
  type: "Buds",
  image : require("../../assets/ProductImg/Apple-buds -pro2.png"),
  starRating: 3.6,
  description: "2024 Latest Version Wireless Bluetooth Earbuds with, Bluetooth 5.3,Running/Fitness(Touch Control,Sweat and Water Resistant) 100% Upto 60+ Hours of Use (A-P)",
  category: "Buds",
},
{
  _id: uuid(),
  title: "Apple AirPods 4 Wireless Earbuds",
  company : "IPHONE",
  price: 12999,
  // discount_price : 699,
  type: "Buds",
  image : require("../../assets/ProductImg/Apple-buds4.png"),
  starRating: 4.0,
  description: "Bluetooth Headphones, Personalised Spatial Audio, Sweat and Water Resistant, USB-C Charging Case, H2 Chip, Up to 30 Hours of Battery Life, Effortless Setup for iPhone",
  category: "Buds",
},
{
  _id: uuid(),
  title: "Apple AirPods 4 Wireless Earbuds NC",
  company : "IPHONE",
  price: 17999,
  // discount_price : 699,
  type: "Buds",
  image : require("../../assets/ProductImg/Apple-buds4.png"),
  starRating: 4.5,
  description: "Apple AirPods 4 Wireless Earbuds, Bluetooth Headphones, with Active Noise Cancellation, Adaptive Audio, Transparency Mode, Personalised Spatial Audio, USB-C Charging Case, Wireless Charging, H2 Chip",
  category: "Buds",
},
{
  _id: uuid(),
  title: "Apple iPad Pro 11 (M4)",
  company : "IPHONE",
  price: 99999,
  // discount_price : 699,
  type: "Tablets",
  image : require("../../assets/ProductImg/ipad Pro.png"),
  starRating: 4.5,
  description: "Ultra Retina XDR Display, 256GB, Landscape 12MP Front Camera / 12MP Back Camera, LiDAR Scanner, Wi-Fi 6E, Face ID, All-Day Battery Life, Standard Glass — Space Blackp",
  category: "Tablets",
},
{
  _id: uuid(),
  title: "Apple iPad (10th)",
  company : "IPHONE",
  price: 33499,
  // discount_price : 699,
  type: "Tablets",
  image : require("../../assets/ProductImg/ipad_10th.png"),
  starRating: 4.6,
  description: "with A14 Bionic chip, 27.69 cm (10.9″) Liquid Retina Display, 64GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Pink",
  category: "Tablets",
},

{
  _id: uuid(),
  title: "Apple iPad Air 13 (M2)",
  company : "IPHONE",
  price: 79999,
  // discount_price : 699,
  type: "Tablets",
  image : require("../../assets/ProductImg/ipad_air.png"),
  starRating: 4.4,
  description: "Liquid Retina Display, 128GB, Landscape 12MP Front Camera / 12MP Back Camera, Wi-Fi 6E, Touch ID, All-Day Battery Life — Purple",
  category: "Tablets",
},
{
  _id: uuid(),
  title: "Apple iPad Mini",
  company : "IPHONE",
  price: 59999,
  // discount_price : 699,
  type: "Tablets",
  image:require("../../assets/ProductImg/ipad_mini_.png"),
  starRating: 4.5,
  description: "Apple Intelligence, 21.08 cm (8.3″) Liquid Retina Display, 256GB, Wi-Fi 6E, 12MP Front/12MP Back Camera, Touch ID, All-Day Battery Life — Starlight",
  category: "Tablets",
},


 //Samsung Products


 {
  _id: uuid(),
  title: "Galaxy S24 FE",
  company : "SAMSUNG",
  price: 65999,
  // discount_price : 699,
  type: "Mobile",
  image : require("../../assets/ProductImg/galaxy-s24-Fe.png"),
  starRating: 4.6,
  description: "Galaxy AI ,Flagship Processor,8K Video Recording",
  category: "Mobile Phones",
},
{
  _id: uuid(),
  title: "Galaxy S24 Ultra",
  company : "SAMSUNG",
  price: 129999,
  discount_price : 5000,
  type: "Mobile",
  image : require("../../assets/ProductImg/galaxy-s24-ultra.png"),
  starRating: 4.3,
  description: "Industry-leading hardware meets world-changing AI,Made with titanium. Built to last200 MP high-resolution photography & hyper-",
  category: "Mobile Phones",
},
{
  _id: uuid(),
  title: "Galaxy S24",
  company : "SAMSUNG",
  price: 89999,
  // discount_price : 699,
  type: "Mobile",
  image : require("../../assets/ProductImg/galaxy-s24.png"),
  starRating: 4.1,
  description:"Setting the new standard of mobile, now with Galaxy AI.Shrunken bezels & satin-finished aluminum .Space Zoom for pixel-perfect portraits & power for",
  category: "Mobile Phones",
},
{
  _id: uuid(),
  title: "Galaxy S24",
  company : "SAMSUNG",
  price: 89999,
  // discount_price : 699,
  type: "Mobile",
  image : require("../../assets/ProductImg/galaxy-s24.png"),
  starRating: 4.1,
  description:"Setting the new standard of mobile, now with Galaxy AI.Shrunken bezels & satin-finished aluminum .Space Zoom for pixel-perfect portraits & power for",
  category: "Mobile Phones",
},
{
  _id: uuid(),
  title: "Galaxy S24",
  company : "SAMSUNG",
  price: 109999,
  discount_price : 40000,
  type: "Mobile",
  image : require("../../assets/ProductImg/galaxy-s23-ultra.png"),
  starRating: 4.4,
  description:"Epic night shots that beg to be shared.Ultra-fast photography and gameplay.Designed for you, and the planet",
  category: "Mobile Phones",
},
{
  _id: uuid(),
  title: "Galaxy S23",
  company : "SAMSUNG",
  price: 64999,
  discount_price : 25000,
  type: "Mobile",
  image : require("../../assets/ProductImg/galaxy-s23-ultra.png"),
  starRating: 4.5,
  description:"Snap your best night selfies yet .Epically fast photography and gameplay.Designed for you, and the planet",
  category: "Mobile Phones",
},
{
  _id: uuid(),
  title: "Galaxy Watch ultra",
  company : "SAMSUNG",
  price: 59999,
  discount_price : 10000,
  type: "Watch",
  image : require("../../assets/ProductImg/galaxy-watch-ultra-.png"),
  starRating: 4.5,
  description:"4.7cm,Titanium grade4,Sapphire Crystal,10ATM+IP68,590mAh,3nm Processor,5 Core",
  category: "Watches",
},
{
  _id: uuid(),
  title: "Galaxy Watch7",
  company : "SAMSUNG",
  price: 29999,
  discount_price : 3000,
  type: "Watch",
  image : require("../../assets/ProductImg/galaxy-watch7.png"),
  starRating: 4.2,
  description:"4.0cm,Armor Aluminum2,Sapphire Crystal,5ATM+IP68,425mAh|300mAh,3nm Processor,5 Core",
  category: "Watches",
},
{
  _id: uuid(),
  title: "Galaxy Watch5 Pro",
  company : "SAMSUNG",
  price: 19999,
  // discount_price : 2000,
  type: "Watch",
  image : require("../../assets/ProductImg/galaxy-watch5.png"),
  starRating: 4.2,
  description:"3.46 cm,Black leather strap,590mAh,1.18 GHz,CPU Type Dual-core",
  category: "Watches",
},
{
  _id: uuid(),
  title: "Galaxy Buds3 Pro",
  company : "SAMSUNG",
  price: 19999,
  discount_price : 5000,
  type: "Buds",
  image : require("../../assets/ProductImg/galaxy-buds3-pro.png"),
  starRating: 4.5,
  description:"Ultimate Hi-Fi,Iconic design with Blade Lights,Adaptive Noise Control",
  category: "Buds",
},
{
  _id: uuid(),
  title: "Galaxy Buds3",
  company : "SAMSUNG",
  price: 14999,
  discount_price : 5000,
  type: "Buds",
  image : require("../../assets/ProductImg/galaxy-buds3.png"),
  starRating: 4.3,
  description:"Ultimate Hi-Fi,All-new, open-type design ,Adaptive EQ/ANC",
  category: "Buds",
},
{
  _id: uuid(),
  title: "Galaxy Buds FE",
  company : "SAMSUNG",
  price: 9999,
  discount_price : 3000,
  type: "Buds",
  image : require("../../assets/ProductImg/galaxy-buds-fe-.png"),
  starRating: 4.2,
  description:"Premium Sound Quality with ANC,Ergonomic & Intuitive Fit,Galaxy Ecosystem",
  category: "Buds",
},
{
  _id: uuid(),
  title: "Galaxy Tab S10+ (Wi-Fi, 12 GB Memory)",
  company : "SAMSUNG",
  price: 90999,
  discount_price : 11000,
  type: "Tablets",
  image : require("../../assets/ProductImg/galaxy-tab-s10.png"),
  starRating: 4.5,
  description:"World's First AI Tablet,AI-enhanced Note-taking,Sketch to Image",
  category: "Tablets",
},
{
  _id: uuid(),
  title: "  Galaxy Tab S10 Ultra 5G (12 GB Memory)",
  company : "SAMSUNG",
  price: 122999,
  discount_price : 15000,
  type: "Tablets",
  image : require("../../assets/ProductImg/galaxy-tab-s10-ultra.png"),
  starRating: 4.5,
  description:"World's First AI Tablet,AI-enhanced Note-taking,Sketch to Image",
  category: "Tablets",
},
{
  _id: uuid(),
  title: "  Galaxy Tab A9+ 5G (4 GB Memory)",
  company : "SAMSUNG",
  price: 22999,
  discount_price : 5000,
  type: "Tablets",
  image : require("../../assets/ProductImg/galaxy-tab-a9.png"),
  starRating: 4.5,
  description:"Engaging viewing experience with large 27.82 cm LCD display, 90 Hz Refresh Rate, 1920 x 1200 (WQXGA),Qualcomm Snapdragon SM6375 Processor,8 MP AF Rear Camera,  5 MP FF Front camera, Quad",
  category: "Tablets",
},

];

 // -------------------------------------
  // {
  //   _id: uuid(),
  //   title: "Zebronics Zeb-Bang PRO Headphone",
  //   company : "Zebronics",
  //   price: 999,
  //   discount_price : 699,
  //   type: "Wireless Headphones",
  //   image : require("../../Images/ProductsImg/headphone1.png"),
  //   starRating: 4.5,
  //   description: "Wireless bluetooth v5.0 headphone with built in microphone for call function.Foldable design with light weight structure, for easy portability.30H* approx. battery backup with the in built battery and Type C charging feature.40mm drivers for full range audio."
  // },
  // {
  //   _id: uuid(),
  //   title: "You Can WIN",
  //   author: "Shiv Khera",
  //   price: "5000",
  //   category: "non-fiction",
  // },
  // {
  //   _id: uuid(),
  //   title: "You are Winner",
  //   author: "Junaid Qureshi",
  //   price: "3000",
  //   category: "horror",
  // },
  // {
  //   _id: uuid(),
  //   title: "Think and Grow Rich",
  //   author: "Shiv Khera",
  //   price: "1000",
  //   category: "fiction",
  // },