

const list = document.querySelector('.list');
const forms = document.forms;

// Här väljer att vi ska visa och sortera på name, author och date
// const sort_name_btn =document.querySelector('.sort-options .sort-name');
// const sort_author_btn = document.querySelector('.sort-options .sort-author') 
const sort_date_btn = document.querySelector('.sort-options .sort-date')


fetch("/news/newsEN.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {


    for (let i = 0; i < data.length; i++) {

      let desc = false;

      //Sortering på date
      sort_date_btn.addEventListener('click', () => {
        let array = sort_array_by(data, 'date', desc);
        displayList(array);

        desc = !desc;

      });





    }
    /*** *******************************SORTERING *************************/

    //Huvudsakliga function , som gör sortering
    function sort_array_by(array, sort, desc) {
      array.sort(function (a, b) {
        if (a[sort] < b[sort]) return -1;  //false
        if (a[sort] > b[sort]) return 1;
        return 0;

      });
      if (desc) array.reverse();
      return array
    }




    /************DISPLAY******************************************* */
    function displayList(array = []) {
      list.innerHTML = "";


      for (let i = 0; i < array.length; i++) {
        let item = array[i];
        let item_element = document.createElement('div');
        item_element.classList.add('list-item');     // 2 namn på classen <div class="item-name   items"> TITLE </div>


        if (item.type == 'article') {
          item_element.classList.add('article-item');

        }

        if (item.type == 'news') {
          item_element.classList.add('news-item');

        }

        //display name-title
        let title = document.createElement('div');
        title.classList.add('item-name', 'items');
        title.innerText = item.name;

        item_element.appendChild(title);

        //display author
        let author = document.createElement('div');
        author.classList.add('item-author', 'items');
        author.innerText = item.author;

        item_element.appendChild(author);



        let type = document.createElement('div');
        type.classList.add('item-meta', 'items');
        type.innerText = item.type;

        item_element.appendChild(type);
        // type.style.display = 'none'

        //display date
        let date = document.createElement('div');
        date.classList.add('item-date', 'items');

        date.innerText = item.date
        item_element.appendChild(date)
        list.appendChild(item_element);


      }




      const selectFitler = document.querySelector('#filter')
      const articleItems = document.querySelectorAll('.article-item')
      const newsItems = document.querySelectorAll('.news-item')

      selectFitler.onclick = () => {
        console.log(selectFitler.value);

        if (selectFitler.value == 'news') {
          articleItems.forEach((articleItem) => {
            console.log(articleItem)
            articleItem.style.display = 'none';

          })
          newsItems.forEach((newsItem) => {
            console.log(newsItem)
            newsItem.style.display = 'flex';

          })

        }

        if (selectFitler.value == 'articles') {
          articleItems.forEach((articleItem) => {
            console.log(articleItem)
            articleItem.style.display = 'flex';

          })
          newsItems.forEach((newsItem) => {
            console.log(newsItem)
            newsItem.style.display = 'none';

          })

        }

        if (selectFitler.value == 'all') {
          articleItems.forEach((articleItem) => {
            console.log(articleItem)
            articleItem.style.display = 'flex';

          })
          newsItems.forEach((newsItem) => {
            console.log(newsItem)
            newsItem.style.display = 'flex';

          })

        }
        console.log(articleItems)



      }



    }


    /* **********************FILTRERING*****************************************/
    displayList(data);


  })
  .catch(function (err) {
    console.log(err);
  })


