const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.startBtn.addEventListener("click",(function(){t.stopBtn.removeAttribute("disabled"),t.startBtn.setAttribute("disabled",!0),e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.removeAttribute("disabled"),t.stopBtn.setAttribute("disabled",!0),clearInterval(e)})),t.stopBtn.setAttribute("disabled",!0);let e=null;
//# sourceMappingURL=01-color-switcher.b8c060a7.js.map