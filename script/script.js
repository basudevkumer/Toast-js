function showMessage(message, type = "succcess", iconType) {
  let alertMessage = document.querySelector(".alertMessage");

  let createDiv = document.createElement("div");
  createDiv.classList.add("childAlert", type);


  let icon = document.createElement("span");
  icon.innerHTML = iconType;

  let textSpan = document.createElement("span");
  textSpan.innerText = "  " + message;

  createDiv.appendChild(icon);
  createDiv.appendChild(textSpan);

  alertMessage.appendChild(createDiv);

  setTimeout(() => {
    createDiv.remove();
  }, 6000);
}


// Javscritp code created by  own idea......