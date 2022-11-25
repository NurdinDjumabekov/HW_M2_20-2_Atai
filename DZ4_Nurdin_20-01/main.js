const btn = document.getElementById("btn");
function todo() {
  btn.onclick = () => {
    const text = input.value;
    alert(text);
  };
}
todo();

btn.addEventListener("click", todo);
input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    todo();
  } else {
    return false;
  }
});

