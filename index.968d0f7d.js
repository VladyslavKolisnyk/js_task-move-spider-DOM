document.addEventListener("click",e=>{let t=document.querySelector(".wall"),l=document.querySelector(".spider");if("wall"!==e.target.className)return;let i=e.offsetX-l.clientWidth/2,c=e.offsetY-l.clientHeight/2,n=t.clientWidth-l.clientWidth,d=t.clientHeight-l.clientHeight;i=i>n?n:i<0?0:i,c=c>d?d:c<0?0:c,l.style.left=`${i}px`,l.style.top=`${c}px`});//# sourceMappingURL=index.968d0f7d.js.map

//# sourceMappingURL=index.968d0f7d.js.map
