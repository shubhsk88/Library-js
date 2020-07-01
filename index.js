const myLibrary = ['Hi', 'razor'];

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
    li.textContent = num;
    ul.appendChild(li);
  });

  root.appendChild(ul);
};
const button = document.querySelector('.button');

button.addEventListener('click', function () {});

// let tags = myLibrary.reduce((acc, num) => (acc += `<li>${num}</li>`), '');
// console.log(`<ul>${tags}</ul>`);

// root.innerHTML = `<ul>${tags}</ul>`;
