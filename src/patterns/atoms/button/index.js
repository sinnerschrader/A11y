const template = props => {
	const button = document.createElement("button");
	button.classList.add(...props.className.split(" "));
	button.innerHTML = props.children;
	button.addEventListener("click", props.handleClick);
	return button;
};

export default template;
