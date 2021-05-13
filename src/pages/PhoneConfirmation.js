import React, { useState } from "react";

import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom";

export default function PhoneConfirmation() {
	const [value, setValue] = useState();
	return (
		<div className={style.PhoneConfirmContainer}>
			<h1>Enter your phone</h1>
			<p>By entering your number, you're agreeing to our </p>
		</div>
	);
}
