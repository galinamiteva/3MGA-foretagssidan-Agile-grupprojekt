const body = document.querySelector('body');



fetch("news.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        console.log(data);




        for (let i = 0; i < data.length; i++) {

            let div = document.createElement('div');
            div.style.border="2px solid black"
 
            if (data[i].type === 'news') {
                div.classList.add('news');
            }
            if (data[i].type === 'article') {
                div.classList.add('article');
            }



            body.appendChild(div);

            let h6 = document.createElement('h6');
            h6.classList.add('list-item-h6');
            h6.innerText = data[i].title;
            div.appendChild(h6);

            let paragraph = document.createElement('p');
            paragraph.classList.add('list-item-p');
            paragraph.innerText = data[i].type;
            div.appendChild(paragraph);

        }
        let btn = document.createElement('button');
        btn.classList.add('btn-news');
        btn.innerText = 'news';
        body.appendChild(btn);

        let btn2 = document.createElement('button');
        btn2.classList.add('btn-article');
        btn2.innerText = 'article';
        body.appendChild(btn2);


        let allDiv = document.querySelectorAll('div');
        console.log(allDiv)


        let allNews = document.querySelectorAll('.news');
        let allArticle = document.querySelectorAll('.article');





        btn.addEventListener('click', () => {

            for (let i = 0; i < allDiv.length; i++) {
                allDiv[i].style.display = 'block';
            }
                for (let j = 0; j < allArticle.length; j++) {
                    allArticle[j].style.display = 'none';
            }

        });
        btn2.addEventListener('click', () => {

            for (let i = 0; i < allDiv.length; i++) {
                allDiv[i].style.display = 'block';
            }
            for (let g = 0; g < allNews.length; g++) {
                allNews[g].style.display = 'none';
            }

        });
    })
    .catch(function (err) {
        console.log(err);
    })

