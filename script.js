const API_URL="https://script.google.com/macros/s/AKfycbybaiARFIAaf3Z19sv5rW0ZoMuAuMcaZuzRZfZcp7BlZzXEreLvQeaV75yhKsd_EQnuAg/exec";


async function loadLeaderboard(){

const res=await fetch(API_URL);

const data=await res.json();


const tbody=document.querySelector("#leaderboard tbody");

tbody.innerHTML="";


data.forEach((team,index)=>{

let rankClass="";

if(index===0) rankClass="rank1";
if(index===1) rankClass="rank2";
if(index===2) rankClass="rank3";


const row=document.createElement("tr");

row.innerHTML=`

<td class="${rankClass}">#${index+1}</td>

<td>${team["TEAM NAME"]}</td>

<td>${team["MATCHES PLAYED"]}</td>

<td>${team["WWCD"]}</td>

<td>${team["FINISH POINTS"]}</td>

<td>${team["PLACEMENT POINTS"]}</td>

<td>${team["TOTAL POINTS"]}</td>

`;

tbody.appendChild(row);

});

}


loadLeaderboard();

/* LIVE UPDATE */

setInterval(loadLeaderboard,1000);