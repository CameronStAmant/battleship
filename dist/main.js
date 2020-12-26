(()=>{var e={766:(e,t,r)=>{const a=r(643),n=r(887),i=(e,t,r,o,s,l=null,c=null)=>{let d=document.getElementById("content");d.innerHTML="";let u=document.createElement("div");u.innerHTML="Battleship",d.append(u);let m=document.createElement("div");m.className="main";let p=n(),h=[];h=null===c?[p.carrier,p.battleship,p.cruiser,p.submarine,p.destroyer]:c;const g=e=>{if(e.dataTransfer.setData("text/plain",e.target.id),e.dataTransfer.effectAllowed="move","vertical"===v)e.dataTransfer.setDragImage(e.path[0],25,25);else if("horizontal"===v){let t=document.createElement("img");t.src=`/src/images/${e.path[0].id}Horizontal.jpeg`,e.dataTransfer.setDragImage(t,10,10)}};d.append(m);let f=document.createElement("div");f.innerHTML="Player 1",f.className="playerOneBoard",m.append(f);let b=document.createElement("div");b.addEventListener("drop",(n=>{n.preventDefault();const l=n.dataTransfer.getData("text/plain");let c;if("horizontal"===v?c=e.deploy(a(`${l}`),`${n.toElement.id.substr(2)}`,"horizontal"):"vertical"===v&&(c=e.deploy(a(`${l}`),`${n.toElement.id.substr(2)}`,"vertical")),"Your deployment would go off the board"!==c&&"You cannot deploy on another ship."!==c){let a=[];for(let e=0;e<h.length;e++)h[e].id===l||a.push(h[e]);i(e,t,r,o,s,v,a)}})),b.addEventListener("dragover",(e=>{e.preventDefault(),e.dataTransfer.dropEffect="move"})),b.id="zone1",b.className="grid-container",f.append(b);let v,E=document.createElement("div");E.id="shipyard",f.append(E),v=null===l||"vertical"===l?"vertical":"horizontal";let y=document.createElement("button");E.append(y),y.innerHTML="rotate";for(let e=0;e<h.length;e++)E.append(h[e]);y.addEventListener("click",(function(){let e=document.getElementsByClassName("rotateMe");if("horizontal"===v){for(let t=0;t<e.length;t++)e[t].src=`/src/images/${e[t].id}Vertical.jpeg`,e[t].height="100";v="vertical"}else if("vertical"===v){for(let t=0;t<e.length;t++)e[t].src=`/src/images/${e[t].id}Horizontal.jpeg`,e[t].height="50";v="horizontal"}}));for(const[t,r]of Object.entries(e.board)){let e=document.createElement("div");e.id=`1-${t}`,e.className="grid-item",e.innerHTML="ship"===r?"X":"-",b.append(e)}let A=document.createElement("div");A.innerHTML="Player 2",A.className="playerTwoBoard",m.append(A);let z=document.createElement("ul");z.className="grid-container",A.appendChild(z);for(const[a,n]of Object.entries(t.board)){let i=document.createElement("div");i.id=`2-${a}`,i.className="grid-item","ship"===n?i.addEventListener("click",(function a(n){n.currentTarget.removeEventListener(n.type,a),i.innerHTML="X",i.style.backgroundColor="red",r.attackEnemy(i.id.substr(2),t),"Game over!"!==e.gameOver(t.board)&&"Game over!"!==t.gameOver(e.board)||location.reload();let s=document.getElementById(`1-${o.attackEnemy(null,e)}`);"X"===s.innerHTML?(s.style.backgroundColor="red","Game over!"!==e.gameOver(t.board)&&"Game over!"!==t.gameOver(e.board)||location.reload()):s.style.backgroundColor="green"})):i.addEventListener("click",(function a(n){n.currentTarget.removeEventListener(n.type,a),i.innerHTML="-",i.style.backgroundColor="green",r.attackEnemy(i.id.substr(2),t);let s=document.getElementById(`1-${o.attackEnemy(null,e)}`);"X"===s.innerHTML?(s.style.backgroundColor="red","Game over!"!==e.gameOver(t.board)&&"Game over!"!==t.gameOver(e.board)||location.reload()):s.style.backgroundColor="green"})),z.append(i)}const k=document.getElementById("carrier");null!==k&&k.addEventListener("dragstart",g);const B=document.getElementById("battleship");null!==B&&B.addEventListener("dragstart",g);const C=document.getElementById("cruiser");null!==C&&C.addEventListener("dragstart",g);const H=document.getElementById("submarine");null!==H&&H.addEventListener("dragstart",g);const I=document.getElementById("destroyer");return null!==I&&I.addEventListener("dragstart",g),{gameboard1:e}};e.exports=i},417:(e,t,r)=>{const a=r(507),n=r(498),i=r(643),o=r(766);e.exports=()=>{let e=n(),t=n(),r=[e.board,t.board],s=a(),l=a();return t.deploy(i("carrier"),"A1","horizontal"),t.deploy(i("battleship"),"A2","horizontal"),t.deploy(i("cruiser"),"A3","horizontal"),t.deploy(i("submarine"),"A4","horizontal"),t.deploy(i("destroyer"),"A5","horizontal"),o(e,t,s,l,!1),o(e,t,s,l,!1),{boards:r,player1:s,player2:l,gameboard1:e,gameboard2:t}}},498:e=>{e.exports=()=>{let e=[],t={A1:"",B1:"",C1:"",D1:"",E1:"",F1:"",G1:"",H1:"",I1:"",J1:"",A2:"",B2:"",C2:"",D2:"",E2:"",F2:"",G2:"",H2:"",I2:"",J2:"",A3:"",B3:"",C3:"",D3:"",E3:"",F3:"",G3:"",H3:"",I3:"",J3:"",A4:"",B4:"",C4:"",D4:"",E4:"",F4:"",G4:"",H4:"",I4:"",J4:"",A5:"",B5:"",C5:"",D5:"",E5:"",F5:"",G5:"",H5:"",I5:"",J5:"",A6:"",B6:"",C6:"",D6:"",E6:"",F6:"",G6:"",H6:"",I6:"",J6:"",A7:"",B7:"",C7:"",D7:"",E7:"",F7:"",G7:"",H7:"",I7:"",J7:"",A8:"",B8:"",C8:"",D8:"",E8:"",F8:"",G8:"",H8:"",I8:"",J8:"",A9:"",B9:"",C9:"",D9:"",E9:"",F9:"",G9:"",H9:"",I9:"",J9:"",A10:"",B10:"",C10:"",D10:"",E10:"",F10:"",G10:"",H10:"",I10:"",J10:""};const r=e=>{switch(e){case"offBoard":return"Your deployment would go off the board";case"onShip":return"You cannot deploy on another ship."}};return{board:t,deploy:(a,n,i)=>{let o=[];const s=r("offBoard"),l=r("onShip");if("horizontal"===i){const e="J";if(a.shipSize.length-1+n.charCodeAt(0)>e.charCodeAt(0))return s;for(let e=0;e<a.shipSize.length;e++)if(0===e){if("ship"===t[n])return l;o.push(n),a.shipSize[e]=n}else{const r=n.charCodeAt(0)+e;let i=String.fromCharCode(r)+n.substr(1);if("ship"===t[i])return l;o.push(i),a.shipSize[e]=i}}else if("vertical"===i){if(a.shipSize.length-1+parseInt(n.substring(1))>10)return s;for(let e=0;e<a.shipSize.length;e++){let r=n.charAt(0)+(parseInt(n.charAt(1))+e);if(0===e){if("ship"===t[n])return l;o.push(n),a.shipSize[e]=n}else{if("ship"===t[r])return l;o.push(r),a.shipSize[e]=r}}}for(let e=0;e<o.length;e++)t[o[e]]="ship";return e.push(a),t},receiveAttack:(r,a=!1)=>{if("ship"!==t[r])return t[r]="miss",!0===a?r:"Miss!";for(let n=0;n<e.length;n++)for(let i=0;i<e[n].shipSize.length;i++)if(e[n].shipSize[i]===r){if("sunk"===e[n].hit(i)){for(let r=0;r<e[n].shipSize.length;r++)t[e[n].shipSize[r].split("hit-sunk")[0]]="sunk";let i=[];for(const[e,r]of Object.entries(t))i.push(r);return i.every((e=>"ship"!==e))||!0===a?r:"sunk"}return t[r]="hit",!0===a?r:"Hit!"}},fleet:e,gameOver:e=>{let r=[];for(const[e,a]of Object.entries(t))r.push(a);if(r.every((e=>"ship"!==e)))return alert("GAME OVER"),"Game over!"}}}},507:e=>{e.exports=()=>({attackEnemy:(e,t)=>{if(null===e){let e=[];for(const[r,a]of Object.entries(t.board))"ship"!==a&&""!==a||e.push(r);const r=e[Math.floor(Math.random()*e.length)];return t.receiveAttack(r,!0)}return t.receiveAttack(e)}})},643:e=>{e.exports=e=>{let t;switch(e){case"carrier":t=5;break;case"battleship":t=4;break;case"cruiser":case"submarine":t=3;break;case"destroyer":t=2}const r=new Array(t),a=e;r.fill("");return{hit:e=>(r[e]=`${r[e]}hit`,r.every((e=>e.includes("hit")))?(()=>{for(let e=0;e<r.length;e++)r[e]+="-sunk";return"sunk"})():r),shipSize:r,name:a}}},887:e=>{e.exports=()=>{const e=document.createElement("img");e.src="/src/images/carrierVertical.jpeg",e.height="250",e.id="carrier",e.className="rotateMe",e.setAttribute("draggable","true");const t=document.createElement("img");t.src="/src/images/battleshipVertical.jpeg",t.height="200",t.id="battleship",t.className="rotateMe",t.setAttribute("draggable","true");const r=document.createElement("img");r.src="/src/images/cruiserVertical.jpeg",r.height="150",r.id="cruiser",r.className="rotateMe",r.setAttribute("draggable","true");const a=document.createElement("img");a.src="/src/images/submarineVertical.jpeg",a.height="150",a.id="submarine",a.className="rotateMe",a.setAttribute("draggable","true");const n=document.createElement("img");return n.src="/src/images/destroyerVertical.jpeg",n.height="100",n.id="destroyer",n.className="rotateMe",n.setAttribute("draggable","true"),{carrier:e,battleship:t,cruiser:r,submarine:a,destroyer:n}}}},t={};!function r(a){if(t[a])return t[a].exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}(417)()()})();