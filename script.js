var ms = document.getElementById("milliseconds");
var s = document.getElementById("seconds");
var m = document.getElementById("minutes");
var start = document.getElementById("start");
var reset = document.getElementById("reset");
var pause = document.getElementById("pause");
var circle = document.getElementById("circle");
var a = 0;
var b = 0;
var c = 0;

function clock(){
    start.addEventListener('click', function start(){
        go();
        let timerId = setInterval(go, 1000);
        timerId;
        changeBtn();
        pauseBtn(timerId);
    });
}

function pauseBtn(time){
    pause.addEventListener('click', function stop(){
        reset.classList.remove("hidden");
        start.classList.remove("hidden");
        pause.classList.add("hidden");
        circle.classList.add("hidden");
        clearInterval(time);
    });
}

function resetBtn(){
    reset.addEventListener('click', function(){
        clear();
        data = document.getElementById("data");
        data.innerHTML="";
    });
}

function clear(){
    ms.innerText = "00";
    s.innerText = "00";
    m.innerText = "00";
    a=0;
    b=0;
    c=0; 
}

function circleBtn(){
    circle.addEventListener('click', function(){
        data = document.getElementById("data");
        var ulList = document.createElement('ul');
        ulList.innerHTML = '<li>' + m.textContent + ':' +  s.textContent + ':' + ms.textContent + '</li>';
        data.appendChild(ulList);
        clear();
        a=0;
        b=0;
        c=0;             
    });
}

function go(){
    countMs(c, 99);
}

function countMs(start, end){
    function milliseconds(){
        test(ms, start);
        if(start == end){
            countS();
            countM();
            clearInterval(time);
        }
        start++;
    }
    milliseconds();
    let time = setInterval(milliseconds, 10);
    pauseBtn(time);
}

function countS(){
    if(ms.textContent == 99){
        a++;
        test(s, a);
    }
}

function countM(){
    if(s.textContent == 60){
        b++;
        test(m, b);
        s.innerText = "00";
        a = 0;
    }
}

function changeBtn(){
    reset.classList.add("hidden");
    start.classList.add("hidden");
    pause.classList.remove("hidden");
    circle.classList.remove("hidden");
}

function test(number, num){
    if(number.textContent < 9){
        number.innerText = "0" + num;
    } else {
        number.innerText = num;
    }
}

clock();
resetBtn();
circleBtn();