import React, { useContext } from "react";
import { BoxContainer } from "./common";
import "./ticket.css"
import { SignupForm } from "./signupForm";

export function Ticket({name}) {
    return (
      <BoxContainer>
          <div className="ticket">
            <div className="ticket-visual_visual" id="ticket">
              <div className="left"></div>
              <div className="right"></div>
              <div className="ticket-visual-wrapper">
                <div className="ticket-visual_profile">
                  <div className="ticket-profile_profile">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/000/550/980/small/user_icon_001.jpg"
                      alt="kkrishna007"
                      className="ticket-profile_image"
                    />
                    <div className="ticket-profile_text">
                      <p className="ticket-profile_name"></p>
                      <p className="ticket-profile_username">
                        <span className="ticket-profile_githubIcon">
                          <img src="./github.svg" alt="" />
                        </span>
                        kkrishna007
                      </p>
                    </div>
                  </div>
                  <div className="ticket-event">
                    <img src="./event-logos.png" width="200px"/>
                  </div>
                </div>
                <div className="ticket-visual_ticket-number-wrapper">
                  <div className="ticket-visual_ticket-number"><img src="./iecselogo.png" width="100px"/></div>
                </div>
              </div>
            </div>
          </div>
      </BoxContainer>
    );
  }