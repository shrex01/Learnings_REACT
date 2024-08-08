// the 2nd arguement object in createElement is used to give attributes to the tag
// 3rd arguement is children
const heading = React.createElement("h1", { id: "heading", xyz: "aqeadad" }, "Hello World");
//create element is a react object that is using the props and children that are passed above

console.log('heading:', heading) //consoles an object that has all the props, children etc.
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)


// react elements are objects that the browser understands

{/* <div id="parent">
    <div id="child">
        <h1 id="h1Tag">im h1 tag</h1>
        <h2 id="h2Tag">im h2 tag</h2>
    </div>
</div> */}

const parent = React.createElement(
    "div",
    { id: "parent" }, 
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {id:"h1Tag"}, "IM A H1 TAG") , React.createElement("h2", {id:"h2Tag"}, "IM A H2 TAG")]));
console.log('parent:', parent)
const root1 = ReactDOM.createRoot(document.getElementById("root1"))
root1.render(parent)
