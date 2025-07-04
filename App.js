 /* // Here h1--> is object means heading is a object not a tag.
  //{} -> here we place attribute 
  const heading=React.createElement("h1",{id:heading,class:xyz},"Hello world");
  console.log(heading);
    // Here we create root and render the heading object into h1 tag 
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading); */


/* html <div id="parent"> 
 <div id="child"> 
 <h1>This is a head tag</h1>
 <h2>This my scind heading</h2>
 </div>
 </div> */
    
  const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
      [React.createElement("h1",{},"This is a head tag"),React.createElement("h1",{},"This is a head tag")]));
  console.log(parent);
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);