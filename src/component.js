function component(headerContent, contentContent) {
  const element = document.createElement('div');
	const header = document.createElement('h1');
	const content = document.createElement('p');

	header.textContent = headerContent;
	content.textContent = contentContent;
  
  element.appendChild(header);
  element.appendChild(content);

  return element;
}

export default component;
