(()=>{function e(e){const n=document.getElementById("results-section");n.innerHTML="",e.forEach((e=>{const i=document.createElement("div");i.innerHTML=`<h3>${e.name}</h3><p>${e.description}</p>`,n.appendChild(i)}))}document.getElementById("search-btn").addEventListener("click",(()=>{document.getElementById("search-input").value,new Promise((e=>{setTimeout((()=>{e([{name:"Recipe 1",description:"You can find the recipe on the list)."},{name:"It was Aman's food recipe program. ",description:"Thank you for having us!"}])}),1e3)})).then(e)}))})();