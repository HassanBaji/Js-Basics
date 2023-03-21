let myLeads = []
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("input-btn")
const ulEl  = document.getElementById("ul-el")

saveBtn.addEventListener("click", function(){
myLeads.push(inputEl.value)
ulEl.textContent = ""
for (let i = 0; i < myLeads.length; i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "
}
})


