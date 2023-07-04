// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

const buttons = document.querySelectorAll(".like-glyph");
let visited = new Array(buttons.length).fill(false);

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        toggleLike(button, visited, i);
      })
      .catch((err) => {
        toggleError(err);
      });
  });
});

function toggleLike(button, visited, i) {
  visited[i] = !visited[i];
  if (visited[i]) {
    button.textContent = FULL_HEART;
  } else {
    button.textContent = EMPTY_HEART;
  }
}

function toggleError(errorMessage) {
  console.log(`Error: ${errorMessage}`);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}