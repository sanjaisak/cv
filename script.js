var key;
var boy;
var bog;
var a = 0;
var music1 = 0;
var b = 42;
boy = document.getElementById("boy");
bog = document.getElementById("bog");
boy.style.display = "none";
var ok = 0;
var myVar;

function getstart() {
    ok = 1;
    boy.style.display = "block";
    myVar = setInterval(ball, 25);
    document.getElementById("getbtn").style.display = "none";
}
x = window.screen.width * window.devicePixelRatio;
y = window.screen.height * window.devicePixelRatio;
console.log(x);

function ball() {

    a++;
    b++;
    boy.style.top = b + "vh";
    boy.style.left = a + "vh";

    if (a >= 32) {
        clearInterval(myVar);
    }
    if (music1 == 0) {
        var audio = new Audio('music.mp3');
        audio.play();
        audio.volume = 0.02;        music1 = 1;
    }
    document.getElementById("arrow").style.display = "block";
    document.getElementById("arrow1").style.display = "block";
}
document.addEventListener("keydown", function(event) {
    if (ok == 1) {
        key = event.which;
        if (key == 39) {
            document.getElementById("arrow").style.display = "none";
            document.getElementById("arrow1").style.display = "none";
            if (a < 0) {
                a = 0;
            }
            if (a >= 652) {
                a = 652;
            }
            if (a <= 30) {
                document.getElementById("home").style.transform = "skewY(" + (-5) + "deg)"; /* IE 9 */
                document.getElementById("home").style.transform = "skewX(" + (-5) + "deg)";
            } else if ((a > 30) && (a < 60)) {
                document.getElementById("home").style.transform = "skewY(" + (0) + "deg)"; /* IE 9 */
                document.getElementById("home").style.transform = "skewX(" + (0) + "deg)";
            } else if (a >= 60) {
                document.getElementById("home").style.transform = "skewY(" + (5) + "deg)"; /* IE 9 */
                document.getElementById("home").style.transform = "skewX(" + (5) + "deg)";
            }
            a++;
            a++;
            a++;
            if (a < 100) {
                boy.style.left = a + "vw";
                bog.style.transform = "rotate(" + (a * 20) + "deg)";
                document.getElementById("aboutdis").style.display = "none";
                document.getElementById("about").style.display = "none";
                document.getElementById("skils").style.display = "none";
                document.getElementById("awards").style.display = "none";
                document.getElementById("exposure").style.display = "none";
                document.getElementById("contact").style.display = "none";
            } else if (a >= 600) {
                boy.style.left = (a - 600) + "vw";
                bog.style.transform = "rotate(" + (a * 20) + "deg)";
                document.getElementById("home").style.display = "none";
                document.getElementById("post").style.display = "none";
                document.getElementById("start").style.display = "none";
                document.getElementById("about").style.display = "none";
                document.getElementById("aboutdis").style.display = "none";
                document.getElementById("skils").style.display = "none";
                document.getElementById("awards").style.display = "none";
                document.getElementById("exposure").style.display = "none";
                document.getElementById("contact").style.display = "block";
                document.getElementById("cert").style.display = "none";

            } else if (a >= 500) {
                boy.style.left = (a - 500) + "vw";
                bog.style.transform = "rotate(" + (a * 20) + "deg)";
                document.getElementById("home").style.display = "none";
                document.getElementById("post").style.display = "none";
                document.getElementById("start").style.display = "none";
                document.getElementById("about").style.display = "none";
                document.getElementById("aboutdis").style.display = "none";
                document.getElementById("skils").style.display = "none";
                document.getElementById("awards").style.display = "none";
                document.getElementById("exposure").style.display = "none";
                document.getElementById("contact").style.display = "none";
                document.getElementById("cert").style.display = "block";
            } else if (a >= 400) {
                boy.style.left = (a - 400) + "vw";
                bog.style.transform = "rotate(" + (a * 20) + "deg)";
                document.getElementById("home").style.display = "none";
                document.getElementById("post").style.display = "none";
                document.getElementById("start").style.display = "none";
                document.getElementById("about").style.display = "none";
                document.getElementById("aboutdis").style.display = "none";
                document.getElementById("skils").style.display = "none";
                document.getElementById("awards").style.display = "none";
                document.getElementById("exposure").style.display = "block";
                document.getElementById("contact").style.display = "none";
                document.getElementById("cert").style.display = "none";
            } else if (a >= 300) {
                boy.style.left = (a - 300) + "vw";
                bog.style.transform = "rotate(" + (a * 20) + "deg)";
                document.getElementById("home").style.display = "none";
                document.getElementById("post").style.display = "none";
                document.getElementById("start").style.display = "none";
                document.getElementById("about").style.display = "none";
                document.getElementById("aboutdis").style.display = "none";
                document.getElementById("skils").style.display = "none";
                document.getElementById("awards").style.display = "block";
                document.getElementById("exposure").style.display = "none";
                document.getElementById("contact").style.display = "none";
                document.getElementById("cert").style.display = "none";

            } else if (a >= 200) {
                boy.style.left = (a - 200) + "vw";
                bog.style.transform = "rotate(" + (a * 20) + "deg)";
                document.getElementById("home").style.display = "none";
                document.getElementById("post").style.display = "none";
                document.getElementById("start").style.display = "none";
                document.getElementById("about").style.display = "none";
                document.getElementById("aboutdis").style.display = "none";
                document.getElementById("skils").style.display = "block";
                document.getElementById("awards").style.display = "none";
                document.getElementById("exposure").style.display = "none";
                document.getElementById("contact").style.display = "none";
            } else if (a >= 100) {
                document.getElementById("home").style.display = "none";
                document.getElementById("post").style.display = "none";
                document.getElementById("start").style.display = "none";
                document.getElementById("about").style.display = "block";
                document.getElementById("aboutdis").style.display = "block";
                document.getElementById("skils").style.display = "none";
                document.getElementById("awards").style.display = "none";
                document.getElementById("exposure").style.display = "none";
                document.getElementById("contact").style.display = "none";
                document.getElementById("cert").style.display = "none";
                boy.style.left = (a - 100) + "vw";
                bog.style.transform = "rotate(" + (a * 20) + "deg)";
            } else {
                document.getElementById("home").style.display = "block";
                document.getElementById("post").style.display = "block";
                document.getElementById("start").style.display = "block";
                document.getElementById("about").style.display = "none";
                document.getElementById("aboutdis").style.display = "none";
                document.getElementById("skils").style.display = "none";
                document.getElementById("awards").style.display = "none";
                document.getElementById("exposure").style.display = "none";
                document.getElementById("contact").style.display = "none";
                document.getElementById("cert").style.display = "none";
            }
        }
        if (key == 37) {
            document.getElementById("arrow").style.display = "none";
            document.getElementById("arrow1").style.display = "none";
            a--;
            a--;
            a--;
            if (a < 0) {
                a = 0;
            }
            if (a >= 652) {
                a = 652;
            }
            if (a <= 30) {
                document.getElementById("home").style.transform = "skewY(" + (-5) + "deg)"; /* IE 9 */
                document.getElementById("home").style.transform = "skewX(" + (-5) + "deg)";
            } else if ((a > 30) && (a < 60)) {
                document.getElementById("home").style.transform = "skewY(" + (0) + "deg)"; /* IE 9 */
                document.getElementById("home").style.transform = "skewX(" + (0) + "deg)";
            } else if (a >= 60) {
                document.getElementById("home").style.transform = "skewY(" + (5) + "deg)"; /* IE 9 */
                document.getElementById("home").style.transform = "skewX(" + (5) + "deg)";
            }

            if (a < 100) {
                bog.style.transform = "rotate(" + (a * 20) + "deg)";
                boy.style.left = a + "vw";
                document.getElementById("home").style.display = "block";
                document.getElementById("post").style.display = "block";
                document.getElementById("start").style.display = "block";
                document.getElementById("about").style.display = "none";
                document.getElementById("aboutdis").style.display = "none";
                document.getElementById("skils").style.display = "none";
                document.getElementById("awards").style.display = "none";
                document.getElementById("exposure").style.display = "none";
                document.getElementById("contact").style.display = "none";
                document.getElementById("cert").style.display = "none";
            } else if (a >= 600) {
                boy.style.left = (a - 600) + "vw";
                bog.style.transform = "rotate(" + (a * 20) + "deg)";
                document.getElementById("home").style.display = "none";
                document.getElementById("post").style.display = "none";
                document.getElementById("start").style.display = "none";
                document.getElementById("about").style.display = "none";
                document.getElementById("aboutdis").style.display = "none";
                document.getElementById("skils").style.display = "none";
                document.getElementById("awards").style.display = "none";
                document.getElementById("exposure").style.display = "none";
                document.getElementById("contact").style.display = "block";
                document.getElementById("cert").style.display = "none";
            } else if (a >= 500) {
                boy.style.left = (a - 500) + "vw";
                bog.style.transform = "rotate(" + (a * 20) + "deg)";
                document.getElementById("home").style.display = "none";
                document.getElementById("post").style.display = "none";
                document.getElementById("start").style.display = "none";
                document.getElementById("about").style.display = "none";
                document.getElementById("aboutdis").style.display = "none";
                document.getElementById("skils").style.display = "none";
                document.getElementById("awards").style.display = "none";
                document.getElementById("exposure").style.display = "none";
                document.getElementById("contact").style.display = "none";
                document.getElementById("cert").style.display = "block";
            } else if (a >= 400) {
                boy.style.left = (a - 400) + "vw";
                bog.style.transform = "rotate(" + (a * 20) + "deg)";
                document.getElementById("home").style.display = "none";
                document.getElementById("post").style.display = "none";
                document.getElementById("start").style.display = "none";
                document.getElementById("about").style.display = "none";
                document.getElementById("aboutdis").style.display = "none";
                document.getElementById("skils").style.display = "none";
                document.getElementById("awards").style.display = "none";
                document.getElementById("exposure").style.display = "block";
                document.getElementById("contact").style.display = "none";
                document.getElementById("cert").style.display = "none";
            } else if (a >= 300) {
                boy.style.left = (a - 300) + "vw";
                bog.style.transform = "rotate(" + (a * 20) + "deg)";
                document.getElementById("home").style.display = "none";
                document.getElementById("post").style.display = "none";
                document.getElementById("start").style.display = "none";
                document.getElementById("about").style.display = "none";
                document.getElementById("aboutdis").style.display = "none";
                document.getElementById("skils").style.display = "none";
                document.getElementById("awards").style.display = "block";
                document.getElementById("exposure").style.display = "none";
                document.getElementById("contact").style.display = "none";
                document.getElementById("cert").style.display = "none";
            } else if (a >= 200) {
                boy.style.left = (a - 200) + "vw";
                bog.style.transform = "rotate(" + (a * 20) + "deg)";
                document.getElementById("home").style.display = "none";
                document.getElementById("post").style.display = "none";
                document.getElementById("start").style.display = "none";
                document.getElementById("about").style.display = "none";
                document.getElementById("aboutdis").style.display = "none";
                document.getElementById("skils").style.display = "block";
                document.getElementById("awards").style.display = "none";
                document.getElementById("exposure").style.display = "none";
                document.getElementById("contact").style.display = "none";
                document.getElementById("cert").style.display = "none";
            } else if (a >= 100) {
                boy.style.left = (a - 100) + "vw";
                bog.style.transform = "rotate(" + (a * 20) + "deg)";
                document.getElementById("home").style.display = "none";
                document.getElementById("post").style.display = "none";
                document.getElementById("start").style.display = "none";
                document.getElementById("about").style.display = "block";
                document.getElementById("aboutdis").style.display = "block";
                document.getElementById("skils").style.display = "none";
                document.getElementById("awards").style.display = "none";
                document.getElementById("exposure").style.display = "none";
                document.getElementById("contact").style.display = "none";
                document.getElementById("cert").style.display = "none";
            } else {
                document.getElementById("home").style.display = "block";
                document.getElementById("post").style.display = "block";
                document.getElementById("start").style.display = "block";
                document.getElementById("about").style.display = "none";
                document.getElementById("skils").style.display = "none";
                document.getElementById("aboutdis").style.display = "none";
                document.getElementById("awards").style.display = "none";
                document.getElementById("exposure").style.display = "none";
                document.getElementById("contact").style.display = "none";
                document.getElementById("cert").style.display = "none";
            }
        }
    }
})
var text = ["Front End Developer", "Designer","Foodie"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 1000);
const element = document.querySelector('.my-element');

