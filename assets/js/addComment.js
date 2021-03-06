import axios from "axios";
const addCommentForm = document.getElementById("jsAddComment");

const sendComment = (comment) => {
  console.log(comment);
};
const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("Input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
  init();
}
