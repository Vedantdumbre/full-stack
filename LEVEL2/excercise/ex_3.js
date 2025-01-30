const colors = ["red", "blue", "green", "yellow", "purple"];
const bgc = ["black", "white", "pink", "maroon", "gray"];
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  box.style.backgroundColor = colors[randomIndex];
});

boxes.forEach((box) => {
  const randomNumber = Math.floor(Math.random() * bgc.length);
  box.style.color = bgc[randomNumber];
});
