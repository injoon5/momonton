const nameContainer = document.querySelector(".js-name");

function paintName(name) {
  nameContainer.innerHTML = "";
  const title = document.createElement("span");
  title.className = "name__text";
  title.innerHTML = `안녕하세요. ${name} 님:)`;
  nameContainer.appendChild(title);
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const input = form.querySelector("input");
  const value = input.value;
  localStorage.setItem("username", value);
  paintName(value);
}

function paintInput() {
  const input = document.createElement("input");
  input.placeholder = "여기에 이름을 적으세요.";
  input.type = "text";
  input.className = "name__input";
  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmit);
  form.appendChild(input);
  nameContainer.appendChild(form);
}

function loadName() {
  const name = localStorage.getItem("username");
  if (name === null) {
    paintInput();
  } else {
    paintName(name);
  }
}

function init() {
  loadName();
}

init();
