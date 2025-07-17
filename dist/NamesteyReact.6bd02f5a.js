impo;
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "This is a head tag"),
    React.createElement("h1", {}, "This is a head tag")
]));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=NamesteyReact.6bd02f5a.js.map