function change() {
    Anima();


    counter++;
    if (counter >= text.length) {
        counter = 0;
        // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }

}

function Anima() {
    element.classList.add('animate__animated', 'animate__zoomIn');
    elem.innerHTML = text[counter];

}

function Animadown() {
    element.classList.remove('animate__animated', 'animate__zoomIn');
}
// function myFunction(e) {
//   var x = e.clientX;
//   var y = e.clientY;
//   var coor = "Coordinates: (" + x + "," + y + ")";
//  console.log(coor);
//  if(x<=600){
//  document.getElementById("home").style.transform="skewY("+(-10)+"deg)"; /* IE 9 */
//  document.getElementById("home").style.transform="skewX("+(-10)+"deg)";
//  }else  if(x>=900){
//   document.getElementById("home").style.transform="skewY("+(10)+"deg)"; /* IE 9 */
//   document.getElementById("home").style.transform="skewX("+(10)+"deg)";
//  }else  if((x>600)&&(x<900)){
//   document.getElementById("home").style.transform="skewY("+(0)+"deg)"; /* IE 9 */
//   document.getElementById("home").style.transform="skewX("+(0)+"deg)";
//  }
// }
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [ 'Type Script', 'Java Script', 'Angular','Nest Js', 'Ionic', 'Jest', 'Jenkins'],
        datasets: [{
            label: 'Skill Level',
            data: [90, 90, 90, 70, 60, 90, 60],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(155, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(155, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 100
                }
            }]
        }
    }
});


