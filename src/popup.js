"use strict";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./popup.css";
import $ from "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.min.js";

$(function () {
    // tab panel myTab in role tab jquery
    $("#myTab a").on("click", function (e) {
        e.preventDefault();
        // get href
        let href = $(this).attr("href");
        // href remove #
        href = href.replace("#", "");
        $("#myTab .nav-link").removeClass("active");
        $(this).addClass("active");
        $(".tab-pane").removeClass("active");
        $(".tab-pane").removeClass("show");
        $("#" + href).addClass("active");
        $("#" + href).addClass("show");
    });
});
// (function () {
//     // We will make use of Storage API to get and store `count` value
//     // More information on Storage API can we found at
//     // https://developer.chrome.com/extensions/storage

//     // To get storage access, we have to mention it in `permissions` property of manifest.json file
//     // More information on Permissions can we found at
//     // https://developer.chrome.com/extensions/declare_permissions
//     const counterStorage = {
//         get: cb => {
//             chrome.storage.sync.get(["count"], result => {
//                 cb(result.count);
//             });
//         },
//         set: (value, cb) => {
//             chrome.storage.sync.set(
//                 {
//                     count: value,
//                 },
//                 () => {
//                     cb();
//                 }
//             );
//         },
//     };

//     function setupCounter(initialValue = 0) {
//         document.getElementById("counter").innerHTML = initialValue;

//         document
//             .getElementById("incrementBtn")
//             .addEventListener("click", () => {
//                 updateCounter({
//                     type: "INCREMENT",
//                 });
//             });

//         document
//             .getElementById("decrementBtn")
//             .addEventListener("click", () => {
//                 updateCounter({
//                     type: "DECREMENT",
//                 });
//             });
//     }

//     function updateCounter({ type }) {
//         counterStorage.get(count => {
//             let newCount;

//             if (type === "INCREMENT") {
//                 newCount = count + 1;
//                 // print console
//                 console.log("newCount: " + newCount);
//             } else if (type === "DECREMENT") {
//                 newCount = count - 1;
//             } else {
//                 newCount = count;
//             }

//             counterStorage.set(newCount, () => {
//                 document.getElementById("counter").innerHTML = newCount;

//                 // Communicate with content script of
//                 // active tab by sending a message
//                 chrome.tabs.query(
//                     { active: true, currentWindow: true },
//                     tabs => {
//                         const tab = tabs[0];

//                         chrome.tabs.sendMessage(
//                             tab.id,
//                             {
//                                 type: "COUNT",
//                                 payload: {
//                                     count: newCount,
//                                 },
//                             },
//                             response => {
//                                 console.log(
//                                     "Current count value passed to contentScript file"
//                                 );
//                             }
//                         );
//                     }
//                 );
//             });
//         });
//     }

//     function restoreCounter() {
//         // Restore count value
//         counterStorage.get(count => {
//             if (typeof count === "undefined") {
//                 // Set counter value as 0
//                 counterStorage.set(0, () => {
//                     setupCounter(0);
//                 });
//             } else {
//                 setupCounter(count);
//             }
//         });
//     }

//     document.addEventListener("DOMContentLoaded", restoreCounter);

//     // Communicate with background file by sending a message
//     chrome.runtime.sendMessage(
//         {
//             type: "GREETINGS",
//             payload: {
//                 message: "Hello, my name is Pop. I am from Popup.",
//             },
//         },
//         response => {
//             console.log(response.message);
//         }
//     );
// })();
