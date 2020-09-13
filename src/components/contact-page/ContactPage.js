import React, { useState } from "react";
import "./contact-page.scss";
import contactData from "./contactData";
import { Waypoint } from "react-waypoint";
import ContactForm from "../utils/form/ContactForm";
import SectionQuote from "../section-quote/SectionQuote";
import RevealTitle from "../utils/reveal-title/RevealTitle";
import RevealText from "../utils/reveal-text/RevealText";
import InfoCard from "../utils/info-card/InfoCard";

function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
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
            <Waypoint bottomOffset="20%" onEnter={() => setIsVisible(true)}>
              <div className="col-12 col-md-8">
                <div className={isVisible ? "show" : "hidden"}>
                  <ContactForm btnLabel="Send" message="privacy" text="Message" />
                </div>
              </div>
            </Waypoint>
            <Waypoint>
              <div className="col-12 col-md-4 mb-5 mb-md-0">
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

          <div className="row margin-b d-flex">
            {contactData.map((item, i) => {
              return <InfoCard item={item} key={i} />;
            })}
          </div>
        </div>
      </section>
      <SectionQuote />
    </>
  );
}

export default ContactPage;