function left() {
    a--;
    a--;
    a--;
    if (a < 0) {
        a = 0;
    }
    if (a >= 592) {
        a = 592;
    }
    if (a <= 30) {
        document.getElementById("home").style.transform = "skewY(" + (-5) + "deg)"; /* IE 9 */
        document.getElementById("home").style.transform = "skewX(" + (-5) + "deg)";
    } else if ((a > 30) && (a < 60)) {
        document.getElementById("home").style.transform = "skewY(" + (0) + "deg)"; /* IE 9 */
        document.getElementById("home").style.transform = "skewX(" + (0) + "deg)";
    } else if (a >= 60) {
        document.getElementById("home").style.transform = "skewY(" + (5) + "deg)"; /* IE 9 */
        document.getElementById("home").style.transform = "skewX(" + (5) + "deg)";
    }

    if (a < 100) {
        bog.style.transform = "rotate(" + (a * 20) + "deg)";
        boy.style.left = a + "vw";
        document.getElementById("home").style.display = "block";
        document.getElementById("post").style.display = "block";
        document.getElementById("start").style.display = "block";
        document.getElementById("about").style.display = "none";
        document.getElementById("aboutdis").style.display = "none";
        document.getElementById("skils").style.display = "none";
        document.getElementById("awards").style.display = "none";
        document.getElementById("exposure").style.display = "none";
        document.getElementById("contact").style.display = "none";
    } else if (a >= 500) {
        boy.style.left = (a - 500) + "vw";
        bog.style.transform = "rotate(" + (a * 20) + "deg)";
        document.getElementById("home").style.display = "none";
        document.getElementById("post").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("aboutdis").style.display = "none";
        document.getElementById("skils").style.display = "none";
        document.getElementById("awards").style.display = "none";
        document.getElementById("exposure").style.display = "none";
        document.getElementById("contact").style.display = "block";
    } else if (a >= 400) {
        boy.style.left = (a - 400) + "vw";
        bog.style.transform = "rotate(" + (a * 20) + "deg)";
        document.getElementById("home").style.display = "none";
        document.getElementById("post").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("aboutdis").style.display = "none";
        document.getElementById("skils").style.display = "none";
        document.getElementById("awards").style.display = "none";
        document.getElementById("exposure").style.display = "block";
        document.getElementById("contact").style.display = "none";
    } else if (a >= 300) {
        boy.style.left = (a - 300) + "vw";
        bog.style.transform = "rotate(" + (a * 20) + "deg)";
        document.getElementById("home").style.display = "none";
        document.getElementById("post").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("aboutdis").style.display = "none";
        document.getElementById("skils").style.display = "none";
        document.getElementById("awards").style.display = "block";
        document.getElementById("exposure").style.display = "none";
        document.getElementById("contact").style.display = "none";
    } else if (a >= 200) {
        boy.style.left = (a - 200) + "vw";
        bog.style.transform = "rotate(" + (a * 20) + "deg)";
        document.getElementById("home").style.display = "none";
        document.getElementById("post").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("aboutdis").style.display = "none";
        document.getElementById("skils").style.display = "block";
        document.getElementById("awards").style.display = "none";
        document.getElementById("exposure").style.display = "none";
        document.getElementById("contact").style.display = "none";
    } else if (a >= 100) {
        boy.style.left = (a - 100) + "vw";
        bog.style.transform = "rotate(" + (a * 20) + "deg)";
        document.getElementById("home").style.display = "none";
        document.getElementById("post").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("about").style.display = "block";
        document.getElementById("aboutdis").style.display = "block";
        document.getElementById("skils").style.display = "none";
        document.getElementById("awards").style.display = "none";
        document.getElementById("exposure").style.display = "none";
        document.getElementById("contact").style.display = "none";
    } else {
        document.getElementById("home").style.display = "block";
        document.getElementById("post").style.display = "block";
        document.getElementById("start").style.display = "block";
        document.getElementById("about").style.display = "none";
        document.getElementById("skils").style.display = "none";
        document.getElementById("aboutdis").style.display = "none";
        document.getElementById("awards").style.display = "none";
        document.getElementById("exposure").style.display = "none";
        document.getElementById("contact").style.display = "none";
    }
}

