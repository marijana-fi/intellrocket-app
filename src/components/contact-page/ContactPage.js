import React, { useState } from "react";
import "./contact-page.scss";
import contactData from "./contactData";
import { Waypoint } from "react-waypoint";
import ContactForm from "../utils/form/ContactForm";
import SectionQuote from "../section-quote/SectionQuote";
import RevealTitle from "../utils/reveal-title/RevealTitle";
import RevealText from "../utils/reveal-text/RevealText";

function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  return (
    <>
      <section id="contact-page">
        <div className="container">
          <div className="row margin-b-100">
            <div className="col-12 col-lg-8 text-wrap">
              <RevealTitle
                tag="h1"
                title="We are here to help. Be free to
               contact us."
              />
              <RevealText
                tag="p"
                text="We are people like you. We are at your disposal if you want to make something modern,
               attractive or new. If you need someone to consult or talk to you."
              />
            </div>
            <Waypoint>
              <div className="col-12 col-md-8">
                <div className={isVisible ? "show" : "hidden"}>
                  <ContactForm/>
                  {/*<ContactForm btnLabel="Send" message="privacy" text="Message" />*/}
                </div>
              </div>
            </Waypoint>
            <Waypoint topOffset="200px" onEnter={() => setIsVisible(true)}>
              <div className="col-12 col-md-4 mb-5">
                <div className={isVisible ? "show" : "hidden"}>
                  <h3>Working Hours</h3>
                  <ul>
                    <li>Monday: 9.00 - 17.00h</li>
                    <li>Tuesday: 9.00 - 17.00h </li>
                    <li>Wednesday: 9.00 - 17.00h </li>
                    <li>Thursday: 9.00 - 17.00h</li>
                    <li>Friday: 9.00 - 17.00h</li>
                    <li>Saturday: Closed</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </Waypoint>
          </div>
          <Waypoint bottomOffset="200px" onEnter={() => setIsCardVisible(true)}>
            <div className={isCardVisible ? "show" : "hidden"}>
              <div className="row margin-b d-flex">
                {contactData.map((item, i) => {
                  return (
                    <div className="col-12 col-md-6 col-xl-4 mb-4" key={i}>
                      <div className="info-card d-flex flex-column align-items-center">
                        <img src={item.img} alt="" />
                        <p className="info-text">{item.info}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Waypoint>
        </div>
      </section>
      <SectionQuote/>
    </>
  );
}

export default ContactPage;
