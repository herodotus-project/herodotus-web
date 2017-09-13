import './archiveRow.css';
import artifactBadge from '../../artifact/artifactBadge/artifactBadge.js';
import createNewBadge from '../../artifact/artifactBadge/createNewBadge.js';


function addNewBadge() {
  const TESTDATA = {
    title: "New Item",
    subtitle: "1989 - "
  }

  let container = document.getElementById('archive-row');
  let newBadge = artifactBadge(TESTDATA);
  let badgeCreatorNode = document.getElementById('create-new-badge');
  container.insertBefore(newBadge, badgeCreatorNode)

}

export default function archiveRow({ contents }) {
  let rowContainer = document.createElement('div');
  rowContainer.classList.add('row');
  rowContainer.id = 'archive-row';

  contents.forEach((item) => {
    let childNode = artifactBadge(item)
    rowContainer.appendChild(childNode)
  });

  // Always render an 'empty' badge last to let users create a new one
  rowContainer.appendChild(createNewBadge({clickHandler: addNewBadge}))

  return rowContainer;
}