const btnEl = document.getElementById("btn");

const jokeEl = document.getElementById('joke');
const apiKey = "jGBLB08cswN+98UJgq/BLA==6sqsCnXXsovnYyJg";
const ApiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=";
const options = {
method:"GET",
headers:{
    "X-Api-Key":apiKey,
    },
};

btnEl.addEventListener('click' , async ()=>{
    try {
        jokeEl.innerText = "Loading ... ";

    btnEl.Disabled = true;
    btnEl.innerText = "Updating";

    const response =await fetch(ApiURL , options);
    const data =await response.json();
    jokeEl.innerText = data[0].joke;

    btnEl.Disabled = false;
    btnEl.innerText = "Tell Me New Joke"
        
    } catch (error) {
        jokeEl.innerText = "An ERROR happened Try Again Later";
        btnEl.Disabled = false;
        btnEl.innerText = "Tell Me New Joke"
        
    }


})