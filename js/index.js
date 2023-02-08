$(".myName").mouseenter(function () {
    $("#heroImage").removeClass("BWfilter");
    $("#heroImage").addClass("BWoff");
});
$(".myName").mouseleave(function () {
    $("#heroImage").removeClass("BWoff");
    $("#heroImage").addClass("BWfilter");
});