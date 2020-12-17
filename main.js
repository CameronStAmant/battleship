(()=>{var e={766:e=>{e.exports=(e,r,t,o,n)=>{let a=document.getElementById("content");a.innerHTML="";let i=document.createElement("div");i.innerHTML="Battleship",a.append(i);let l=document.createElement("div");l.className="main",a.append(l);let s=document.createElement("div");s.innerHTML="Player 1",s.class="playerOneBoard",l.append(s);let c=document.createElement("ul");c.className="grid-container",s.append(c);for(const[r,t]of Object.entries(e.board)){let e=document.createElement("div");e.id=`1-${r}`,e.className="grid-item",e.innerHTML="ship"===t?"X":"-",c.append(e)}let d=document.createElement("div");d.innerHTML="Player 2",d.class="playerTwoBoard",l.append(d);let p=document.createElement("ul");p.className="grid-container",d.appendChild(p);for(const[n,a]of Object.entries(r.board)){let i=document.createElement("div");i.id=`2-${n}`,i.className="grid-item","ship"===a?i.addEventListener("click",(function n(a){a.currentTarget.removeEventListener(a.type,n),i.innerHTML="X",i.style.backgroundColor="red",t.attackEnemy(i.id.substr(2),r),"Game over!"!==e.gameOver(r.board)&&"Game over!"!==r.gameOver(e.board)||location.reload();let l=document.getElementById(`1-${o.attackEnemy(null,e)}`);"X"===l.innerHTML?(l.style.backgroundColor="red","Game over!"!==e.gameOver(r.board)&&"Game over!"!==r.gameOver(e.board)||location.reload()):l.style.backgroundColor="green"})):i.addEventListener("click",(function n(a){a.currentTarget.removeEventListener(a.type,n),i.innerHTML="-",i.style.backgroundColor="green",t.attackEnemy(i.id.substr(2),r);let l=document.getElementById(`1-${o.attackEnemy(null,e)}`);"X"===l.innerHTML?(l.style.backgroundColor="red","Game over!"!==e.gameOver(r.board)&&"Game over!"!==r.gameOver(e.board)||location.reload()):l.style.backgroundColor="green"})),p.append(i)}return{}}},417:(e,r,t)=>{const o=t(507),n=t(498),a=t(643),i=t(766);e.exports=()=>{let e=n(),r=n(),t=[e.board,r.board],l=o(),s=o();e.deploy(a("battleship"),"A2","horizontal"),e.deploy(a("cruiser"),"A3","horizontal"),e.deploy(a("submarine"),"A4","horizontal"),e.deploy(a("destroyer"),"A5","horizontal"),r.deploy(a("carrier"),"A1","vertical"),r.deploy(a("battleship"),"B1","vertical"),r.deploy(a("cruiser"),"C1","vertical"),r.deploy(a("submarine"),"D1","vertical"),r.deploy(a("destroyer"),"E1","vertical"),i(e,r,l,s,!1);let c=prompt("Where would you like your carrier? Enter coordinates between A-J and 1-10"),d=prompt("Vertical or horizontal?");for(;!["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","B1","B2","B3","B4","B5","B6","B7","B8","B9","B10","C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","E1","E2","E3","E4","E5","E6","E7","E8","E9","E10","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","G1","G2","G3","G4","G5","G6","G7","G8","G9","G10","H1","H2","H3","H4","H5","H6","H7","H8","H9","H10","I1","I2","I3","I4","I5","I6","I7","I8","I9","I10","J1","J2","J3","J4","J5","J6","J7","J8","J9","J10"].includes(c)&&!["vertical","horizontal"].includes(d);)console.log("That option is invalid"),c=prompt("Where would you like your carrier? Enter coordinates between A-J and 1-10"),d=prompt("Vertical or horizontal?");return e.deploy(a("carrier"),c,d),i(e,r,l,s,!1),{boards:t,player1:l,player2:s,gameboard1:e,gameboard2:r}}},498:e=>{e.exports=()=>{let e=[],r={A1:"",A2:"",A3:"",A4:"",A5:"",A6:"",A7:"",A8:"",A9:"",A10:"",B1:"",B2:"",B3:"",B4:"",B5:"",B6:"",B7:"",B8:"",B9:"",B10:"",C1:"",C2:"",C3:"",C4:"",C5:"",C6:"",C7:"",C8:"",C9:"",C10:"",D1:"",D2:"",D3:"",D4:"",D5:"",D6:"",D7:"",D8:"",D9:"",D10:"",E1:"",E2:"",E3:"",E4:"",E5:"",E6:"",E7:"",E8:"",E9:"",E10:"",F1:"",F2:"",F3:"",F4:"",F5:"",F6:"",F7:"",F8:"",F9:"",F10:"",G1:"",G2:"",G3:"",G4:"",G5:"",G6:"",G7:"",G8:"",G9:"",G10:"",H1:"",H2:"",H3:"",H4:"",H5:"",H6:"",H7:"",H8:"",H9:"",H10:"",I1:"",I2:"",I3:"",I4:"",I5:"",I6:"",I7:"",I8:"",I9:"",I10:"",J1:"",J2:"",J3:"",J4:"",J5:"",J6:"",J7:"",J8:"",J9:"",J10:""};const t=e=>{switch(e){case"offBoard":return"Your deployment would go off the board";case"onShip":return"You cannot deploy on another ship."}};return{board:r,deploy:(o,n,a)=>{let i=[];const l=t("offBoard"),s=t("onShip");if("vertical"===a){if(o.shipSize.length-1+parseInt(n.substring(1))>10)return l;for(let e=0;e<o.shipSize.length;e++){let t=n.charAt(0)+(parseInt(n.charAt(1))+e);if(0===e){if("ship"===r[n])return s;i.push(n),o.shipSize[e]=n}else{if("ship"===r[t])return s;i.push(t),o.shipSize[e]=t}}}else if("horizontal"===a){const e="J";if(o.shipSize.length-1+n.charCodeAt(0)>e.charCodeAt(0))return l;for(let e=0;e<o.shipSize.length;e++)if(0===e){if("ship"===r[n])return s;i.push(n),o.shipSize[e]=n}else{const t=n.charCodeAt(0)+e;let a=String.fromCharCode(t)+n.charAt(1);if("ship"===r[a])return s;i.push(a),o.shipSize[e]=a}}for(let e=0;e<i.length;e++)r[i[e]]="ship";return e.push(o),r},receiveAttack:(t,o=!1)=>{if("ship"!==r[t])return r[t]="miss",t;for(let o=0;o<e.length;o++)for(let n=0;n<e[o].shipSize.length;n++)if(e[o].shipSize[n]===t){if("sunk"===e[o].hit(n)){for(let t=0;t<e[o].shipSize.length;t++)r[e[o].shipSize[t].split("hit-sunk")[0]]="sunk";let n=[];for(const[e,t]of Object.entries(r))n.push(t);return n.every((e=>"ship"!==e)),t}return r[t]="hit",t}},fleet:e,gameOver:e=>{let t=[];for(const[e,o]of Object.entries(r))t.push(o);if(t.every((e=>"ship"!==e)))return console.log("GAME OVER"),alert("GAME OVER"),"Game over!"}}}},507:e=>{e.exports=()=>({attackEnemy:(e,r)=>{if(null===e){let e=[];for(const[t,o]of Object.entries(r.board))"ship"!==o&&""!==o||e.push(t);const t=e[Math.floor(Math.random()*e.length)];return r.receiveAttack(t,!0)}return r.receiveAttack(e)}})},643:e=>{e.exports=e=>{let r;switch(e){case"carrier":r=5;break;case"battleship":r=4;break;case"cruiser":case"submarine":r=3;break;case"destroyer":r=2}const t=new Array(r),o=e;t.fill("");return{hit:e=>(t[e]=`${t[e]}hit`,t.every((e=>e.includes("hit")))?(()=>{for(let e=0;e<t.length;e++)t[e]+="-sunk";return"sunk"})():t),shipSize:t,name:o}}}},r={};!function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{}};return e[o](n,n.exports,t),n.exports}(417)()()})();