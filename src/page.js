function builder(container, array) {
  for (i = 0; i < array.length; i++) {
    let element = document.createElement("div");
    element.setAttribute(`id`, `${array[i]}`);
    element.innerText = `${array[i]}`;
    container.appendChild(element);
  }
}

alert(`works two`);

export default builder;
