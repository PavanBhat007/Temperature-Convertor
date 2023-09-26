// getting the 3 input fields
celsius = document.getElementById('celsius');
fahrenheit = document.getElementById('fahrenheit');
kelvin = document.getElementById('kelvin');

// clearing fields before user types
inputFields = [celsius, fahrenheit, kelvin]
inputFields.forEach( (element) => {
    element.addEventListener('click', () => {
        element.value = "";
    });
});

// DOM Manipulation functions
function cold() {
    document.body.style.backgroundColor = "rgba(0, 118, 253, 0.3)";
    document.body.style.color = "blue";
    document.getElementsByClassName('main-header')[0].style.color = "blue";
    inputs = document.getElementsByTagName('input');

    for(let i=0; i<inputs.length; i++) {
        inputs[i].style.backgroundColor = "rgba(0, 118, 253, 0.6)";
        inputs[i].style.boxShadow = "3px 3px 50px rgb(0, 94, 255)";
        inputs[i].style.color = "blue";
    }
}

function normal() {
    document.body.style.backgroundColor = "rgba(253, 105, 0, 0.552)";
    document.body.style.color = "rgb(123, 45, 0)";
    document.getElementsByClassName('main-header')[0].style.color = "rgb(123, 45, 0)";

    inputs = document.getElementsByTagName('input')
    for(let i=0; i<inputs.length; i++) {
        inputs[i].style.backgroundColor = "rgba(253, 118, 0, 0.657)";
        inputs[i].style.boxShadow = "3px 3px 50px rgb(255, 94, 0)";
        inputs[i].style.color = "rgb(123, 45, 0)";
    }
}

function hot() {
    document.body.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    document.body.style.color = "red";
    document.getElementsByClassName('main-header')[0].style.color = "red";

    inputs = document.getElementsByTagName('input')
    for(let i=0; i<inputs.length; i++) {
        inputs[i].style.backgroundColor = "rgba(255, 0, 0, 0.6)";
        inputs[i].style.boxShadow = "3px 3px 50px rgb(255, 0, 0)";
        inputs[i].style.color = "darkred";
    }
}


// dynamic typing & calculation
celsius.addEventListener('keyup', (e) => {
    let inp = celsius.value;

    // not allowing alphabets
    if(!(Number.isInteger(parseInt(e.key)) || e.key === '.' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Backspace')) {
        celsius.value = inp.substr(0, inp.length-1);
    } else {
        fahrenheitNum = ((parseInt(inp) * (9/5)) + 32).toFixed(2);
        kelvinNum = (parseInt(inp) + 273.15).toFixed(2);

        fahrenheit.value = fahrenheitNum + " °F";
        kelvin.value = kelvinNum + " K";

        // clearing field to prevent NaN values
        if(celsius.value === "") {
            fahrenheit.value = "";
            kelvin.value = "";
        }

        // DOM Manipulation calls
        if(celsius.value <= 10) cold();
        else if(celsius.value >= 40) hot();
        else normal();
    }
});


fahrenheit.addEventListener('keyup', (e) => {
    let inp = fahrenheit.value;

    if(!(Number.isInteger(parseInt(e.key)) || e.key === '.' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Backspace')) {
        fahrenheit.value = inp.substr(0, inp.length-1);
    } else {
        celsiusNum = ((parseInt(inp) - 32) * (5/9)).toFixed(2);
        kelvinNum = ((parseInt(inp) + 459.67) * (5/9)).toFixed(2);

        celsius.value = celsiusNum + " °C";
        kelvin.value = kelvinNum + " K";

        if(fahrenheit.value === "") {
            celsius.value = "";
            kelvin.value = "";
        }

        if(fahrenheit.value <= 50) cold();
        else if(fahrenheit.value >= 104) hot();
        else normal();
    }
});

kelvin.addEventListener('keyup', (e) => {
    let inp = kelvin.value;

    if(!(Number.isInteger(parseInt(e.key)) || e.key === '.' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Backspace')) {
        kelvin.value = inp.substr(0, inp.length-1);
    } else {
        fahrenheitNum = ((9/5) * (parseInt(inp) - 273) + 32).toFixed(2);
        celsiusNum = (parseInt(inp) - 273.15).toFixed(2);

        fahrenheit.value = fahrenheitNum + " °F";
        celsius.value = celsiusNum + " °C";

        if(kelvin.value === "") {
            fahrenheit.value = "";
            celsius.value = "";
        }

        if(kelvin.value <= 283.15) cold();
        else if(kelvin.value >= 313.15) hot();
        else normal();
    }
});