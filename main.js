(()=>{var e={766:(e,t,r)=>{const n=r(643),a=(e,t,r,o,i)=>{let s=document.getElementById("content");s.innerHTML="";let l=document.createElement("div");l.innerHTML="Battleship",s.append(l);let d=document.createElement("div");d.className="main";const c=document.createElement("div");c.innerHTML=["X","X"],c.id="destroyer",c.setAttribute("draggable","true"),d.append(c);const p=e=>{e.dataTransfer.setData("text/plain",e.target.id),e.dataTransfer.effectAllowed="move"};window.addEventListener("DOMContentLoaded",(()=>{document.getElementById("destroyer").addEventListener("dragstart",p)})),s.append(d);let u=document.createElement("div");u.innerHTML="Player 1",u.className="playerOneBoard",d.append(u);let h=document.createElement("div");h.addEventListener("drop",(s=>{s.preventDefault();const l=s.dataTransfer.getData("text/plain");console.log(l),e.deploy(n(`${l}`),`${s.toElement.id.substr(2)}`,"horizontal"),a(e,t,r,o,i)})),h.addEventListener("dragover",(e=>{e.preventDefault(),e.dataTransfer.dropEffect="move"})),h.id="zone1",h.className="grid-container",u.append(h);for(const[t,r]of Object.entries(e.board)){let e=document.createElement("div");e.id=`1-${t}`,e.className="grid-item",e.innerHTML="ship"===r?"X":"-",h.append(e)}let m=document.createElement("div");m.innerHTML="Player 2",m.className="playerTwoBoard",d.append(m);let f=document.createElement("ul");f.className="grid-container",m.appendChild(f);for(const[n,a]of Object.entries(t.board)){let i=document.createElement("div");i.id=`2-${n}`,i.className="grid-item","ship"===a?i.addEventListener("click",(function n(a){a.currentTarget.removeEventListener(a.type,n),i.innerHTML="X",i.style.backgroundColor="red",r.attackEnemy(i.id.substr(2),t),"Game over!"!==e.gameOver(t.board)&&"Game over!"!==t.gameOver(e.board)||location.reload();let s=document.getElementById(`1-${o.attackEnemy(null,e)}`);"X"===s.innerHTML?(s.style.backgroundColor="red","Game over!"!==e.gameOver(t.board)&&"Game over!"!==t.gameOver(e.board)||location.reload()):s.style.backgroundColor="green"})):i.addEventListener("click",(function n(a){a.currentTarget.removeEventListener(a.type,n),i.innerHTML="-",i.style.backgroundColor="green",r.attackEnemy(i.id.substr(2),t);let s=document.getElementById(`1-${o.attackEnemy(null,e)}`);"X"===s.innerHTML?(s.style.backgroundColor="red","Game over!"!==e.gameOver(t.board)&&"Game over!"!==t.gameOver(e.board)||location.reload()):s.style.backgroundColor="green"})),f.append(i)}return{gameboard1:e}};e.exports=a},417:(e,t,r)=>{const n=r(507),a=r(498),o=r(643),i=r(766);e.exports=()=>{let e=a(),t=a(),r=[e.board,t.board],s=n(),l=n();return e.deploy(o("carrier"),"A1","vertical"),e.deploy(o("battleship"),"B1","vertical"),e.deploy(o("cruiser"),"C1","vertical"),e.deploy(o("submarine"),"D1","vertical"),e.deploy(o("destroyer"),"E1","vertical"),t.deploy(o("carrier"),"A1","horizontal"),t.deploy(o("battleship"),"A2","horizontal"),t.deploy(o("cruiser"),"A3","horizontal"),t.deploy(o("submarine"),"A4","horizontal"),t.deploy(o("destroyer"),"A5","horizontal"),i(e,t,s,l,!1),i(e,t,s,l,!1),{boards:r,player1:s,player2:l,gameboard1:e,gameboard2:t}}},498:e=>{e.exports=()=>{let e=[],t={A1:"",B1:"",C1:"",D1:"",E1:"",F1:"",G1:"",H1:"",I1:"",J1:"",A2:"",B2:"",C2:"",D2:"",E2:"",F2:"",G2:"",H2:"",I2:"",J2:"",A3:"",B3:"",C3:"",D3:"",E3:"",F3:"",G3:"",H3:"",I3:"",J3:"",A4:"",B4:"",C4:"",D4:"",E4:"",F4:"",G4:"",H4:"",I4:"",J4:"",A5:"",B5:"",C5:"",D5:"",E5:"",F5:"",G5:"",H5:"",I5:"",J5:"",A6:"",B6:"",C6:"",D6:"",E6:"",F6:"",G6:"",H6:"",I6:"",J6:"",A7:"",B7:"",C7:"",D7:"",E7:"",F7:"",G7:"",H7:"",I7:"",J7:"",A8:"",B8:"",C8:"",D8:"",E8:"",F8:"",G8:"",H8:"",I8:"",J8:"",A9:"",B9:"",C9:"",D9:"",E9:"",F9:"",G9:"",H9:"",I9:"",J9:"",A10:"",B10:"",C10:"",D10:"",E10:"",F10:"",G10:"",H10:"",I10:"",J10:""};const r=e=>{switch(e){case"offBoard":return"Your deployment would go off the board";case"onShip":return"You cannot deploy on another ship."}};return{board:t,deploy:(n,a,o)=>{let i=[];const s=r("offBoard"),l=r("onShip");if("horizontal"===o){const e="J";if(n.shipSize.length-1+a.charCodeAt(0)>e.charCodeAt(0))return s;for(let e=0;e<n.shipSize.length;e++)if(0===e){if("ship"===t[a])return l;i.push(a),n.shipSize[e]=a}else{const r=a.charCodeAt(0)+e;let o=String.fromCharCode(r)+a.substr(1);if("ship"===t[o])return l;i.push(o),n.shipSize[e]=o}}else if("vertical"===o){if(n.shipSize.length-1+parseInt(a.substring(1))>10)return s;for(let e=0;e<n.shipSize.length;e++){let r=a.charAt(0)+(parseInt(a.charAt(1))+e);if(0===e){if("ship"===t[a])return l;i.push(a),n.shipSize[e]=a}else{if("ship"===t[r])return l;i.push(r),n.shipSize[e]=r}}}for(let e=0;e<i.length;e++)t[i[e]]="ship";return e.push(n),t},receiveAttack:(r,n=!1)=>{if("ship"!==t[r])return t[r]="miss",r;for(let n=0;n<e.length;n++)for(let a=0;a<e[n].shipSize.length;a++)if(e[n].shipSize[a]===r){if("sunk"===e[n].hit(a)){for(let r=0;r<e[n].shipSize.length;r++)t[e[n].shipSize[r].split("hit-sunk")[0]]="sunk";let a=[];for(const[e,r]of Object.entries(t))a.push(r);return a.every((e=>"ship"!==e)),r}return t[r]="hit",r}},fleet:e,gameOver:e=>{let r=[];for(const[e,n]of Object.entries(t))r.push(n);if(r.every((e=>"ship"!==e)))return alert("GAME OVER"),"Game over!"}}}},507:e=>{e.exports=()=>({attackEnemy:(e,t)=>{if(null===e){let e=[];for(const[r,n]of Object.entries(t.board))"ship"!==n&&""!==n||e.push(r);const r=e[Math.floor(Math.random()*e.length)];return t.receiveAttack(r,!0)}return t.receiveAttack(e)}})},643:e=>{e.exports=e=>{let t;switch(e){case"carrier":t=5;break;case"battleship":t=4;break;case"cruiser":case"submarine":t=3;break;case"destroyer":t=2}const r=new Array(t),n=e;r.fill("");return{hit:e=>(r[e]=`${r[e]}hit`,r.every((e=>e.includes("hit")))?(()=>{for(let e=0;e<r.length;e++)r[e]+="-sunk";return"sunk"})():r),shipSize:r,name:n}}}},t={};!function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(417)()()})();