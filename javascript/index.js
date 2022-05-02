// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks

getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
   getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
        getInstruction("mashedPotatoes", 4, (step5) => {
             document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
             
             document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
             document.getElementById("mashedPotatoesImg").removeAttribute("hidden")
            }, (error) => console.log(error))
          }, (error) => console.log(error))
        }, (error) => console.log(error))
   }, (error) => console.log(error))
  }, (error) => console.log(error))


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
  return obtainInstruction('steak', 1)})
  .then( (step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)})
  .then( (step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
      return obtainInstruction('steak', 3)})
  .then( (step3) => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
      return obtainInstruction('steak', 4)})
  .then( (step4) => {
      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
      return obtainInstruction('steak', 5)})
  .then( (step5) => {
        document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
        return obtainInstruction('steak', 6)})
  .then( (step6) => {
          document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
          return obtainInstruction('steak', 7)})
  .then( (step7) => {
            document.querySelector("#steak").innerHTML += `<li>${step7}</li>`})
  //.catch((err)=> console.log(err))
  .then(() => document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`)
  .then(()=> document.getElementById("steakImg").removeAttribute("hidden"))
  .catch((err)=> console.log(err))
  

// Iteration 3 using async/await
async function makeBroccoli() {
  let html = document.querySelector("#broccoli")
  try {
    html.innerHTML += `<li>${await obtainInstruction('broccoli', 0)}</li>`
    html.innerHTML += `<li>${await obtainInstruction('broccoli', 1)}</li>`
    html.innerHTML += `<li>${await obtainInstruction('broccoli', 2)}</li>`
    html.innerHTML += `<li>${await obtainInstruction('broccoli', 3)}</li>`
    html.innerHTML += `<li>${await obtainInstruction('broccoli', 4)}</li>`
    html.innerHTML += `<li>${await obtainInstruction('broccoli', 5)}</li>`
    html.innerHTML += `<li>${await obtainInstruction('broccoli', 6)}</li>`
    html.innerHTML += `<li>Broccoli is ready!</li>`
    document.getElementById("broccoliImg").removeAttribute("hidden")
  }
  catch(err) {
    console.log("broccoli error",err)
}
} 

makeBroccoli()

// Bonus 2 - Promise all
const sprouts1 = obtainInstruction('brusselsSprouts', 0)
const sprouts2 = obtainInstruction('brusselsSprouts', 1)
const sprouts3 = obtainInstruction('brusselsSprouts', 2)
const sprouts4 = obtainInstruction('brusselsSprouts', 3)
const sprouts5 = obtainInstruction('brusselsSprouts', 4)
const sprouts6 = obtainInstruction('brusselsSprouts', 5)
const sprouts7 = obtainInstruction('brusselsSprouts', 6)
const sprouts8 = obtainInstruction('brusselsSprouts', 7)
let html = document.querySelector("#brusselsSprouts")

Promise.all( [sprouts1, sprouts2, sprouts3, sprouts4, sprouts5, sprouts6, sprouts7, sprouts8])

.then ((valueArray) => {html.innerHTML += `<li>${valueArray[0]}</li>`
return valueArray})
.then ((valueArray) => {html.innerHTML += `<li>${valueArray[1]}</li>`
return valueArray})
.then ((valueArray) => {html.innerHTML += `<li>${valueArray[2]}</li>`
return valueArray})
.then ((valueArray) => {html.innerHTML += `<li>${valueArray[3]}</li>`
return valueArray})
.then ((valueArray) => {html.innerHTML += `<li>${valueArray[4]}</li>`
return valueArray})
.then ((valueArray) => {html.innerHTML += `<li>${valueArray[5]}</li>`
return valueArray})
.then ((valueArray) => {html.innerHTML += `<li>${valueArray[6]}</li>`
return valueArray})
.then ((valueArray) => html.innerHTML += `<li>${valueArray[7]}</li>`)
.then (() => html.innerHTML += `<li>Brussels sprouts are ready!</li>`)
.then(()=>document.getElementById("brusselsSproutsImg").removeAttribute("hidden"))
.catch((err)=> console.log(err))