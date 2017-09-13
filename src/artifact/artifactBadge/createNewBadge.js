import './artifactBadge.css';

export default function createNewBadge({ clickHandler }) {
  let container = document.createElement('div');
  container.classList.add('badge-container');
  container.id = 'create-new-badge';

  container.innerHTML = `<h1>+</h1>`
  container.onclick = clickHandler

  return container
}