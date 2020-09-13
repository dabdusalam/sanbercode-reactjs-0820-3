import React, {Component} from "react"
import contact from './contact';
import "./public/css/style.css" 
import logo from './public/img/logo.png';

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
          <a href="./about.html">About </a>{" "}
        </li>
        <li>
          <a href="./contact.js">Movie List Editor </a>{" "}
        </li>
      </ul>
    </nav>
  </header>
  <section>
    <h1>Featured Posts</h1>
    <div id="article-list">
      <div className="article">
        <a href>
          <h3>Lorem Post 1</h3>
        </a>
        <p>
          Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum
          labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod
          deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut.
          Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
        </p>
      </div>
      <div className="article">
        <a href>
          <h3>Lorem Post 2</h3>
        </a>
        <p>
          Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum
          labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod
          deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut.
          Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
        </p>
      </div>
      <div className="article">
        <a href>
          <h3>Lorem Post 3</h3>
        </a>
        <p>
          Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum
          labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod
          deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut.
          Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
        </p>
      </div>
      <div className="article">
        <a href>
          <h3>Lorem Post 4</h3>
        </a>
        <p>
          Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum
          labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod
          deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut.
          Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
        </p>
      </div>
      <div className="article">
        <a href>
          <h3>Lorem Post 5</h3>
        </a>
        <p>
          Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum
          labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod
          deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut.
          Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
        </p>
      </div>
      <div>
        <a href>
          <h3>Lorem Post 5</h3>
        </a>
        <p>
          Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum
          labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod
          deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut.
          Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
        </p>
      </div>
      <div>
        <a href>
          <h3>Lorem Post 5</h3>
        </a>
        <p>
          Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum
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