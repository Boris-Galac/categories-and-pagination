const task_list = document.querySelector('.list-items');
const filter_btns = document.querySelectorAll('.filter-btn');
const pags = document.querySelector('.tabs');

//// creating btns and append it to pagination div

const btnCreate = (klasa, naziv) => {
  let btn = document.createElement('button');
  btn.classList.add('pag-btn', klasa);
  btn.innerText = naziv;
  pags.append(btn);
};

let current_page = 1;
let rows = 5;
const menu = [
  {
    id: 1,
    title: 'This is first item',
    category: 'first',
    price: 15.99,
    img: 'https://picsum.photos/id/27/300/200',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates dolor quod ab, ad nemo quasi quo eos mollitia nostrum.',
  },
  {
    id: 2,
    title: 'This is second item',
    category: 'second',
    price: 5.99,
    img: 'https://picsum.photos/id/28/300/200',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates dolor quod ab, ad nemo quasi quo eos mollitia nostrum.',
  },
  {
    id: 3,
    title: 'This is third item',
    category: 'second',
    price: 4.99,
    img: 'https://picsum.photos/id/29/300/200',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates dolor quod ab, ad nemo quasi quo eos mollitia nostrum.',
  },
  {
    id: 4,
    title: 'This is fourth item',
    category: 'second',
    price: 8.45,
    img: 'https://picsum.photos/id/30/300/200',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates dolor quod ab, ad nemo quasi quo eos mollitia nostrum.',
  },
  {
    id: 5,
    title: 'This is fifth item',
    category: 'third',
    price: 25.18,
    img: 'https://picsum.photos/id/31/300/200',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates dolor quod ab, ad nemo quasi quo eos mollitia nostrum.',
  },
  {
    id: 6,
    title: 'This is sixth item',
    category: 'third',
    price: 9.99,
    img: 'https://picsum.photos/id/32/300/200',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates dolor quod ab, ad nemo quasi quo eos mollitia nostrum.',
  },
  {
    id: 7,
    title: 'This is seventh item',
    category: 'third',
    price: 18.22,
    img: 'https://picsum.photos/id/33/300/200',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates dolor quod ab, ad nemo quasi quo eos mollitia nostrum.',
  },
  {
    id: 8,
    title: 'This is eighth item',
    category: 'second',
    price: 6,
    img: 'https://picsum.photos/id/34/300/200',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates dolor quod ab, ad nemo quasi quo eos mollitia nostrum.',
  },
  {
    id: 9,
    title: 'This is ninth item',
    category: 'third',
    price: 23.99,
    img: 'https://picsum.photos/id/35/300/200',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates dolor quod ab, ad nemo quasi quo eos mollitia nostrum.',
  },
  {
    id: 10,
    title: 'This is tenth item',
    category: 'third',
    price: 4.45,
    img: 'https://picsum.photos/id/36/300/200',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates dolor quod ab, ad nemo quasi quo eos mollitia nostrum.',
  },
  {
    id: 11,
    title: 'This is eleventh item',
    category: 'third',
    price: 15.99,
    img: 'https://picsum.photos/id/37/300/200',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates dolor quod ab, ad nemo quasi quo eos mollitia nostrum.',
  },
  {
    id: 12,
    title: 'This is twelvth item',
    category: 'first',
    price: 10.99,
    img: 'https://picsum.photos/id/38/300/200',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates dolor quod ab, ad nemo quasi quo eos mollitia nostrum.',
  },
  {
    id: 13,
    title: 'This is thirteenth item',
    category: 'second',
    price: 6.99,
    img: 'https://picsum.photos/id/39/300/200',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates dolor quod ab, ad nemo quasi quo eos mollitia nostrum.',
  },
  {
    id: 14,
    title: 'This is fourteenth item',
    category: 'first',
    price: 3.99,
    img: 'https://picsum.photos/id/40/300/200',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates dolor quod ab, ad nemo quasi quo eos mollitia nostrum.',
  },
  {
    id: 15,
    title: 'This is fifteenth item',
    category: 'second',
    price: 2.29,
    img: 'https://picsum.photos/id/41/300/200',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates dolor quod ab, ad nemo quasi quo eos mollitia nostrum.',
  },
  {
    id: 16,
    title: 'This is sixteenth item',
    category: 'second',
    price: 2.39,
    img: 'https://picsum.photos/id/42/300/200',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates dolor quod ab, ad nemo quasi quo eos mollitia nostrum.',
  },
];

//// load and show items on browser load

window.addEventListener('DOMContentLoaded', (e) => {
  display_items(menu, current_page);
});

filter_btns.forEach((btn) => {
  /// label reference link
  btn.addEventListener('click', (e) => {
    filter_btns.forEach((tab) => tab.classList.remove('active'));
    e.currentTarget.classList.add('active');
  });
  /// filter categories
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.pag-btn').forEach((btn) => {
      btn.remove();
    });
    current_page = 1;
    filter(e);
  });
});

//// filtering

const filter = (e) => {
  const btn_category = e.currentTarget.dataset.id;
  const menu_category = menu.filter((menu_item) => {
    if (btn_category === menu_item.category) return menu_item;
  });
  if (btn_category === 'all') {
    display_items(menu, current_page);
    pagination(menu);
  } else {
    display_items(menu_category, current_page);
    pagination(menu_category);
  }
};

// show items

const display_items = (menu_items, page_num) => {
  task_list.innerHTML = '';
  page_num--;
  let arr = menu_items.map((item) => {
    return `
    <article class="item">
      <img src="${item.img}" class="img">
        <div class="item__description"> 
      <div>
        <h3>${item.title}</h3>
        <p>$${item.price}</p>
      </div>
        <p>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iste voluptates dolor quod ab,
          ad nemo quasi quo eosmolliti nostrum.
        </p>
      </div>
    </article>
    `;
  });
  // slice array and load items

  let start = rows * page_num;
  let end = start + rows;
  let arrSliced = arr.slice(start, end);
  for (let i = 0; i < arrSliced.length; i++) {
    task_list.innerHTML += arrSliced[i];
  }
};

// general pagination

const createPaginationBnts = () => {
  btnCreate('first', 'first');
  btnCreate('prev', 'prev');
  btnCreate('next', 'next');
  btnCreate('last', 'last');
};

const pagination = (arr) => {
  createPaginationBnts();
  let pageLength = Math.ceil(arr.length / rows);
  const first_pg = document.querySelector('.first');
  const prev_pg = document.querySelector('.prev');
  const next_pg = document.querySelector('.next');
  const last_pg = document.querySelector('.last');
  first_pg.addEventListener('click', () => {
    current_page = 1;
    display_items(arr, current_page);
  });
  prev_pg.addEventListener('click', () => {
    current_page--;
    current_page === 0 ? (current_page = pageLength) : current_page;
    display_items(arr, current_page);
  });
  next_pg.addEventListener('click', () => {
    current_page === pageLength ? (current_page = 1) : current_page++;
    display_items(arr, current_page);
  });
  last_pg.addEventListener('click', () => {
    current_page = pageLength;
    display_items(arr, current_page);
  });
};

pagination(menu);
