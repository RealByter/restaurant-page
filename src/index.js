import Home from './home';
import Menu from './menu';
import ContactUs from './contact-us';
import Tab from './tabs';

const root = document.getElementById("content");

const homeTab = Tab("Home");
const menuTab = Tab("Menu")
const contactTab = Tab("Contact Us");

function constructPage() {
  root.innerHTML = "";
  root.appendChild(homeTab);
  root.appendChild(menuTab);
  root.appendChild(contactTab);
}

homeTab.addEventListener('click', (event) => {
  constructPage();
  root.appendChild(Home);
})

menuTab.addEventListener('click', (event) => {
  constructPage();
  root.appendChild(Menu);
})

contactTab.addEventListener('click', (event) => {
  constructPage();
  root.appendChild(ContactUs);
})

constructPage();