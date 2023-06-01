function sketch() {
  let page = document.createElement("div");
  let sketchArea = document.createElement("div");

  let currSize = 100;
  let sizeP = pixelSize(currSize);
  let perCell = {
    display: "flex",
    flexDirection: "column",
    flexShrink: "0",
    height: sizeP,
    width: sizeP,
    margin: "0",
    padding: "0",
  };

  let rows = [];
  for (let size = 0; size < currSize; size++) {
    let row = document.createElement("div");
    rows.push(row);
    Object.assign(row.style, perCell);
    sketchArea.appendChild(row);
  }
  let colR = 0;

  let classNames = [];
  for (let col of rows) {
    for (let size = 0; size < currSize; size++) {
      let currCol = document.createElement("div");
      col.appendChild(currCol);
      currCol.classList.add(`hov${size}-${colR}`);

      classNames.push(`hov${size}-${colR}`)
      Object.assign(currCol.style, perCell);
    }
    colR += 1;
  }

  let sketchStyle = {
    display: "flex",
    height: "640px",
    width: "640px",
    display: "flex",
  };

  Object.assign(sketchArea.style, sketchStyle);
  page.appendChild(sketchArea);
  document.body.appendChild(page);

  let pageStyle = {
    display: "flex",
    flexDirection : "column",
    alignItems: "center",
    justifyContent: "center",
  };
  Object.assign(page.style, pageStyle);
  return classNames;
}

function addListenersForHov(classes){
  for(let val of classes){
    let currDiv = document.getElementsByClassName(val);
    currDiv[0].addEventListener('mouseover', (event) => currDiv[0].style.background = "black")
  }
}

function pixelSize(size){
  return ((640/size).toString()+'px')
}

function main() {
  let clasess = sketch();
  addListenersForHov(clasess);
}

main();
