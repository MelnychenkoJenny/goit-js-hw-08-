!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=null;function o(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}function c(t,n){t.disabled=n}t.addEventListener("click",(function(){e=setInterval(o,1e3),c(t,!0),c(n,!1)})),n.addEventListener("click",(function(){clearInterval(e),c(t,!1),c(n,!0)})),c(n,!0)}();
//# sourceMappingURL=01-color-switcher.35b24d22.js.map
