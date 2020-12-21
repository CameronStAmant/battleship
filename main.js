(()=>{var e={766:e=>{e.exports=(e,t,r,n,a)=>{let o=document.getElementById("content");o.innerHTML="";let i=document.createElement("div");i.innerHTML="Battleship",o.append(i);let l=document.createElement("div");l.className="main";let s=document.createElement("form"),c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("name","Carrier"),c.setAttribute("placeholder","Carrier");let d=document.createElement("input");d.setAttribute("type","radio"),d.setAttribute("value","vertical"),d.setAttribute("name","vertical");let p=document.createElement("label");p.innerHTML="Vertical";let u=document.createElement("button");u.id="deploy1",u.innerHTML="Deploy",p.append(u),s.append(c),s.append(d),s.append(p),o.append(s),o.append(l);let h=document.createElement("div");h.innerHTML="Player 1",h.class="playerOneBoard",l.append(h);let m=document.createElement("ul");m.className="grid-container",h.append(m);for(const[t,r]of Object.entries(e.board)){let e=document.createElement("div");e.id=`1-${t}`,e.className="grid-item",e.innerHTML="ship"===r?"X":"-",m.append(e)}let f=document.createElement("div");f.innerHTML="Player 2",f.class="playerTwoBoard",l.append(f);let b=document.createElement("ul");b.className="grid-container",f.appendChild(b);for(const[a,o]of Object.entries(t.board)){let i=document.createElement("div");i.id=`2-${a}`,i.className="grid-item","ship"===o?i.addEventListener("click",(function a(o){o.currentTarget.removeEventListener(o.type,a),i.innerHTML="X",i.style.backgroundColor="red",r.attackEnemy(i.id.substr(2),t),"Game over!"!==e.gameOver(t.board)&&"Game over!"!==t.gameOver(e.board)||location.reload();let l=document.getElementById(`1-${n.attackEnemy(null,e)}`);"X"===l.innerHTML?(l.style.backgroundColor="red","Game over!"!==e.gameOver(t.board)&&"Game over!"!==t.gameOver(e.board)||location.reload()):l.style.backgroundColor="green"})):i.addEventListener("click",(function a(o){o.currentTarget.removeEventListener(o.type,a),i.innerHTML="-",i.style.backgroundColor="green",r.attackEnemy(i.id.substr(2),t);let l=document.getElementById(`1-${n.attackEnemy(null,e)}`);"X"===l.innerHTML?(l.style.backgroundColor="red","Game over!"!==e.gameOver(t.board)&&"Game over!"!==t.gameOver(e.board)||location.reload()):l.style.backgroundColor="green"})),b.append(i)}return{}}},417:(e,t,r)=>{const n=r(507),a=r(498),o=r(643),i=r(766);e.exports=()=>{let e=a(),t=a(),r=[e.board,t.board],l=n(),s=n();return t.deploy(o("carrier"),"A1","horizontal"),t.deploy(o("battleship"),"A2","horizontal"),t.deploy(o("cruiser"),"A3","horizontal"),t.deploy(o("submarine"),"A4","horizontal"),t.deploy(o("destroyer"),"A5","horizontal"),i(e,t,l,s,!1),document.getElementById("deploy1").addEventListener("click",(e=>{e.preventDefault(),alert("hello")})),i(e,t,l,s,!1),{boards:r,player1:l,player2:s,gameboard1:e,gameboard2:t}}},498:e=>{e.exports=()=>{let e=[],t={A1:"",B1:"",C1:"",D1:"",E1:"",F1:"",G1:"",H1:"",I1:"",J1:"",A2:"",B2:"",C2:"",D2:"",E2:"",F2:"",G2:"",H2:"",I2:"",J2:"",A3:"",B3:"",C3:"",D3:"",E3:"",F3:"",G3:"",H3:"",I3:"",J3:"",A4:"",B4:"",C4:"",D4:"",E4:"",F4:"",G4:"",H4:"",I4:"",J4:"",A5:"",B5:"",C5:"",D5:"",E5:"",F5:"",G5:"",H5:"",I5:"",J5:"",A6:"",B6:"",C6:"",D6:"",E6:"",F6:"",G6:"",H6:"",I6:"",J6:"",A7:"",B7:"",C7:"",D7:"",E7:"",F7:"",G7:"",H7:"",I7:"",J7:"",A8:"",B8:"",C8:"",D8:"",E8:"",F8:"",G8:"",H8:"",I8:"",J8:"",A9:"",B9:"",C9:"",D9:"",E9:"",F9:"",G9:"",H9:"",I9:"",J9:"",A10:"",B10:"",C10:"",D10:"",E10:"",F10:"",G10:"",H10:"",I10:"",J10:""};const r=e=>{switch(e){case"offBoard":return"Your deployment would go off the board";case"onShip":return"You cannot deploy on another ship."}};return{board:t,deploy:(n,a,o)=>{let i=[];const l=r("offBoard"),s=r("onShip");if("horizontal"===o){const e="J";if(n.shipSize.length-1+a.charCodeAt(0)>e.charCodeAt(0))return l;for(let e=0;e<n.shipSize.length;e++)if(0===e){if("ship"===t[a])return s;i.push(a),n.shipSize[e]=a}else{const r=a.charCodeAt(0)+e;let o=String.fromCharCode(r)+a.substr(1);if("ship"===t[o])return s;i.push(o),n.shipSize[e]=o}}else if("vertical"===o){if(n.shipSize.length-1+parseInt(a.substring(1))>10)return l;for(let e=0;e<n.shipSize.length;e++){let r=a.charAt(0)+(parseInt(a.charAt(1))+e);if(0===e){if("ship"===t[a])return s;i.push(a),n.shipSize[e]=a}else{if("ship"===t[r])return s;i.push(r),n.shipSize[e]=r}}}for(let e=0;e<i.length;e++)t[i[e]]="ship";return e.push(n),t},receiveAttack:(r,n=!1)=>{if("ship"!==t[r])return t[r]="miss",r;for(let n=0;n<e.length;n++)for(let a=0;a<e[n].shipSize.length;a++)if(e[n].shipSize[a]===r){if("sunk"===e[n].hit(a)){for(let r=0;r<e[n].shipSize.length;r++)t[e[n].shipSize[r].split("hit-sunk")[0]]="sunk";let a=[];for(const[e,r]of Object.entries(t))a.push(r);return a.every((e=>"ship"!==e)),r}return t[r]="hit",r}},fleet:e,gameOver:e=>{let r=[];for(const[e,n]of Object.entries(t))r.push(n);if(r.every((e=>"ship"!==e)))return alert("GAME OVER"),"Game over!"}}}},507:e=>{e.exports=()=>({attackEnemy:(e,t)=>{if(null===e){let e=[];for(const[r,n]of Object.entries(t.board))"ship"!==n&&""!==n||e.push(r);const r=e[Math.floor(Math.random()*e.length)];return t.receiveAttack(r,!0)}return t.receiveAttack(e)}})},643:e=>{e.exports=e=>{let t;switch(e){case"carrier":t=5;break;case"battleship":t=4;break;case"cruiser":case"submarine":t=3;break;case"destroyer":t=2}const r=new Array(t),n=e;r.fill("");return{hit:e=>(r[e]=`${r[e]}hit`,r.every((e=>e.includes("hit")))?(()=>{for(let e=0;e<r.length;e++)r[e]+="-sunk";return"sunk"})():r),shipSize:r,name:n}}}},t={};!function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(417)()()})();