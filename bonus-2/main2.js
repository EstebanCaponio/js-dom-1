const imgLampOff = document.getElementById('lamp-off');
const off = document.getElementById('button-off');
const on = document.getElementById('button-on');

if (imgLampOff.src.includes('white_lamp.png')) {
    console.log("off");
}

off.addEventListener('click', function () {
    if (imgLampOff.src.includes('yellow_lamp.png')) {
        imgLampOff.src = 'white_lamp.png';
        console.log("off");
    }
}
)

on.addEventListener('click', function () {
    if (imgLampOff.src.includes('white_lamp.png')) {
        imgLampOff.src = 'yellow_lamp.png';
        console.log("on");
    }
}

)