var e=document.querySelector(".logo"),t=new Promise(function(t){e.addEventListener("click",function(){t("Promise was resolved!")})}),n=new Promise(function(e,t){setTimeout(function(){t(Error("Promise was rejected!"))},3e3)});t.then(function(e){var t=document.createElement("div");t.textContent=e,t.classList.add("message"),document.body.append(t)}),n.catch(function(e){var t=document.createElement("div");t.textContent=e,t.classList.add("message","error-message"),document.body.append(t)});
//# sourceMappingURL=index.e8504c24.js.map
