import React from "react";
import "./button.scss";

export default function Button({ name, label }) {
	return <button className={name}>{label}</button>;
}
