import React, {Component} from "react"
import contact from './contact';
import "./public/css/style.css" 
import logo from './public/img/logo.png';
import wyh from './public/img/wyh.png';
import spidermen3 from './public/img/spidermen3.png';
import endgame from './public/img/endgame.png';
import about from './about.js';
import login from './login.js';

 class index extends Component{
  render(){
        return(

<div>
  <link
    href="https://fonts.googleapis.com/css?family=Slabo+27px"
    rel="stylesheet"
  />
  <header>
    <img src={logo} width={"200px"} />

    <nav>
      <ul>
        <li>
          <a href="./index.html">Home </a>{" "}
        </li>
        <li>
          <a href="./about.js">About </a>{" "}
        </li>
        <li>
          <a href="./login.js">Login </a>{" "}
        </li>
      </ul>
    </nav>
  </header>
  <section>
    <h1>Daftar Film terbaik</h1>
    <div id="article-list">
      <div className="article">
        <a href>
          <h3>Weathering with you</h3>
        </a>
       <div className="nilai">
       <b>
            <li>Ranting:8</li>
            <li>Durasi:114 menit</li>
            <li>Genre:fantasi</li>
        </b>
        </div>
        <div className="gambar"><img src={wyh} width={"250px"} /></div>

         <p>
          <b>Deskripsi</b>:Dolor Sit Amet, mea te verear signiferumque, per illum
          labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod
          deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut.
          Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
        </p>

      </div>
      <div className="article">
        <a href>
          <h3>Spidermen 3</h3>
        </a>
       <div className="nilai">
       <b>
            <li>Ranting:8</li>
            <li>Durasi:139 menit</li>
            <li>Genre:Action</li>
        </b>
        </div>
        <img src={spidermen3} width={"250px"} />
        <p>
          <b>Deskripsi</b>: Dolor Sit Amet, mea te verear signiferumque, per illum
          labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod
          deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut.
          Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
        </p>
      </div>
      <div className="article">
        <a href>
          <h3>Lorem Post 3</h3>
        </a>
       <div className="nilai">
       <b>
            <li>Ranting:8</li>
            <li>Durasi:181 menit</li>
            <li>Genre:Action</li>
        </b>
        </div>
        <img src={endgame} width={"250px"} />
        <p>
          <b>Deskripsi</b>:Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum
          labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod
          deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut.
          Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
        </p>
      </div>
     
    </div>
  </section>
  <footer>
    <h5>copyright © 2020 by Sanbercode</h5>
  </footer>
</div>


          );
      }
    }

export default index