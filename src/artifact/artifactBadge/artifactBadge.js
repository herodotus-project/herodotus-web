import './artifactBadge.css';

export default function artifactBadge({ title, subtitle }) {
  let container = document.createElement('div');
  container.classList.add('badge-container');

  let titleText = `<h3> ${title} </h3>`;
  let subtitleText = `<h4> ${subtitle} </h4>`;

  container.innerHTML = titleText + subtitleText;

  return container
}