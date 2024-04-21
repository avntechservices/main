var homeelement;
var updateselement;
var contactuselement;
var aboutelement;

$(document).ready(function() {
  $(".searchIcon").show();
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
  homeelement.classList.remove("btn-primary");
  homeelement.classList.add("btn-info");
  updateselement.classList.remove("btn-info");
  updateselement.classList.add("btn-primary");
  contactuselement.classList.remove("btn-info");
    contactuselement.classList.add("btn-primary");
    aboutelement.classList.remove("btn-info");
    aboutelement.classList.add("btn-primary");
    $(".homepage").show();
    $("#updatespage").hide();
    $(".contactuspage").hide();
    $(".aboutpage").hide();
    $(".nav").removeClass("openNav");
}
function updatesfunction(){

    updateselement.classList.remove("btn-primary");
    updateselement.classList.add("btn-info");
    homeelement.classList.remove("btn-info");
    homeelement.classList.add("btn-primary");
    contactuselement.classList.remove("btn-info");
    contactuselement.classList.add("btn-primary");
    aboutelement.classList.remove("btn-info");
    aboutelement.classList.add("btn-primary");
    $("#updatespage").show();
    $(".homepage").hide();
    $(".contactuspage").hide();
    $(".aboutpage").hide();
    $(".nav").removeClass("openNav");
}


function contactusfunction(){

    contactuselement.classList.remove("btn-primary");
    contactuselement.classList.add("btn-info");
    homeelement.classList.remove("btn-info");
    homeelement.classList.add("btn-primary");
    updateselement.classList.remove("btn-info");
    updateselement.classList.add("btn-primary");
    aboutelement.classList.remove("btn-info");
    aboutelement.classList.add("btn-primary");
    $("#updatespage").hide();
    $(".homepage").hide();
    $(".contactuspage").show();
    $(".aboutpage").hide();
    $(".nav").removeClass("openNav");
}

function aboutfunction(){

    aboutelement.classList.remove("btn-primary");
    aboutelement.classList.add("btn-info");
    homeelement.classList.remove("btn-info");
    homeelement.classList.add("btn-primary");
    updateselement.classList.remove("btn-info");
    updateselement.classList.add("btn-primary");
    contactuselement.classList.remove("btn-info");
    contactuselement.classList.add("btn-primary");
    $("#updatespage").hide();
    $(".homepage").hide();
    $(".contactuspage").hide();
    $(".aboutpage").show();
    $(".nav").removeClass("openNav");
}
