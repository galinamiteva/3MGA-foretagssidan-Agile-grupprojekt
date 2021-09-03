
const  list = document.querySelector('.list');

const sort_name_btn =document.querySelector('.sort-options .sort-name');
const sort_author_btn = document.querySelector('.sort-options .sort-author')
const sort_meta_btn= document.querySelector('.sort-options .sort-meta');
const sort_date_btn = document.querySelector('.sort-options .sort-date')


let list_items = [
    {
        author : 'Jonh Doe',
        name:'Agile software development',
        type: 'article',
        date: new Date ('2019-06-28'),
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        author: 'William Pettersson',
        name:'What is SCRUM?',
        type: 'news',
        date: new Date ('2020-07-09'),
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        author: 'Peder Ek',
        name:"Agile vs Waterfall – Difference?",
        type: 'article',
        date: new Date ('2021-03-28'),
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        author: 'Ella Todoro',
        name:'Scrum methodologies',
        type: 'news',
        date: new Date ('2021-07-02'),
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        author: 'Aja Alfredo',
        name:'What is a Kanban Board?', 
        type: 'article',
        date: new Date ('2020-02-13'),
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        author: 'Aurora Moretti',
        name:'What Is an Inventory Kanban?',
        type: 'news',
        date: new Date ('2020-04-28'),
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        author: 'Ivan Smith',
        name:'Jira Agile board: Scrum or Kanban?',
        type: 'article',
        date: new Date ('2020-11-23'),
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        author: 'Daniella Olhsson',
        name:'Doing agile with Jira',
        type: 'news',
        date: new Date ('2020-10-06'),
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
    
];

let desc = false;

sort_name_btn.addEventListener('click', () => {
    let array = sort_array_by(list_items, 'name' , desc);
    displayList(array);
         
    desc = !desc;
  
});

sort_author_btn.addEventListener('click', () => {
    let array = sort_array_by(list_items, 'author' , desc);
    displayList(array);
         
    desc = !desc;
  
});


sort_meta_btn.addEventListener('click', () => {
    let array = sort_array_by(list_items, 'type' , desc);
    displayList(array);
         
    desc = !desc;
  
});



sort_date_btn.addEventListener('click', () => {
    let array = sort_array_by(list_items, 'date' , desc);
    displayList(array);
         
    desc = !desc;
  
});

function sort_array_by (array, sort, desc) {
    array.sort(function(a, b) {
        if (a[sort] < b[sort]) return -1;
        if (a[sort] > b[sort]) return 1;
        return 0;

    });
    if (desc) array.reverse();
    return array
}

function displayList(array = []) {
    list.innerHTML = "";
    for(let i =0; i<array.length; i++) {
        let item =array[i] ;

        let item_element = document.createElement ('div');
        item_element.classList.add('list-item');

        let title = document.createElement('div');
        title.classList.add('item-title');
        title.innerText = item.name;

        item_element.appendChild(title);


        let author = document.createElement('div');
        author.classList.add('item-author');
        author.innerText = item.author;

        item_element.appendChild(author);
        
        let type = document.createElement('div');
        type.classList.add('item-meta');
        type.innerText = item.type;

        item_element.appendChild(type);

        let date = document.createElement('div');
        date.classList.add('item-date');
        
        date.innerHTML=item.date.toDateString();
        item_element.appendChild(date)
      
        list.appendChild(item_element);

    }   
}

displayList(list_items);

/*******************************************CANVAS**********************************************************/ 


 


const TAU = 2 * Math.PI;

class Circle {
  constructor(canvas) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 8;
    this.growth = Math.random() * 4;
    this.decay = Math.max(Math.random() * 0.005, 0.0005);
    this.rgb = [
      Math.random() * 255,
      Math.random() * 255,
      Math.random() * 255,
    ];
    this.alpha = Math.random() * 0.35;
  }
  
  get fillStyle() {
    return `rgba(${this.rgb.join(',')},${this.alpha})`;
  }
  
  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.fillStyle;
    ctx.arc(this.x, this.y, this.r, 0, TAU);
    ctx.fill();
    
    this.r += this.growth;
    this.alpha -= this.decay;
  }
}

function render(ctx, foreground, circles = []) {
  const { width, height } = foreground.getBoundingClientRect();
  ctx.canvas.width = width;
  ctx.canvas.height = height;

  ctx.clearRect(0, 0, width, height);
  
  if (circles.length === 0) {
    circles.push(new Circle(ctx.canvas));
  }
  
  if (Math.random() > 0.98) {
    circles.push(new Circle(ctx.canvas));
  }
  
  for (const circle of circles) {
    circle.render(ctx);
  }
  
  window.requestAnimationFrame(() => {
    render(ctx, foreground, circles.filter(circle => circle.alpha > 0))
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas");
  const foreground = document.querySelector(".foreground");

  render(canvas.getContext("2d"), foreground);
});