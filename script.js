
//FETCH API 
function webApi(){
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=bc6dde98f0564ae8885cde0960b424f3&page=1')
    .then(res => res.json())
    .then(data => {
        let datas = data.articles
        let output = `<h1 class="jumbotron display-4 text-center">Top News</h1>`
        datas.forEach(data => {
            output += `<ul class= "list-group m-4">
                <li class= "list-group-item"> <strong>Headline:</strong> ${data.title} <br><br> <strong>Story:</strong> ${data.description}</li>
            </ul>`
        });
        document.querySelector('.output').innerHTML = output
    })
}

webApi()

let count = 1
document.querySelector('.next').addEventListener("click", next)
function next() {
    count ++
    console.log(count)
}
next()

function name(params) {
    
}
