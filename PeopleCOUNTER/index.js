
 let countEl = document.getElementById("count-el") // pass in the argument
//  console.log(countEl)


  let count = 0

   function increment(){
    count +=1
    countEl.innerText = count
    // console.log(count)
  }

// function save(){
//   console.log(count)
// }

// save() //The save() function simply logs the current value of count.

// let welcomeEL = document.getElementById("welcome-el")

// let name = "Vansh"
// let greeting = "Welcome back "
// welcomeEL.innerText = greeting + name 

let saveEl = document.getElementById("save-el")

// function save(){
//   let countStr = count + " - "
//   saveEl.innerText += countStr
// }

// we didnt get spaces in above code , so  we will use .textContent to mamage this
  function save(){
let countStr = count + " - "
saveEl.textContent += countStr
countEl.innerText = 0
count = 0 

}


 