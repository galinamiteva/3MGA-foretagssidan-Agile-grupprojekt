
const  list = document.querySelector('.list');
const forms = document.forms;

const sort_name_btn =document.querySelector('.sort-options .sort-name');
/* const sort_author_btn = document.querySelector('.sort-options .sort-author') */
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

/* sort_author_btn.addEventListener('click', () => {
    let array = sort_array_by(list_items, 'author' , desc);
    displayList(array);
       
    desc = !desc;
  
}); */


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
        if (a[sort] < b[sort]) return -1;  //false
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
        item_element.classList.add('list-item', 'items');

        let title = document.createElement('div');
        title.classList.add('item-title', 'items');
        title.innerText = item.name;

        item_element.appendChild(title);


        /* let author = document.createElement('div');
        author.classList.add('item-author', 'items');
        author.innerText = item.author;

        item_element.appendChild(author); */
        
        let type = document.createElement('div');
        type.classList.add('item-meta', 'items');
        type.innerText = item.type;

        item_element.appendChild(type);

        let date = document.createElement('div');
        date.classList.add('item-date', 'items');
        
        date.innerHTML=item.date.toDateString();
        item_element.appendChild(date)
      
        list.appendChild(item_element);

    }   
}

displayList(list_items);

const types = list.getElementsByClassName('item-meta'); 
const dates = list.getElementsByClassName('item-date');
const titles = list.getElementsByClassName('item-title')
const all = list.getElementsByClassName('items');

const searchBar = forms['search-box'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  ; //извежда всички LI от UL-search-books в една ареа
  
  Array.from(types).forEach((typ) => {    //Array.from('foo') дава Array ["f", "o", "o"]
    const type = typ.textContent;
    if(type.toLowerCase().indexOf(e.target.value) != -1){  //тук се проверява дали написаното от юзера събвада с нещо от заглавието
      typ.style.display = 'block';
      Array.from(titles).forEach((tit) => {
        tit.style.display = 'block';
      })
      Array.from(dates).forEach((d) => {
        d.style.display = 'block';
      })
    } else {
      typ.style.display = 'none';
     typ.parentElement.style.display = 'none';
       
    }
  });
});

/*******************************CANVAS2************************************************ */ 




const TAU = 1 * Math.PI;
const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

 window.addEventListener("resize", function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}); 

let mouse = {
	x: undefined,
	y: undefined
}

window.addEventListener("mousemove", function (evt) {
	mouse.x = evt.x;
	mouse.y = evt.y;
});

let circleArray = [];

let colors = ["#eeec82", "#d6a0b5", "#F3F3F3", 'FFC2C6' ];   

class Circle {
	constructor(x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.dx = randomInt(-1, 3);
		this.dy = randomInt(-1, 5);
		this.radius = radius;
		this.opacity = 1;
		this.color = color;
		this.maxRadius = 10;
		this.minRadius = radius;
    this.rgb =Math.random() * 255

	}

	draw() {
		this.grow();
		this.move();

		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fill();
    
	}

	grow() {
		if (this.x + 20 >= mouse.x
			&& this.x - 20 <= mouse.x
			&& this.y - 20 <= mouse.y
			&& this.y + 20 >= mouse.y
			&& this.radius <= this.maxRadius) {
			this.radius++;
		} else if (this.radius >= this.minRadius) {
			this.radius--;
		}
	}

	move() {
		this.x += this.dx;
		this.y += this.dy;

		if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}

		if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}
 
		// circleArray.forEach((circle) => {
		// 	if (this != circle) {
		// 		if (this.x + this.radius > circle.x + circle.radius || this.x - this.radius < circle.x - circle.radius) {
		// 			this.dx = -this.dx;
		// 		}

		// 		if (this.y + this.radius > circle.y + circle.radius || this.y - this.radius < circle.y - circle.radius) {
		// 			this.dy = -this.dy;
		// 		}
		// 	}
		// });
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

for (let i = 0; i < 100; i++) {
	let circle = new Circle(randomInt(0, canvas.width), randomInt(0, canvas.height), randomInt(5, 6), colors[randomInt(0, colors.length)]);
	circleArray.push(circle);
}

function update() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	circleArray.forEach(function (circle) {
		circle.draw();
	});

	requestAnimationFrame(update);
}

update();

function randomInt(min, max) {
	return Math.floor(Math.random() * max + min);
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


