import pageHeader from './pageHeader/pageHeader.js';
import archiveRow from './archive/archiveRow/archiveRow.js';

import './app.css';

const TESTBADGES = [
  {title: "First Item", subtitle: "some subtitle"}, 
  {title: "Second Item", subtitle: "something else"},
  {title: "Third Item", subtitle: "something else"},
  {title: "Fourth Item", subtitle: "something else"}
];
// Create the overall container
let pageContainer = document.createElement('div')
pageContainer.classList.add('container')
document.body.appendChild(pageContainer);
// add a page header
pageContainer.appendChild(pageHeader("Josh"))
// add a row
pageContainer.appendChild(
  archiveRow({contents: TESTBADGES})
)