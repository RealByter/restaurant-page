function component(name) {
	const tab = document.createElement('button');

	tab.textContent = name;

	return tab;
}

export default component;
