/**
<div id="section1">
	<div class="child">
		<h1>Hello </h1>
		<h2>World React Learn<h2>
	</div>
</div>
****/
import React from "react";
import ReactDOM from "react-dom/client";
var parenthtml = React.createElement("div",{id:"section1",key:"1"},React.createElement("div",{id:"child",key:2},
	[
		React.createElement("h1",{key:3},"Hello"),
		React.createElement("h1",{key:6},"World")

	])
);
var heading = React.createElement("h1",{"id":"heading1",key:"Namasate"},"Hello basic react example friend!!");
console.log(parenthtml);
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parenthtml);