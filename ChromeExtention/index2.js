let myLeads = []
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("input-btn")
const ulEl  = document.getElementById("ul-el")

saveBtn.addEventListener("click", function(){
myLeads.push(inputEl.value)
inputEl.value=  ""
renderLeads()

})

function renderLeads(){
    let myList =  "";
for (let i = 0; i < myLeads.length; i++){
    myList += 
            `<li id='li-el'>
            <a id = 'a-el' target = '_blank' href = '${myLeads[i]}'>${myLeads[i]} </a>
            </li>`
}
ulEl.innerHTML =  myList
}

