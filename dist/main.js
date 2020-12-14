(()=>{var e={417:(e,t,r)=>{const n=r(507),i=r(498),o=r(643);e.exports=()=>{let e=i(),t=i(),r=[e.board,t.board],a=n(),l=n();return e.deploy(o("carrier"),"A1","horizontal"),e.deploy(o("battleship"),"A2","horizontal"),e.deploy(o("cruiser"),"A3","horizontal"),e.deploy(o("submarine"),"A4","horizontal"),e.deploy(o("destroyer"),"A5","horizontal"),t.deploy(o("carrier"),"A1","vertical"),t.deploy(o("battleship"),"B1","vertical"),t.deploy(o("cruiser"),"C1","vertical"),t.deploy(o("submarine"),"D1","vertical"),t.deploy(o("destroyer"),"E1","vertical"),(()=>{let r=document.getElementById("content"),n=document.createElement("div");n.innerHTML="Battleship",r.append(n);let i=document.createElement("div");i.className="main",r.append(i);let o=document.createElement("div");o.innerHTML="Player 1",o.class="playerOneBoard",i.append(o);let s=document.createElement("ul");s.className="grid-container",o.append(s);for(const[t,r]of Object.entries(e.board)){let e=document.createElement("div");e.id=`1-${t}`,e.className="grid-item","ship"===r?(e.innerHTML="X",e.addEventListener("click",(function(t){e.style.backgroundColor="red"}))):(e.innerHTML="-",e.addEventListener("click",(function(t){e.style.backgroundColor="green"}))),s.append(e)}let c=document.createElement("div");c.innerHTML="Player 2",c.class="playerTwoBoard",i.append(c);let d=document.createElement("ul");d.className="grid-container",c.appendChild(d);for(const[r,n]of Object.entries(t.board)){let i=document.createElement("div");i.id=`2-${r}`,i.className="grid-item","ship"===n?i.addEventListener("click",(function(r){i.innerHTML="X",i.style.backgroundColor="red",a.attackEnemy(i,t),document.getElementById(`1-${l.attackEnemy(null,e)}`).click()})):i.addEventListener("click",(function(r){i.innerHTML="-",i.style.backgroundColor="green",a.attackEnemy(i,t),document.getElementById(`1-${l.attackEnemy(null,e)}`).click()})),d.append(i)}})(),{boards:r,player1:a,player2:l,gameboard1:e,gameboard2:t}}},498:e=>{e.exports=()=>{let e=[],t={A1:"",A2:"",A3:"",A4:"",A5:"",A6:"",A7:"",A8:"",A9:"",A10:"",B1:"",B2:"",B3:"",B4:"",B5:"",B6:"",B7:"",B8:"",B9:"",B10:"",C1:"",C2:"",C3:"",C4:"",C5:"",C6:"",C7:"",C8:"",C9:"",C10:"",D1:"",D2:"",D3:"",D4:"",D5:"",D6:"",D7:"",D8:"",D9:"",D10:"",E1:"",E2:"",E3:"",E4:"",E5:"",E6:"",E7:"",E8:"",E9:"",E10:"",F1:"",F2:"",F3:"",F4:"",F5:"",F6:"",F7:"",F8:"",F9:"",F10:"",G1:"",G2:"",G3:"",G4:"",G5:"",G6:"",G7:"",G8:"",G9:"",G10:"",H1:"",H2:"",H3:"",H4:"",H5:"",H6:"",H7:"",H8:"",H9:"",H10:"",I1:"",I2:"",I3:"",I4:"",I5:"",I6:"",I7:"",I8:"",I9:"",I10:"",J1:"",J2:"",J3:"",J4:"",J5:"",J6:"",J7:"",J8:"",J9:"",J10:""};const r=e=>{switch(e){case"offBoard":return"Your deployment would go off the board";case"onShip":return"You cannot deploy on another ship."}};return{board:t,deploy:(n,i,o)=>{let a=[];const l=r("offBoard"),s=r("onShip");if("vertical"===o){if(n.shipSize.length-1+parseInt(i.substring(1))>10)return l;for(let e=0;e<n.shipSize.length;e++){let r=i.charAt(0)+(parseInt(i.charAt(1))+e);if(0===e){if("ship"===t[i])return s;a.push(i),n.shipSize[e]=i}else{if("ship"===t[r])return s;a.push(r),n.shipSize[e]=r}}}else if("horizontal"===o){const e="J";if(n.shipSize.length-1+i.charCodeAt(0)>e.charCodeAt(0))return l;for(let e=0;e<n.shipSize.length;e++)if(0===e){if("ship"===t[i])return s;a.push(i),n.shipSize[e]=i}else{const r=i.charCodeAt(0)+e;let o=String.fromCharCode(r)+i.charAt(1);if("ship"===t[o])return s;a.push(o),n.shipSize[e]=o}}for(let e=0;e<a.length;e++)t[a[e]]="ship";return e.push(n),t},receiveAttack:(r,n=!1)=>{if("ship"!==t[r])return t[r]="miss",r;for(let n=0;n<e.length;n++)for(let i=0;i<e[n].shipSize.length;i++)if(e[n].shipSize[i]===r){if("sunk"===e[n].hit(i)){for(let r=0;r<e[n].shipSize.length;r++)t[e[n].shipSize[r].split("hit-sunk")[0]]="sunk";let r=[];for(const[e,n]of Object.entries(t))r.push(n);return r.every((e=>""===e||"sunk"===e))?"Game over!":"sunk"}return t[r]="hit",r}},fleet:e}}},507:e=>{e.exports=()=>({attackEnemy:(e,t)=>{if(null===e){let e=[];for(const[r,n]of Object.entries(t.board))"ship"!==n&&""!==n||e.push(r);const r=e[Math.floor(Math.random()*e.length)];return t.receiveAttack(r,!0)}return t.receiveAttack(e)}})},643:e=>{e.exports=e=>{let t;switch(e){case"carrier":t=5;break;case"battleship":t=4;break;case"cruiser":case"submarine":t=3;break;case"destroyer":t=2}const r=new Array(t),n=e;r.fill("");return{hit:e=>(r[e]=`${r[e]}hit`,r.every((e=>e.includes("hit")))?(()=>{for(let e=0;e<r.length;e++)r[e]+="-sunk";return"sunk"})():r),shipSize:r,name:n}}}},t={};!function r(n){if(t[n])return t[n].exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}(417)()()})();