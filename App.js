/**
<div id="section1">
	<div class="child">
		<h1>Hello </h1>
		<h2>World React Learn<h2>
	</div>
</div>
****/
var parenthtml = React.createElement("div",{id:"section1"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hello"),React.createElement("h1",{},"World")]));
var heading = React.createElement("h1",{"id":"heading1","xyz":"Namasate"},"Hello basic react example friend!!");
console.log(parenthtml);
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parenthtml);