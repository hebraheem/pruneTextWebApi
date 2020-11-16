
//FETCH API 
function webApi(){
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=bc6dde98f0564ae8885cde0960b424f3&page=1')
    .then(res => res.json())
    .then(data => {
        let datas = data.articles
        let heading = `<h1 class="jumbotron display-4 text-center">Top News</h1>`;
        let output = ""
        datas.forEach(data => {
            output += `<ul class= "list-group m-4" style="width: 100%;">
                <li class= "list-group-item"> <strong>Headline:</strong> ${data.title} <br><br> <strong>Story:</strong> ${data.description}</li>
            </ul>`
        });
        document.querySelector('.output').innerHTML = output;
        document.querySelector('.heading').innerHTML = heading;
        
    })
}

webApi()

document.querySelector('.next').addEventListener("click", Next);
let count = 1
function Next() {
    count ++
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=bc6dde98f0564ae8885cde0960b424f3&page=1')
    .then(res => res.json())
    .then(data => {
        let news = data.articles
        console.log(news[count])
    })
    document.querySelector('.count').innerHTML = count
}
Next()

document.querySelector('.prev').addEventListener("click",Previous);
function Previous() {
    if (count > 1){
        count --
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=bc6dde98f0564ae8885cde0960b424f3&page=1')
        .then(res => res.json())
        .then(data => {
            let news = data.articles
            console.log(news[count])
        })
    } else {
        count = 1
    }
  
    document.querySelector('.count').innerHTML = count
}
Previous()







// function name(count) {
//     fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=bc6dde98f0564ae8885cde0960b424f3&page=1')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
// }
