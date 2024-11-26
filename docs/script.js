const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
function sendBotMessage(message) {
    addMessage(message, 'bot');
}

function addMessage(text, sender) {
    const message = document.createElement('div');
    message.classList.add('message', sender);
    message.innerHTML = `${text.replace(/\n/g, '<br>')}`;

    const timestamp = document.createElement('span');
    timestamp.classList.add('timestamp');
    timestamp.innerText = ` - ${new Date().toLocaleTimeString()}`;

    message.appendChild(timestamp);
    chatLog.appendChild(message);
    chatLog.scrollTop = chatLog.scrollHeight; 
}

window.onload = function() {
    sendBotMessage("Hoşgeldiniz!");  
};

sendButton.addEventListener('click', function() {
    const userText = userInput.value.trim();
    if (userText !== '') {
        addMessage(userText, 'user');  
        userInput.value = '';  
    }
});

userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const userText = userInput.value.trim();
        if (userText !== '') {
            addMessage(userText, 'user');  
            userInput.value = '';  
        }
    }
});
