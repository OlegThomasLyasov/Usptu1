
document.getElementById('btn1').onclick = function() {
    const el = document.getElementById('first-block');
     el.scrollIntoView({behavior: "smooth"});
}
document.getElementById('btn2').onclick = function() {
    const el = document.getElementById('second-block');
     el.scrollIntoView({behavior: "smooth"});
}
document.getElementById('btn3').onclick = function() {
    const el = document.getElementById('third-block');
     el.scrollIntoView({behavior: "smooth"});
}