const body = document.querySelector('body');



fetch("news.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        console.log(data);




        for (let i = 0; i < data.length; i++) {

            let div = document.createElement('div');
            div.style.border="2px solid black";
        
 
            if (data[i].type === 'news') {
                div.classList.add('news');
            }
            if (data[i].type === 'article') {
                div.classList.add('article');
            }



            body.appendChild(div);

            let h4 = document.createElement('h4');
            h4.classList.add('list-item-h4');
            h4.innerText = data[i].title;
            div.appendChild(h4);

            let paragraph = document.createElement('p');
            paragraph.classList.add('list-item-p');
            paragraph.innerText = data[i].type;
            div.appendChild(paragraph);

        }


/* <div class="custom-select" style="width:200px;">
  <select>
    <option value="0">Select car:</option>
    <option value="1">Audi</option>
    <option value="2">BMW</option>

  </select>
</div> */
// const divSelect = document.createElement('div');
// divSelect.classList.add('custom-select');
// divSelect.style.width="200px";
// body.appendChild(divSelect);

// const select = document.createElement('select');
// divSelect.appendChild(select);

// const option0 = document.createElement('option');
// option0.setAttribute('value', '0');
// option0.innerText='All';
// select.appendChild(option0);

// const option1 = document.createElement('option');
// option1.setAttribute('value', '1');
// option1.innerText='News';
// select.appendChild(option1);

// const option2 = document.createElement('option');
// option2.setAttribute('value', '2');
// option2.innerText='Articles';
// select.appendChild(option2);


let btn0 = document.createElement('button');
btn0.classList.add('btn-all');
btn0.innerText = 'All';
body.appendChild(btn0);

        let btn1 = document.createElement('button');
        btn1.classList.add('btn-news');
        btn1.innerText = 'news';
        body.appendChild(btn1);


        let btn2 = document.createElement('button');
        btn2.classList.add('btn-article');
        btn2.innerText = 'articles';
        body.appendChild(btn2);


        let allDiv = document.querySelectorAll('div');
        console.log(allDiv)


        let allNews = document.querySelectorAll('.news');
        let allArticle = document.querySelectorAll('.article');


        btn0.addEventListener('click', () => {

            for (let i = 0; i < allDiv.length; i++) {
                allDiv[i].style.display = 'block';}

        });


       btn1.addEventListener('click', () => {

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

