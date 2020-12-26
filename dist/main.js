(()=>{var e={766:(e,t,r)=>{const a=r(643),n=r(887),o=(e,t,r,i,s,l=null,c=null)=>{let d=document.getElementById("content");d.innerHTML="";let p=document.createElement("div");p.innerHTML="Battleship",d.append(p);let u=document.createElement("div");u.className="main";let m=n(),h=[];h=null===c?[m.carrier,m.battleship,m.cruiser,m.submarine,m.destroyer]:c;const g=e=>{e.dataTransfer.setData("text/plain",e.target.id),e.dataTransfer.effectAllowed="move","vertical"===v?e.dataTransfer.setDragImage(e.path[0],25,25):"horizontal"===v&&(e.path[0].src=`/src/images/${e.path[0].id}Horizontal.jpeg`,e.dataTransfer.setDragImage(e.path[0],25,25))};d.append(u);let f=document.createElement("div");f.innerHTML="Player 1",f.className="playerOneBoard",u.append(f);let b=document.createElement("div");b.addEventListener("drop",(n=>{n.preventDefault();const l=n.dataTransfer.getData("text/plain");let c;if("horizontal"===v?c=e.deploy(a(`${l}`),`${n.toElement.id.substr(2)}`,"horizontal"):"vertical"===v&&(c=e.deploy(a(`${l}`),`${n.toElement.id.substr(2)}`,"vertical")),"Your deployment would go off the board"!==c&&"You cannot deploy on another ship."!==c){let a=[];for(let e=0;e<h.length;e++)h[e].id===l||a.push(h[e]);o(e,t,r,i,s,v,a)}})),b.addEventListener("dragover",(e=>{e.preventDefault(),e.dataTransfer.dropEffect="move"})),b.id="zone1",b.className="grid-container",f.append(b);let v,y=document.createElement("div");y.id="shipyard",f.append(y),v=null===l||"vertical"===l?"vertical":"horizontal";let E=document.createElement("button");y.append(E);const k=document.createElement("p");y.append(k);const z=document.createElement("div");z.id="shipsDiv",y.append(z),E.innerHTML="rotate";for(let e=0;e<h.length;e++)if("horizontal"===v){const t=document.createElement("br");z.append(t),z.append(h[e])}else z.append(h[e]);E.addEventListener("click",(function(){let e=document.getElementsByClassName("rotateMe");if("horizontal"===v){z.innerHTML="";for(let e=0;e<h.length;e++)z.append(h[e]);for(let t=0;t<e.length;t++)switch(e[t].src=`/src/images/${e[t].id}Vertical.jpeg`,e[t].id){case"carrier":e[t].height="250";break;case"battleship":e[t].height="200";break;case"cruiser":case"submarine":e[t].height="150";break;case"destroyer":e[t].height="100"}v="vertical"}else if("vertical"===v){z.innerHTML="";for(let e=0;e<h.length;e++){const t=document.createElement("br");z.append(t),z.append(h[e])}for(let t=0;t<e.length;t++)e[t].src=`/src/images/${e[t].id}Horizontal.jpeg`,e[t].height="50",e[t].addEventListener("dragstart",g);v="horizontal"}}));for(const[t,r]of Object.entries(e.board)){let e=document.createElement("div");e.id=`1-${t}`,e.className="grid-item",e.innerHTML="ship"===r?"X":"-",b.append(e)}let A=document.createElement("div");A.innerHTML="Player 2",A.className="playerTwoBoard",null!==c&&0===c.length&&u.append(A);let C=document.createElement("ul");C.className="grid-container",A.appendChild(C);for(const[a,n]of Object.entries(t.board)){let o=document.createElement("div");o.id=`2-${a}`,o.className="grid-item","ship"===n?o.addEventListener("click",(function a(n){n.currentTarget.removeEventListener(n.type,a),o.innerHTML="X",o.style.backgroundColor="red",r.attackEnemy(o.id.substr(2),t),"Game over!"!==e.gameOver(t.board,"Player 1")&&"Game over!"!==t.gameOver(e.board,"Computer player")||location.reload();let s=document.getElementById(`1-${i.attackEnemy(null,e)}`);"X"===s.innerHTML?(s.style.backgroundColor="red","Game over!"!==e.gameOver(t.board,"Player 1")&&"Game over!"!==t.gameOver(e.board,"Computer player")||location.reload()):s.style.backgroundColor="green"})):o.addEventListener("click",(function a(n){n.currentTarget.removeEventListener(n.type,a),o.innerHTML="-",o.style.backgroundColor="green",r.attackEnemy(o.id.substr(2),t);let s=document.getElementById(`1-${i.attackEnemy(null,e)}`);"X"===s.innerHTML?(s.style.backgroundColor="red","Game over!"!==e.gameOver(t.board)&&"Game over!"!==t.gameOver(e.board)||location.reload()):s.style.backgroundColor="green"})),C.append(o)}const H=document.getElementById("carrier");null!==H&&H.addEventListener("dragstart",g);const L=document.getElementById("battleship");null!==L&&L.addEventListener("dragstart",g);const M=document.getElementById("cruiser");null!==M&&M.addEventListener("dragstart",g);const B=document.getElementById("submarine");null!==B&&B.addEventListener("dragstart",g);const I=document.getElementById("destroyer");return null!==I&&I.addEventListener("dragstart",g),{gameboard1:e}};e.exports=o},417:(e,t,r)=>{const a=r(507),n=r(498),o=r(643),i=r(766);e.exports=()=>{let e=n(),t=n(),r=[e.board,t.board],s=a(),l=a();return t.deploy(o("carrier"),"computer","computer"),t.deploy(o("battleship"),"computer","computer"),t.deploy(o("cruiser"),"computer","computer"),t.deploy(o("submarine"),"computer","computer"),t.deploy(o("destroyer"),"computer","computer"),i(e,t,s,l,!1),{boards:r,player1:s,player2:l,gameboard1:e,gameboard2:t}}},498:e=>{e.exports=()=>{let e=[],t={A1:"",B1:"",C1:"",D1:"",E1:"",F1:"",G1:"",H1:"",I1:"",J1:"",A2:"",B2:"",C2:"",D2:"",E2:"",F2:"",G2:"",H2:"",I2:"",J2:"",A3:"",B3:"",C3:"",D3:"",E3:"",F3:"",G3:"",H3:"",I3:"",J3:"",A4:"",B4:"",C4:"",D4:"",E4:"",F4:"",G4:"",H4:"",I4:"",J4:"",A5:"",B5:"",C5:"",D5:"",E5:"",F5:"",G5:"",H5:"",I5:"",J5:"",A6:"",B6:"",C6:"",D6:"",E6:"",F6:"",G6:"",H6:"",I6:"",J6:"",A7:"",B7:"",C7:"",D7:"",E7:"",F7:"",G7:"",H7:"",I7:"",J7:"",A8:"",B8:"",C8:"",D8:"",E8:"",F8:"",G8:"",H8:"",I8:"",J8:"",A9:"",B9:"",C9:"",D9:"",E9:"",F9:"",G9:"",H9:"",I9:"",J9:"",A10:"",B10:"",C10:"",D10:"",E10:"",F10:"",G10:"",H10:"",I10:"",J10:""},r=["vertical","horizontal"];const a=e=>{switch(e){case"offBoard":return"Your deployment would go off the board";case"onShip":return"You cannot deploy on another ship."}},n=(o,i,s)=>{let l=[];const c=a("offBoard"),d=a("onShip");if("computer"!==i||"computer"!==s){if("horizontal"===s){const e="J";if(o.shipSize.length-1+i.charCodeAt(0)>e.charCodeAt(0))return c;for(let e=0;e<o.shipSize.length;e++)if(0===e){if("ship"===t[i])return d;l.push(i),o.shipSize[e]=i}else{const r=i.charCodeAt(0)+e;let a=String.fromCharCode(r)+i.substr(1);if("ship"===t[a])return d;l.push(a),o.shipSize[e]=a}}else if("vertical"===s){if(o.shipSize.length-1+parseInt(i.substring(1))>10)return c;for(let e=0;e<o.shipSize.length;e++){let r=i.charAt(0)+(parseInt(i.charAt(1))+e);if(0===e){if("ship"===t[i])return d;l.push(i),o.shipSize[e]=i}else{if("ship"===t[r])return d;l.push(r),o.shipSize[e]=r}}}for(let e=0;e<l.length;e++)t[l[e]]="ship";return e.push(o),t}{let e=e=>{let t=Object.keys(e);return t[Math.floor(Math.random()*t.length)]},a=!1;for(;!1===a;){let i=r[Math.floor(Math.random()*r.length)],s=e(t),l=n(o,s,i);"Your deployment would go off the board"!==l&&"You cannot deploy on another ship."!==l&&(a=!0)}}};return{board:t,deploy:n,receiveAttack:(r,a=!1)=>{if("ship"!==t[r])return t[r]="miss",!0===a?r:"Miss!";for(let n=0;n<e.length;n++)for(let o=0;o<e[n].shipSize.length;o++)if(e[n].shipSize[o]===r){if("sunk"===e[n].hit(o)){for(let r=0;r<e[n].shipSize.length;r++)t[e[n].shipSize[r].split("hit-sunk")[0]]="sunk";let o=[];for(const[e,r]of Object.entries(t))o.push(r);return o.every((e=>"ship"!==e))||!0===a?r:"sunk"}return t[r]="hit",!0===a?r:"Hit!"}},fleet:e,gameOver:(e,t)=>{let r=[];for(const[t,a]of Object.entries(e))r.push(a);if(r.every((e=>"ship"!==e)))return alert(`${t} wins!`),"Game over!"}}}},507:e=>{e.exports=()=>({attackEnemy:(e,t)=>{if(null===e){let e=[];for(const[r,a]of Object.entries(t.board))"ship"!==a&&""!==a||e.push(r);const r=e[Math.floor(Math.random()*e.length)];return t.receiveAttack(r,!0)}return t.receiveAttack(e)}})},643:e=>{e.exports=e=>{let t;switch(e){case"carrier":t=5;break;case"battleship":t=4;break;case"cruiser":case"submarine":t=3;break;case"destroyer":t=2}const r=new Array(t),a=e;r.fill("");return{hit:e=>(r[e]=`${r[e]}hit`,r.every((e=>e.includes("hit")))?(()=>{for(let e=0;e<r.length;e++)r[e]+="-sunk";return"sunk"})():r),shipSize:r,name:a}}},887:e=>{e.exports=()=>{const e=document.createElement("img");e.src="images/carrierVertical.jpeg",e.height="250",e.id="carrier",e.className="rotateMe",e.setAttribute("draggable","true");const t=document.createElement("img");t.src="/src/images/battleshipVertical.jpeg",t.height="200",t.id="battleship",t.className="rotateMe",t.setAttribute("draggable","true");const r=document.createElement("img");r.src="/src/images/cruiserVertical.jpeg",r.height="150",r.id="cruiser",r.className="rotateMe",r.setAttribute("draggable","true");const a=document.createElement("img");a.src="/src/images/submarineVertical.jpeg",a.height="150",a.id="submarine",a.className="rotateMe",a.setAttribute("draggable","true");const n=document.createElement("img");return n.src="/src/images/destroyerVertical.jpeg",n.height="100",n.id="destroyer",n.className="rotateMe",n.setAttribute("draggable","true"),{carrier:e,battleship:t,cruiser:r,submarine:a,destroyer:n}}}},t={};!function r(a){if(t[a])return t[a].exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}(417)()()})();