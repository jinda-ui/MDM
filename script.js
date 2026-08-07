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
/* ===========================
   即時時間
=========================== */

function updateClock(){

    const now = new Date();

    currentTime.textContent = formatMinguo(now);

}

updateClock();

setInterval(updateClock,1000);


/* ==========================================================
   DOM
========================================================== */

const statusSection = document.getElementById("statusSection");

const endTimeSection = document.getElementById("endTimeSection");

const pageTitle = document.getElementById("pageTitle");

const statusText = document.getElementById("statusText");

const endTimeValue = document.getElementById("endTimeValue");

const serialNumber = document.getElementById("serialNumber");

const lockTime = document.getElementById("lockTime");

const profileVersion = document.getElementById("profileVersion");

const violationSection = document.getElementById("violationSection");

const violationItems = document.getElementById("violationItems");

/* ==========================================================
   套用設定
========================================================== */

function loadConfig(){

    pageTitle.textContent = CONFIG.title;
    
    statusText.textContent = CONFIG.status;

    endTimeValue.textContent = CONFIG.endTime;

    serialNumber.textContent = CONFIG.serial;

    lockTime.textContent = CONFIG.lockTime;

    profileVersion.textContent = CONFIG.profile;

    iosVersion.textContent = `iOS:${CONFIG.iosVersion}`;

}

loadConfig();

/* ==========================================================
   模式切換
========================================================== */

function updateMode(){

    if(CONFIG.mode === "mission"){

        statusSection.classList.add("hidden");
        endTimeSection.classList.remove("hidden");

    }else{

        // 一般模式
        statusSection.classList.add("hidden");
        endTimeSection.classList.add("hidden");

    }

}

updateMode();
