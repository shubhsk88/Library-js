const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages ${
      read ? 'reading' : 'not read yet'
    }`;
  };
}

const render = () => {
  let root = document.querySelector('.rooter');
  let ul = document.createElement('ul');
  myLibrary.forEach((num) => {
    let li = document.createElement('li');
    li.textContent = num.info();
    ul.appendChild(li);
  });

  root.appendChild(ul);
};

const button = document.querySelector('.button');

button.addEventListener('click', function () {
  let form = document.querySelector('.form');
  form.classList.toggle('block');
});

const form_button = document.querySelector('.form-submit');
form_button.addEventListener('click', (event) => {
  event.preventDefault();
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').checked;

  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  render();
})



