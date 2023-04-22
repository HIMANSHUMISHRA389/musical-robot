import React from 'react'
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/appstore.png"


import "./Footer.css"


const Footer = () => {
  return (
    <footer id="footer">
      <div class="leftfooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>
      <div class="midfooter">
        <h1>ECOMMERCE</h1>
        <p>High Quality is our first priority</p>
        <p>copyrights 2023 &copy;HimanshuMishra</p>
      </div>
      <div class="rightfooter">
        <h4>Follow Us</h4>
        <a href="https://instagram.com/meabhisingh">Instagram</a>
        <a href="https://facebook.com/himanshumishra">Facebook</a>
        <a href="https://Twittwr.com/Himanshumishra389">Twitter</a>
      </div>
    </footer>
  )
}



export default Footer