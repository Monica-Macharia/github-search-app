//search for a user on github
//display on the dom 
//post to persist

//get the input from the form and use it to perform a GET request

let form = document.getElementsByTagName("input")

form.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(form[0])
})

console.log(form[0])

//then push it to the DOM.