import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import HomeVegetableSection from "../customer/Components/Home/HomeVegetableSection";
import HomeGrainsSection from "../customer/Components/Home/HomeGrainsSection";
import HomeLeafyGreensSection from "../customer/Components/Home/HomeLeafyGreensSection";
import { fruits } from "../Data/Agriculture/agriculture_fruits";
import { vegetables } from "../Data/Agriculture/agriculture_vegetbles";
import { grains } from "../Data/Agriculture/agriculture_grains";
import { leafyGreens } from "../Data/Agriculture/agriculture_leafyGreens";
//import { leafyGreens } from "../Data/Agriculture/agriculture_leafyGreens";
// import { leafyGreens } from "../Data/Agriculture/agriculture_LeafyGreens";
//import { grains } from "../Data/Agriculture/agriculture_grains";
//import { vegetables } from "../Data/Agriculture/agriculture_vegetables";


const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        
      <HomeProductSection data={fruits} section={"Fruits"} />
      
      <HomeGrainsSection data={grains} section={"Grains"} />
      
      <HomeVegetableSection data={vegetables} section={"Vegetables"} />

      <HomeLeafyGreensSection data={leafyGreens} section={"LeafyGreens"} />
      
      {/* <HomeLeafyGreensSection data={leafyGreens} section={"LeafyGreens"}/> */}
      {/* <HomeLeafyGreensSection data={leafyGreens} section={"LeafyGreens"} /> */}


      {/* <HomeGrainsSection data={grains} section={"Grains"} /> */}
    
      
        {}
      </div>

      
    </div>
  );
};

export default Homepage;
