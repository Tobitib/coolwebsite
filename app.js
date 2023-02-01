const socket = io();
const messageInput = document.getElementById('message-input');
const usernameInput = document.getElementById('username-input');
const submitButton = document.getElementById('submit-button');
const messageContainer = document.getElementById('message-container');

submitButton.addEventListener('click', () => {
  const message = messageInput.value;
  const username = usernameInput.value;

  socket.emit('newMessage', {
    username,
    message,
  });

  messageInput.value = '';
});

socket.on('newMessage', (message) => {
  const newMessage = document.createElement('div');
  newMessage.classList.add('message');
  newMessage.innerHTML = `
    <p class="username">${message.username}:</p>
    <p>${message.message}</p>
  `;
  messageContainer.appendChild(newMessage);
  messageContainer.scrollTop = messageContainer.scrollHeight;
});
