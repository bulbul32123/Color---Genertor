const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 32;

const generatepalette = () =>{
    container.innerHTML = "" ;// clearing the container
    for( let i =0; i<maxPaletteBoxes ;i++ ){
        const element = Array[i]
        // generating a ramdom hex color code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
//creating a new "li" element and inserting it to the container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style ="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;
                           // adding click event to current li element to copy the color
                           color.addEventListener("click", () => copyColor(color,randomHex));
        container.appendChild(color);                   

    }
}
generatepalette();

const copyColor = (elem,hexVal) =>{
    const colorElement = elem.querySelector(".hex-value");
    //Copying the hex value, updaing the text to copied , 
    //and changing text back to original hex value after 1 second   
        navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexVal, 1000)
    }).catch(() => alert("Failed to copy the color code!"));//showing alert if color can't be copyied
}

refreshBtn.addEventListener("click", generatepalette);


