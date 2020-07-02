let myLibrary = [];

function Book(
  title,
  author,
  pages,
  read,
  image = 'https://images.unsplash.com/photo-1593382025255-1a4b52884b96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.image = image;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages ${
      this.read ? 'reading' : 'not read yet'
    }`;
  };
}

function addBooksToLibrary(title, author, pages, read, image) {
  let bookey = new Book(title, author, pages, read, image);
  myLibrary.push(bookey);
}
const render = () => {
  let root = document.querySelector('.rooter');
  root.textContent = '';
  let ul = document.createElement('ul');
  myLibrary.forEach((num) => {
    let li = document.createElement('li');
    li.setAttribute('id', num.title);
    li.classList.add('m-4')
    let deleteButton = document.createElement('button');
    let changeRead = document.createElement('button');
    deleteButton.textContent = 'Delete';
    changeRead.classList.add(
      'bg-blue-800',
      'px-4',
      'py-2',
      'text-white',
      'mx-2',
      'rounded'
    );
    changeRead.textContent = num.read ? 'Unread' : 'Read';

    deleteButton.classList.add(
      'bg-red-800',
      'text-white',
      'px-4',
      'py-2',
      'mx-2',
      'rounded'
    );

    changeRead.addEventListener('click', () => {
      num.read = !num.read;
      changeRead.textContent = num.read ? 'Unread' : 'Read';

      console.log(num.read);
      render();
    });

    li.textContent = num.info();
    li.appendChild(changeRead);
    deleteButton.addEventListener('click', function () {
      myLibrary = myLibrary.filter((removal) => removal.title !== num.title);
      render();
    });
    li.appendChild(deleteButton);

    ul.appendChild(li);
  });

  root.appendChild(ul);
};

let button = document.querySelector('.button');
let container = document.querySelector('.container-1');
button.addEventListener('click', function () {
  container.classList.toggle('block');
});

const closeFormBtn = document.querySelector('.close-form-btn');
closeFormBtn.addEventListener('click', function (event) {
  container.classList.toggle('block');
})

const form_button = document.querySelector('.form-submit');
form_button.addEventListener('click', (event) => {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').checked;
  let image_link = document.getElementById('image_link').value;

  if(title != '' && author != '' && pages != ''){
    event.preventDefault();
    addBooksToLibrary(title, author, pages, read, image_link);

    render();
    document.querySelector('.form').reset();
    container.classList.toggle('block');
  }    
});
