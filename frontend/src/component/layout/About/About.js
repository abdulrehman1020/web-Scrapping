import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  // const visitInstagram = () => {
  //   window.location = "https://www.instagram.com/__haris__baig__/";
  // };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res-console.cloudinary.com/haris8278/thumbnails/v1/image/upload/v1663869171/YXZhdGFycy9TY3JlZW5zaG90XzIwMjItMDgtMTZfMjExNzAwX215azVlYQ==/folder_thumbnail/d18xMTcsaF84OCxjX3RodW1i"
              alt="Founder"
            />
            <Typography>Trading</Typography>
            <Button color="primary">
              Visit Instagram
            </Button>
            <span>This is a Trading Wesbite Made By @......</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            {/* <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <GitHubIcon className="githubSvgIcon" /> */}
            {/* </a> */}

            <a href="/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
