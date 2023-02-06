document.getElementById('btn1').onclick = function() {
    const el = document.getElementById('first-block');
     el.scrollIntoView({behavior: "smooth", block:"center"});
}
document.getElementById('btn2').onclick = function() {
    const el = document.getElementById('second-block');
     el.scrollIntoView({behavior: "smooth", block:"center"});
}
document.getElementById('btn3').onclick = function() {
    const el = document.getElementById('third-block');
     el.scrollIntoView({behavior: "smooth", block:"center"});
}
document.getElementById('btn4').onclick = function() {
    const el = document.getElementById('forth-block');
     el.scrollIntoView({behavior: "smooth", block:"center"});
}
document.getElementById('btn5').onclick = function() {
    const el = document.getElementById('fifth-block');
     el.scrollIntoView({behavior: "smooth", block:"center"});
}
$(".btnList1").click(function(){
    $(".list1").toggle('show')
    document.getElementsByClassName("btnList1")[0].style.display='none'
    //document.getElementsByClassName("btnList3")[0].style.display='inline-block'
    //$(".btnList1").toggle('hidden')
    $(".btnList3").toggle('show')
})
$(".btnList2").click(function(){
    $(".list2").toggle('show')
    document.getElementsByClassName("btnList2")[0].style.display='none'
    //document.getElementsByClassName("btnList4")[0].style.display='inline-block'
    //$(".btnList2").toggle('hidden')
    $(".btnList4").toggle('show')
})
$(".btnList3").click(function(){
    $(".list1").toggle('hidden')
    //document.getElementsByClassName("btnList3")[0].style.display='none'
    //document.getElementsByClassName("btnList1")[0].style.display='inline-block'
    $(".btnList3").toggle('hidden')
    $(".btnList1").toggle('show')
})
$(".btnList4").click(function(){
    $(".list2").toggle('hidden')
    //document.getElementsByClassName("btnList4")[0].style.display='none'
    //document.getElementsByClassName("btnList2")[0].style.display='inline-block'
    $(".btnList4").toggle('hidden')
    $(".btnList2").toggle('show')
})