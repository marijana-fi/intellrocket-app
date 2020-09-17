import React, { useRef, useState, useEffect } from "react";

function Feature({ item, showFeature }) {
  const { title, list } = item;
  const [height, setHeight] = useState("0px");

  const featureRef = useRef();

  useEffect(() => {
    setHeight(showFeature ? `${featureRef.current?.scrollHeight}px` : "0px");
  }, [showFeature]);

  // const featureVisible = showFeature ? "show-feature" : "hide";
  return (
    <div className="feature-wrap" ref={featureRef} style={{ maxHeight: `${height}` }}>
      <h4 className="feature-name">{title}</h4>
      <ul className="feature-list">
        {list.map((el, i) => (
          <li key={i}>
            {el.checked ? (
              <img src="/intellrocket-app/img/maintenance/checkmark.png" alt="" />
            ) : (
              <img src="/intellrocket-app/img/pricing/unavailable.svg" alt="" />
            )}

            <p>{el.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feature;
