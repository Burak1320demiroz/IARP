const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

let currentStep = 0;
let num1, num2, operator;

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

// Kullanıcının mesajını alıp yanıt verir
function sendMessage() {
    const userText = userInput.value.trim();

    if (userText === '') {
        return; // Boş mesaj gönderilmesini engeller
    }

    addMessage(userText, 'user'); // Kullanıcı mesajını ekler
    userInput.value = ''; // Inputu sıfırlar

    processMessage(userText); // Mesajı işleyip botun cevabını al
}

// Kullanıcı mesajına göre botun yanıtını oluşturur
function processMessage(userText) {
    switch (currentStep) {
        case 0:
            // Kullanıcıdan işlem türünü alıyoruz
            if (userText.toLowerCase().includes('toplama') || 
                userText.toLowerCase().includes('çıkarma') || 
                userText.toLowerCase().includes('çarpma') || 
                userText.toLowerCase().includes('bölme')) {
                
                operator = userText.toLowerCase();
                sendBotMessage(`Lütfen ${operator} işlemi için ilk sayıyı girin.`);
                currentStep = 1;
            } else {
                sendBotMessage('Üzgünüm, yalnızca toplama, çıkartma, çarpma ve bölme işlemlerini yapabilirim. Hangi işlemi yapmak istersiniz?');
            }
            break;

        case 1:
            // İlk sayıyı alıyoruz
            num1 = parseFloat(userText);
            if (isNaN(num1)) {
                sendBotMessage('Geçersiz bir sayı girdiniz, lütfen geçerli bir sayı girin.');
                return; // Sayı geçerli değilse işlemi tekrar başlat
            }
            sendBotMessage(`Şimdi ${operator} işlemi için ikinci sayıyı girin.`);
            currentStep = 2;
            break;

        case 2:
            // İkinci sayıyı alıyoruz
            num2 = parseFloat(userText);
            if (isNaN(num2)) {
                sendBotMessage('Geçersiz bir sayı girdiniz, lütfen geçerli bir sayı girin.');
                return; // Sayı geçerli değilse işlemi tekrar başlat
            }

            if (operator === 'bölme' && num2 === 0) {
                sendBotMessage('Sıfıra bölme hatası! Lütfen ikinci sayıyı 0 dışında bir değer girin.');
                currentStep = 1;
            } else {
                let result = 0;
                if (operator === 'toplama') {
                    result = num1 + num2;
                } else if (operator === 'çıkarma') {
                    result = num1 - num2;
                } else if (operator === 'çarpma') {
                    result = num1 * num2;
                } else if (operator === 'bölme') {
                    result = num1 / num2;
                }

                // Sonucu göster
                sendBotMessage(`Sonuç: ${result}`);
                // Sonuçtan sonra kullanıcıya hangi işlemi yapmak istediğini sor
                sendBotMessage('Hangi işlemi yapmak istersiniz? (Toplama, Çıkarma, Çarpma, Bölme)');
                currentStep = 0; // İşlem tamamlandı, bir sonraki işlem için sıfırla
            }
            break;

        default:
            sendBotMessage('Hatalı adım. Lütfen baştan bir işlem seçin.');
            currentStep = 0;
            break;
    }
}

// Sayfa yüklendiğinde ilk mesajı gönderir
window.onload = function() {
    sendBotMessage("Merhaba! Hangi işlemi yapmak istersiniz? (Toplama, Çıkartma, Çarpma, Bölme)");
};

// Kullanıcı mesajını gönderme işlemi
sendButton.addEventListener('click', sendMessage);

// Klavye ile "Enter" tuşuna basıldığında mesaj gönderir
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
