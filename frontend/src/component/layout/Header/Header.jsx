import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from '../../../images/logo1.png'
const options={
  burgerColorHover:"red",
      logo,
      navColor1:"white",
      logoWidth:"20vmax",
      logoHoverColor:"#eb4034",
      logoHoverSize:"10px",
      link1Text:"Home",
      link2Text:"Product",
      link3Text:"Contact",
      link4Text:"About",
      link1Url:"/",
      link2Url:"/product",
      link3Url:"/contact",
      link4Url:"about",
      link1Size:"1.3max",
      link1Color:"rgba(35,35,35,0.8)",
      nav1justifyContent:"flex-end",
      nav2justifyContent:"flex-end",
      nav3justifyContent:"flex-start",
      nav4justifyContent:"flex-start",
      link1ColorHover:"#eb4034",
      link1Margin:"1vmax",
      profileIconColor:"rgba(35,35,35,0.8)",
      searchIconColor:"rgba(35,35,35,0.8)",
      cartIconColor:"rgba(35,35,35,0.8)",
      profileIconColorHover:"#eb4034",
      searchIconColorHover:"#eb4034",
      cartIconColorHover:"#eb4034",
      cartIconMargin:"1vmax",
}
const Header = () => {
  return (
    <ReactNavbar {...options}
      
    />
  );
};

export default Header;
