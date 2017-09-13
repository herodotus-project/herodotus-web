import './pageHeader.css';

export default function pageHeader(userName) {
  let container = document.createElement('div');
  container.classList.add('row');

  let text = document.createElement('h1');
  text.classList.add('column')
  text.id = 'page-header';
  text.innerHTML = `${userName}'s archive`;

  container.appendChild(text);

  return container
}