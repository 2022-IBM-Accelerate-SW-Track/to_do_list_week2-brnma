import React, { Component } from 'react';
import ProfilePicture from '../assets/profile_picture.png';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="split left">
            <div className="centered">
              <img
                className="profile_image"
                src={ProfilePicture}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Brian Mamani </div>
              <div className="brief_description">
                I'm a rising senior studying Computer Science at Virginia Tech.
                Born in Bolivia, I came to the U.S when I was 7 years old and
                have always enjoyed solving problems and orginially wanted to
                study mechanical engineering. I decided to study CS after
                automating a task by myself using python, I realized solving
                problmems via code was a really rewarding/fast process for the
                stuff I was working on.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