function right() {
    if (a < 0) {
        a = 0;
    }
    if (a >= 592) {
        a = 592;
    }
    if (a <= 30) {
        document.getElementById("home").style.transform = "skewY(" + (-5) + "deg)"; /* IE 9 */
        document.getElementById("home").style.transform = "skewX(" + (-5) + "deg)";
    } else if ((a > 30) && (a < 60)) {
        document.getElementById("home").style.transform = "skewY(" + (0) + "deg)"; /* IE 9 */
        document.getElementById("home").style.transform = "skewX(" + (0) + "deg)";
    } else if (a >= 60) {
        document.getElementById("home").style.transform = "skewY(" + (5) + "deg)"; /* IE 9 */
        document.getElementById("home").style.transform = "skewX(" + (5) + "deg)";
    }
    a++;
    a++;
    a++;
    if (a < 100) {
        boy.style.left = a + "vw";
        bog.style.transform = "rotate(" + (a * 20) + "deg)";
        document.getElementById("aboutdis").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("skils").style.display = "none";
        document.getElementById("awards").style.display = "none";
        document.getElementById("exposure").style.display = "none";
        document.getElementById("contact").style.display = "none";
    } else if (a >= 500) {
        boy.style.left = (a - 500) + "vw";
        bog.style.transform = "rotate(" + (a * 20) + "deg)";
        document.getElementById("home").style.display = "none";
        document.getElementById("post").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("aboutdis").style.display = "none";
        document.getElementById("skils").style.display = "none";
        document.getElementById("awards").style.display = "none";
        document.getElementById("exposure").style.display = "none";
        document.getElementById("contact").style.display = "block";
    } else if (a >= 400) {
        boy.style.left = (a - 400) + "vw";
        bog.style.transform = "rotate(" + (a * 20) + "deg)";
        document.getElementById("home").style.display = "none";
        document.getElementById("post").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("aboutdis").style.display = "none";
        document.getElementById("skils").style.display = "none";
        document.getElementById("awards").style.display = "none";
        document.getElementById("exposure").style.display = "block";
        document.getElementById("contact").style.display = "none";
    } else if (a >= 300) {
        boy.style.left = (a - 300) + "vw";
        bog.style.transform = "rotate(" + (a * 20) + "deg)";
        document.getElementById("home").style.display = "none";
        document.getElementById("post").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("aboutdis").style.display = "none";
        document.getElementById("skils").style.display = "none";
        document.getElementById("awards").style.display = "block";
        document.getElementById("exposure").style.display = "none";
        document.getElementById("contact").style.display = "none";

    } else if (a >= 200) {
        boy.style.left = (a - 200) + "vw";
        bog.style.transform = "rotate(" + (a * 20) + "deg)";
        document.getElementById("home").style.display = "none";
        document.getElementById("post").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("aboutdis").style.display = "none";
        document.getElementById("skils").style.display = "block";
        document.getElementById("awards").style.display = "none";
        document.getElementById("exposure").style.display = "none";
        document.getElementById("contact").style.display = "none";
    } else if (a >= 100) {
        document.getElementById("home").style.display = "none";
        document.getElementById("post").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("about").style.display = "block";
        document.getElementById("aboutdis").style.display = "block";
        document.getElementById("skils").style.display = "none";
        document.getElementById("awards").style.display = "none";
        document.getElementById("exposure").style.display = "none";
        document.getElementById("contact").style.display = "none";
        boy.style.left = (a - 100) + "vw";
        bog.style.transform = "rotate(" + (a * 20) + "deg)";
    } else {
        document.getElementById("home").style.display = "block";
        document.getElementById("post").style.display = "block";
        document.getElementById("start").style.display = "block";
        document.getElementById("about").style.display = "none";
        document.getElementById("aboutdis").style.display = "none";
        document.getElementById("skils").style.display = "none";
        document.getElementById("awards").style.display = "none";
        document.getElementById("exposure").style.display = "none";
        document.getElementById("contact").style.display = "none";
    }

    if (document.getElementById('buttonright').clicked == true) {
        right();
    }

}
// var music1 =0;
function music() {


    // var myaudio = document.getElementById("audioID").autoplay = true;
    // if(music1 == 0){
    // var audio = new Audio('music.mp3');

    // audio.play();
    // music1=1;
}


// Javascript for image slider manual navigation

var url = ["https://abegroups.com", "https://sanjaisak.github.io/Baby-mointoring/", "https://sensonics2k21.github.io/eie/", "https://sanjaisak.github.io/CAM_check/", "https://sensonics2k21.github.io/eie/"];
var att = document.createAttribute("src");
var i1 = 0;
var repeater = () => {
    setTimeout(function() {
        att.value = url[i1];
        document.getElementById("website").setAttributeNode(att);

        i1++;
        if (i1 > 4) {
            i1 = 0;
        }

        if (x < 1000) {
            document.getElementById("game").style.display = "none";
        }


        repeater();
    }, 10000);
}
repeater();



if (x < 1100) {
    document.getElementById("game").style.display = "none";
    document.getElementById("mobile").style.display = "block";
    console.log('hi');
}