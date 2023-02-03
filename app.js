const roomForm = document.getElementById("room-form");
const roomName = document.getElementById("room-name");
const chatArea = document.getElementById("chat-area");
const message = document.getElementById("message");
const sendMessage = document.getElementById("send-message");

roomForm.addEventListener("submit", e => {
  e.preventDefault();
  const room = roomName.value;
  // create room code here
});

sendMessage.addEventListener("click", () => {
  // send message code here
});
