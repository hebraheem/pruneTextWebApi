
//FETCH API //////////////////////////////////////////////////////////////////////////////

document.querySelector('.next').addEventListener("click", Next);
let count = 0
function Next() {
    count ++
    const page= `page=${count}`
    const webapi = fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=bc6dde98f0564ae8885cde0960b424f3&${page}`)
    .then(res => res.json())
    .then(data => {
        if (webapi){
            document.querySelector('.loading').style.display = "none"
        }
        let datas = data.articles
        let heading = `<h1 class="jumbotron display-4 text-center">Top News page ${count}</h1>`;
        let output = ""
        datas.forEach((data, index) => {
            output +=`<li id = ${index} class= "list-group-item"> <strong>Headline:</strong> ${data.title} <br><br> <strong>Story:</strong> ${data.description}</li>`
        });
        document.querySelector('.output').innerHTML = output;
        document.querySelector('.heading').innerHTML = heading;

        document.querySelector('ul').addEventListener("click", e => {
            if (e.target && e.target.nodeName == "LI"){
                let persons = data.articles[e.target.id]
                if (persons){
                    document.querySelector('.btnloader').style.display = "none"
                }
                let newsArticle = `<div class = "col-lg-5 col-md-12 pl-4"><img class="img-fluid text-center" style = "width: 28rem; height: 400px;" src ="${persons.urlToImage}" alt = ${persons.author}/></div>
                <div class = "col-lg-7 mt-5">
                 <p><strong>Name: </strong>${persons.author}</p>
                 <p><strong>Title: </strong>${persons.title}</p>
                 <p><strong>Description: </strong>${persons.description}</p>
                 <p><strong>Content: </strong>${persons.content}</p>
                 <p><strong>Read more: </strong><a href =${persons.url} target="blank">Click here</a></p>
                </div>`
                document.querySelector('.news').innerHTML = newsArticle;
            }
        })
    })
    
}
Next()




// PREVIOUS CODE //////////////////////////////////////////////////////////////////////////////////////

document.querySelector('.prev').addEventListener("click",Previous);
function Previous() {
    if (count > 1){
        count --
        const page= `page=${count}`
        const webapi = fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=bc6dde98f0564ae8885cde0960b424f3&${page}`)
        .then(res => res.json())
        .then(data => {
            if (webapi){
                document.querySelector('.loading').style.display = "none"
            }
            let datas = data.articles
            let heading = `<h1 class="jumbotron display-4 text-center">Top News page ${count}</h1>`;
            let output = ""
            datas.forEach((data, index) => {
                output += `<li id = ${index} class= "list-group-item"> <strong>Headline:</strong> ${data.title} <br><br> <strong>Story:</strong> ${data.description}</li>`
            });
            document.querySelector('.output').innerHTML = output;
            document.querySelector('.heading').innerHTML = heading;

            document.querySelector('ul').addEventListener("click", e => {
                if (e.target && e.target.nodeName == "LI"){
                    let persons = data.articles[e.target.id]
                    if (persons){
                        document.querySelector('.btnloader').style.display = "none"
                    }
                    let newsArticle = `<div class = "col-lg-5 col-md-12 pl-4"><img class="img-fluid text-center" style = "width: 28rem; height: 400px;" src ="${persons.urlToImage}" alt = ${persons.author}/></div>
                    <div class = "col-lg-7 mt-5">
                     <p><strong>Name: </strong>${persons.author}</p>
                     <p><strong>Title: </strong>${persons.title}</p>
                     <p><strong>Description: </strong>${persons.description}</p>
                     <p><strong>Content: </strong>${persons.content}</p>
                     <p><strong>Read more: </strong><a href =${persons.url} target="blank">Click here</a></p>
                    </div>`
                    document.querySelector('.news').innerHTML = newsArticle;
                }
            })
    
            
        })
    } else {
        count = 1
    }
  
}
Previous()



