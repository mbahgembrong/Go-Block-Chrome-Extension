// import jquery
import $ from "jquery";
import "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

$(function () {
    $(".custom-dropdown").on("show.bs.dropdown", function () {
        var that = $(this);
        setTimeout(function () {
            that.find(".dropdown-menu").addClass("active");
        }, 100);
    });
    $(".custom-dropdown").on("hide.bs.dropdown", function () {
        $(this).find(".dropdown-menu").removeClass("active");
    });
});
