/* ==========================================================
   國軍 MDM V9.1 Ultra
   script.js
   Version 1.0
========================================================== */

"use strict";

/* ===========================
   DOM
=========================== */

const currentTime = document.getElementById("currentTime");
const iosVersion = document.getElementById("iosVersion");

/* ===========================
   民國時間
=========================== */

function formatMinguo(date){

    const year = date.getFullYear() - 1911;

    const month = String(date.getMonth()+1).padStart(2,"0");

    const day = String(date.getDate()).padStart(2,"0");

    const hour = String(date.getHours()).padStart(2,"0");

    const minute = String(date.getMinutes()).padStart(2,"0");

    const second = String(date.getSeconds()).padStart(2,"0");

    return `${year}/${month}/${day} ${hour}:${minute}:${second}`;

}