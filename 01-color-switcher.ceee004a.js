const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d=null;function n(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){d=setInterval(n,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(d),document.body.removeAttribute("style"),t.disabled=!1,e.disabled=!0})),e.disabled=!0;
//# sourceMappingURL=01-color-switcher.ceee004a.js.map
