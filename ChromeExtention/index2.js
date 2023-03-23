let myStoredLeadsFetche = localStorage.getItem("myLeads")
let myStoredLeadsFetched = JSON.parse(myStoredLeadsFetche)
let myLeads = []

const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("input-btn")
const ulEl  = document.getElementById("ul-el")
const clearBtn = document.getElementById("clear-btn")
const saveTabBtn = document.getElementById("save-input-btn")


//checkLeads()
//renderLeads()

saveBtn.addEventListener("click", function(){
myLeads.push(inputEl.value)
inputEl.value=  ""
renderLeads()
console.log("addClicked")
})

clearBtn.addEventListener("click", function(){
myLeads = []
renderLeads()
})

function checkLeads(){
    if (myStoredLeadsFetched != ""){
        myLeads = myStoredLeadsFetched
   }
   else {
myLeads = []
   }
}

function renderLeads(){
   
    let myList =  "";
for (let i = 0; i < myLeads.length; i++){
    myList += 
            `<li id='li-el'>
            <a id = 'a-el' target = '_blank' href = '${myLeads[i]}'>${myLeads[i]} </a>
            <button onClick="removeItem(${i})"> Remove </button>
            </li>`
   
}
localStorage.setItem("myLeads",JSON.stringify(myLeads))
console.log("renderLeads")
ulEl.innerHTML =  myList
}

function removeItem(index){
    myLeads.splice(index, 1)
    renderLeads()
}

// saveTabBtn.addEventListener("click", function(){
//     chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//         let url = tabs[0].url;
//         // use `url` here inside the callback because it's asynchronous!
//         myLeads.push(url)
//         renderLeads()
//     })
// });

