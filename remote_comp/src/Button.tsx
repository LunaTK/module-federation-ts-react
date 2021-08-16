import * as React from "react";

type ButtonProps = {
	name: string;
};

const Button: React.FC<ButtonProps> = (props) => <button>Hi, {props.name}</button>;

export default Button;

