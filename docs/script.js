const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Bot mesajlarını ekler
function sendBotMessage(message) {
    addMessage(message, 'bot');
}

// Kullanıcı ve bot mesajlarını ekler
function addMessage(text, sender) {
    const message = document.createElement('div');
    message.classList.add('message', sender);
    message.innerHTML = `${text.replace(/\n/g, '<br>')}`;

    const timestamp = document.createElement('span');
    timestamp.classList.add('timestamp');
    timestamp.innerText = ` - ${new Date().toLocaleTimeString()}`;

    message.appendChild(timestamp);
    chatLog.appendChild(message);
    chatLog.scrollTop = chatLog.scrollHeight; // Yeni mesajlar en alta kaydırılır
}

// Sayfa yüklendiğinde ilk mesajı gönderir
window.onload = function() {
    sendBotMessage("Hoşgeldiniz!");  // İlk mesaj olarak "Hoşgeldiniz" yazdırılır
};

// Kullanıcı mesajını gönderme işlemi
sendButton.addEventListener('click', function() {
    const userText = userInput.value.trim();
    if (userText !== '') {
        addMessage(userText, 'user');  // Kullanıcı mesajını ekler
        userInput.value = '';  // Inputu sıfırlar
    }
});

// Klavye ile "Enter" tuşuna basıldığında mesaj gönderir
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const userText = userInput.value.trim();
        if (userText !== '') {
            addMessage(userText, 'user');  // Kullanıcı mesajını ekler
            userInput.value = '';  // Inputu sıfırlar
        }
    }
});
