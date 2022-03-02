const feedDisplay = document.querySelector('#feed')



fetch('http://localhost:8000/results')
    .then(response => response.json())
    .then(data => {
    data.forEach(article => {
        const title = `<div><h3>` + article.title +`</h3><p>` + article.url + `</p></div>`
        feedDisplay.insertAdjacentHTML("beforeend", title)
    })
    //innerAdjacentHTML injects in DOM 
    //beforeend is before last child
    })

    .catch(err => console.log(err))