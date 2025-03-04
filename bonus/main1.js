const imgLampOff = document.getElementById('lamp-off');
const buttonOn = document.getElementById('button-on');

buttonOn.addEventListener('click', function () {
    if (imgLampOff.src.includes('white_lamp.png')) {
        imgLampOff.src = 'yellow_lamp.png';
        buttonOn.innerText ='SPEGNI'
        console.log("sono nell'if");
    } else {
        imgLampOff.src = 'white_lamp.png';
        buttonOn.innerText ='ACCENDI'
        console.log("sono nell'else");
    }
}
)