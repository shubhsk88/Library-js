let myLibrary = [];

function Book(
  title,
  author,
  pages,
  read,
  image = 'https://images.unsplash.com/photo-1593382025255-1a4b52884b96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.image = image;
  this.info = () => `${this.title} by ${this.author}, ${this.pages} pages ${
    this.read ? 'reading' : 'not read yet'
  }`;
}

function addBooksToLibrary(title, author, pages, read, image) {
  const bookey = new Book(title, author, pages, read, image);
  myLibrary.push(bookey);
}
const render = () => {
  const root = document.querySelector('.rooter');
  root.textContent = '';
  const ul = document.createElement('ul');
  myLibrary.forEach((num) => {
    const li = document.createElement('li');
    li.setAttribute('id', num.title);
    li.classList.add('m-4');
    const deleteButton = document.createElement('button');
    const changeRead = document.createElement('button');
    deleteButton.textContent = 'Delete';
    changeRead.classList.add(
      'bg-blue-800',
      'px-4',
      'py-2',
      'text-white',
      'mx-2',
      'rounded',
    );
    changeRead.textContent = num.read ? 'Unread' : 'Read';

    deleteButton.classList.add(
      'bg-red-800',
      'text-white',
      'px-4',
      'py-2',
      'mx-2',
      'rounded',
    );

    changeRead.addEventListener('click', () => {
      num.read = !num.read;
      changeRead.textContent = num.read ? 'Unread' : 'Read';
      render();
    });

    li.textContent = num.info();
    li.appendChild(changeRead);
    deleteButton.addEventListener('click', () => {
      myLibrary = myLibrary.filter((removal) => removal.title !== num.title);
      render();
    });
    li.appendChild(deleteButton);

    ul.appendChild(li);
  });

  root.appendChild(ul);
};

const button = document.querySelector('.button');
const container = document.querySelector('.container-1');
button.addEventListener('click', () => {
  container.classList.toggle('block');
});

const closeFormBtn = document.querySelector('.close-form-btn');
closeFormBtn.addEventListener('click', () => {
  container.classList.toggle('block');
});

const formButton = document.querySelector('.form-submit');
formButton.addEventListener('click', (event) => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  const imageLink = document.getElementById('image_link').value;

  if (title !== '' && author !== '' && pages !== '') {
    event.preventDefault();
    addBooksToLibrary(title, author, pages, read, imageLink);

    render();
    document.querySelector('.form').reset();
    container.classList.toggle('block');
  }
});
