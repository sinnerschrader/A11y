import button from "../src/patterns/atoms/button";

const mountPoint = document.getElementById("mount-point");

mountPoint.appendChild(
	button({
		className: "foo",
		children: "Click me",
		handleClick(e) {
			console.log(e);
		}
	})
);
