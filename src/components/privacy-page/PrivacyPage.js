import React, { useState, useEffect } from "react";
import "./privacy-page.scss";

function PrivacyPage() {
  const [privacyData, setPrivacyData] = useState([]);
  useEffect(() => {
    const url = "https://intellrocket.com/wp-json/wp/v2/pages/11772";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPrivacyData(data));
  }, []);

  const split = `<div class="pp-sm">`;
  const splitContent = privacyData.content?.rendered.split(split);

  const innerHtml = { __html: splitContent && splitContent[1] };

  return (
    <div id="privacy-page" className="container margin-b-100">
      <div className="row">
        <div className="col-12">
          <h1>Privacy Policy</h1>
          <p dangerouslySetInnerHTML={innerHtml}></p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPage;
