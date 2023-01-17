document.addEventListener("DOMContentLoaded", ()=>{
const dogAPI=    "http://localhost:3000/pups"
const dogDiv = document.querySelector("#dog-bar")
const detailDiv = document.querySelector("#dog-info")

    fetch(dogAPI)
    .then(res => res.json())
    .then((dogs)=>{
        dogs.forEach((dog) => {
            let span = document.createElement("span");
            span.textContent = dog.name
            span.dataset.src = dog.image
            dogDiv.appendChild(span);
            span.addEventListener("click", (e)=>{
                let img = document.createElement("img")
                let h2 = document.createElement("h2")
                let button = document.createElement("button")
                let selectedDog = dogs.find(d => d.name === e.target.textContent);
                img.src = selectedDog.image;
                h2.textContent = selectedDog.name;
                if(selectedDog.isGoodDog === true){
                    button.textContent = "Good Dog!"
                } else {
                    button.textContent = "Bad Dog!"
                }
                detailDiv.appendChild(img)
                detailDiv.appendChild(h2)
                detailDiv.appendChild(button)
                button.addEventListener("click", ()=>{
                    if(button.textContent === "Good Dog!"){
                        button.textContent = "Bad Dog!"
                    }else {
                        button.textContent = "Good Dog!"
                    }
                })
            })
            
        })
       
    })


});