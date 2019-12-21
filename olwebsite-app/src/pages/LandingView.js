import React from "react";

import CarouselWrapper from "../components/CarouselWrapper";

export default function LandingView() {
  /************************************
   * Render
   ************************************/

  return (
    <>
      <CarouselWrapper />
      <div className="landing-view-container">
        <div className="about-us-container">
          <h1 className="landing-view-header">About oneleif</h1>
          <div className="img-place-holder"></div>
          <p>
            oneleif is a project based group focused on learning and mentorship.
            Our core tenet of becoming skilled professionals is to work on open
            source projects. Open source simply means the work you are doing is
            available to the public. This comes with the benefit that anyone can
            help you on your project, and allows those without experience to see
            how something is made.
          </p>
          <br />
          <p>
            If you are looking to learn how to program, design, or even make
            music, oneleif is a community that thrives on helping others. If are
            already an expert, feel free to bring in a project of your own, or
            join an already active project. Let oneleif help you find a team
            based on your interests!
          </p>
        </div>
        <div className="join-us-container">
          <h1>Join Us Today!</h1>
          <p>
            Joining oneleif is available in a few forms. The main form of
            communication for oneleif members is through the discord
            application. You can download discord on your phone, computer, or
            tablet to get access. The second form of communication, that is most
            important for any open source developer is a version control system.
            oneleif uses GitHub for working as a team, click on the link below
            to check out our projects..
          </p>
          <ul>
            <li>
              <a href="https://discord.gg/tv9UdJK">
                <img
                  src="https://img.shields.io/badge/oneleif-Discord-7284be.svg"
                  alt="Join the Discord"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/oneleif">
                <img
                  src="https://img.shields.io/badge/GitHub-oneleif-255e33.svg"
                  alt="Check out our github"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
