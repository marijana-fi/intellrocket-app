import React from "react";

function Feature({ item }) {
  const { title, list } = item;
  return (
    <div className="feature-wrap">
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
