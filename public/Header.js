window.onload = function() {
    var logo = document.createElement("img");
    logo.src = "./imgsrc/logo.jpg";
    document.getElementById("headLogo").appendChild(logo);
}

function openwindow(){
    var modal = document.getElementById('myModal');
    var ok=document.getElementsByClassName("ok")[0];
    var no=document.getElementsByClassName("no")[0];
    modal.style.display = "block";
    ok.onclick=function(){
        alert("Completed soon");
        modal.style.display = "none";
    }
    no.onclick=function(){
        modal.style.display = "none";
    }
}