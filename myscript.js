$(document).ready(function() {
    $(".homepage").show();
    $("#updatespage").hide();
    $(".contactuspage").hide();
    $(".aboutpage").hide();
});
function homefunction() {
    $(".homepage").show();
    $("#updatespage").hide();
    $(".contactuspage").hide();
    $(".aboutpage").hide();
}
function updatesfunction(){
    debugger;
    $("#updatespage").show();
    $(".homepage").hide();
    $(".contactuspage").hide();
    $(".aboutpage").hide();
}

function updatesbackfunction(){
    $("#updatespage").hide();
    $(".homepage").show();
}

function contactusfunction(){
    $("#updatespage").hide();
    $(".homepage").hide();
    $(".contactuspage").show();
    $(".aboutpage").hide();
}
function contactusbackfunction(){
    $(".contactuspage").hide();
    $(".homepage").show();
}
function aboutfunction(){
    $("#updatespage").hide();
    $(".homepage").hide();
    $(".contactuspage").hide();
    $(".aboutpage").show();
}

function aboutbackfunction() {
    $(".aboutpage").hide();
    $(".homepage").show();
}
