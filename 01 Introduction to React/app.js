const reacHeading = React.createElement(
    "h1", 
    {id: "heading"}, 
    "I'm Learning React..."
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reacHeading);


// creating this structure
/*
    <div class="parent">
        <div class="child">
            <h1 id="heading1">...</h1>
            <h3 id="heading3">...</h3>
        </div>
    </div>
*/
const child = React.createElement(
    "div", 
    {className: "child"}, 
    [
        React.createElement("h1", {id: "heading1"}, "Namaste React..."),
        React.createElement("h3", {id: "heading3"}, "(Generated Using React)."),
    ]
    
)

const parent = React.createElement(
    "div", 
    {className: "parent"},
    child
); 
root.render(parent);
