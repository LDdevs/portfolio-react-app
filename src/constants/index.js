import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
    RxOpacity,
  } from "react-icons/rx";
  
  
//   import SpaceCity1 from "../assets/SpaceCity1.jpg";
//   import SpaceCity5 from "../assets/SpaceCity5.jpeg";
//   import SpaceCity6 from "../assets/SpaceCity6.jpeg";
//   import SpaceCity7 from "../assets/SpaceCity7.jpeg";
//   import SpaceCity8 from "../assets/SpaceCity8.jpeg";
//   import SpaceCity9 from "../assets/SpaceCity9.jpeg";
  import Branding from "../assets/branding1.png";
  import Design from "../assets/design1.png";
  import Develop from "../assets/webdev2.png";
  
  export const ServiceData = [
    {
      icon: RxCrop,
      title: "Development (Coming 13/5/2024)",
      content: "Custom Websites developed in ReactJS & TailwindCSS",
      backgroundImage: Develop,
    },
    {
      icon: RxPencil2,
      title: "Branding (Coming 13/5/2024)",
      content: "Brand Kits with Custom Logo, Typography, Colour Palette and more",
      backgroundImage: Branding,
      RxOpacity: 1,
      
    },
    {
      icon: RxDesktop,
      title: "Design (Coming 13/5/2024)",
      content: "Website Design using Framer/Wordpress, Custom Graphic Design",
      backgroundImage: Design,
    },
  ];