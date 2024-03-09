function get() {
    fetch('js/data.js')
        .then((res) => {
            return res.json()
        })
        .then(posts => {
            let output = "";
            posts.forEach(function (post) {
                output += `<div class="cars-content container">       
                    <div><img src='${post.url}'alt='${post.id}'></div>
                    <div><h2>${post.title}</h2></div>
                    <div><span>${post.price}$</span></div>
                          </div>`

            });
            document.getElementById('cars').innerHTML = output
        })
}


get()