var homeelement;
var updateselement;
var contactuselement;
var aboutelement;

$(document).ready(function() {
    $(".homepage").show();
    $("#updatespage").hide();
    $(".contactuspage").hide();
    $(".aboutpage").hide();
    homeelement = document.getElementById("homeanchor");
  updateselement = document.getElementById("updatesanchor");
  contactuselement = document.getElementById("contactusanchor");
  aboutelement = document.getElementById("aboutanchor");
});
function homefunction() {
  debugger;
  
  homeelement.classList.remove("btn-primary");
  homeelement.classList.add("btn-success");
  updateselement.classList.remove("btn-success");
  updateselement.classList.add("btn-primary");
  contactuselement.classList.remove("btn-success");
    contactuselement.classList.add("btn-primary");
    aboutelement.classList.remove("btn-success");
    aboutelement.classList.add("btn-primary");
    $(".homepage").show();
    $("#updatespage").hide();
    $(".contactuspage").hide();
    $(".aboutpage").hide();
}
function updatesfunction(){
    debugger;

    updateselement.classList.remove("btn-primary");
    updateselement.classList.add("btn-success");
    homeelement.classList.remove("btn-success");
    homeelement.classList.add("btn-primary");
    contactuselement.classList.remove("btn-success");
    contactuselement.classList.add("btn-primary");
    aboutelement.classList.remove("btn-success");
    aboutelement.classList.add("btn-primary");
    $("#updatespage").show();
    $(".homepage").hide();
    $(".contactuspage").hide();
    $(".aboutpage").hide();
}


function contactusfunction(){
    debugger;

    contactuselement.classList.remove("btn-primary");
    contactuselement.classList.add("btn-success");
    homeelement.classList.remove("btn-success");
    homeelement.classList.add("btn-primary");
    updateselement.classList.remove("btn-success");
    updateselement.classList.add("btn-primary");
    aboutelement.classList.remove("btn-success");
    aboutelement.classList.add("btn-primary");
    $("#updatespage").hide();
    $(".homepage").hide();
    $(".contactuspage").show();
    $(".aboutpage").hide();
}

function aboutfunction(){
    debugger;

    aboutelement.classList.remove("btn-primary");
    aboutelement.classList.add("btn-success");
    homeelement.classList.remove("btn-success");
    homeelement.classList.add("btn-primary");
    updateselement.classList.remove("btn-success");
    updateselement.classList.add("btn-primary");
    contactuselement.classList.remove("btn-success");
    contactuselement.classList.add("btn-primary");
    $("#updatespage").hide();
    $(".homepage").hide();
    $(".contactuspage").hide();
    $(".aboutpage").show();
}
