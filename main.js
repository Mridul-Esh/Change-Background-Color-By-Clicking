




window.onload = () => {
    Color ();
};


//select body and set a click event in button
function Color () {
    const root = document.getElementById("root");
    const btn = document.getElementById("changeBTN");
    const inputTag = document.getElementById("inputTag");

    btn.addEventListener("click", function() {
        let bgColor = createRGBColor();

        root.style.backgroundColor = bgColor;

        inputTag.value = bgColor;
    });
   
};

// create rgb color code
function createRGBColor () {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random () * 255);

    return ` rgb(${red}, ${green}, ${blue})`;
};