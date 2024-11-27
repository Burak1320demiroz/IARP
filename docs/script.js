const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');

// Mesaj eklemek için fonksiyon
function addMessage(text, sender) {
    const message = document.createElement('div');
    message.classList.add('message', sender);
    message.innerHTML = text.replace(/\n/g, '<br>');  // Yeni satırları <br> ile değiştir

    const timestamp = document.createElement('span');
    timestamp.classList.add('timestamp');
    const currentTime = new Date();
    timestamp.innerText = ` - ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

    message.appendChild(timestamp);
    chatLog.appendChild(message);
    chatLog.scrollTop = chatLog.scrollHeight; // Sohbeti en alta kaydır
}

// Bot mesajlarını göndermek için fonksiyon
function sendBotMessage(message) {
    addMessage(message, 'bot');
}

// Kullanıcı mesajlarını göndermek için fonksiyon
function sendMessage() {
    const userText = userInput.value.trim();
    if (userText !== '') {
        addMessage(userText, 'user');
        handleUserMessage(userText);  // Kullanıcı mesajına göre yanıt ver
        userInput.value = '';  // Mesaj kutusunu temizle
    }
}

// Kullanıcı mesajına göre cevap verecek fonksiyon
function handleUserMessage(userText) {
    // Kullanıcıdan alınan metni küçük harfe çevir
    const lowerCaseUserText = userText.toLowerCase();
    // Basit Sorular
    if (userText.toLowerCase().includes("basit sorular")) {
        sendBotMessage("IARP nedir?, IARP amacı nedir?");
    } else if (userText.toLowerCase().includes("iarp amacı nedir?")) {
        sendBotMessage("IARP'nin Amacı, Matematiksel ve Başka Konularda Asistanlık Yapmak İcin Hazırlanmıştır.");
    } else if (userText.toLowerCase().includes("iarp nedir?")) {
        sendBotMessage("IARP, Gelişmekte Olan Bi Asistan Chatbottur");
    }
    // Matematik Konuları
    else if (userText.toLowerCase().includes("matematik konuları")) {
        sendBotMessage("Matematik lisans konuları şunlardır:\n- Graf Teorisi");
    }
    // Graf Teorisi
    else if (userText.toLowerCase().includes("graf teorisi")) {
        sendBotMessage("Graf teorisi ile ilgili ne bilmek istiyorusunuz : \n - Graf Nedir? \n  - Sıfır Grafları  \n - Patika Grafları \n - Devir Grafları \n - Yıldız grafları \n - Duble Yıldız Grafları");
    }   else if (userText.toLowerCase().includes("graf nedir?")) {
        sendBotMessage("Graf teorisi, düğümler ve bu düğümleri birbirine bağlayan kenarlardan oluşan yapıları inceleyen bir matematik dalıdır. Bu teori, ağ yapıları, ulaşım sistemleri ve bağlantıların optimizasyonu gibi birçok alanda kullanılır.");
    }   else if (userText.toLowerCase().includes("sıfır grafları")) {
        sendBotMessage("Sıfır grafları, sıfır kenara sahip sadece köşelerden oluşan graflardır. n köşeli bir sıfır grafı N<sub>n</sub> şeklinde gösterilir.");
    }   else if (userText.toLowerCase().includes("patika grafları")) {
        sendBotMessage("Patika grafları, v<sub>1</sub>, v<sub>2</sub>, ..., v<sub>n</sub> birbirinden farklı köşeler olsun. Ardışık v<sub>1</sub>v<sub>2</sub>, v<sub>2</sub>v<sub>3</sub>, ..., v<sub>n-1</sub>v<sub>n</sub> kenarlarına sahip olan grafa patika grafı denir ve P<sub>n</sub> şeklinde gösterilir. \n P<sub>n</sub> grafında n köşe ve n-1 kenar vardır v<sub>1</sub> ile v<sub>n</sub>, P<sub>n</sub> grafının uç köşeleri veya uçları denir. \n P<sub>n</sub> patika grafının uzunluğu kenar sayısına eşittir. Bu uzaklık d(v<sub>n</sub>,v<sub>n</sub>) şeklinde gösterilir v<sub>n</sub> ile v<sub>n</sub> arasındaki en kısa uzaklık olarak tanımlanır.");
    }   else if (userText.toLowerCase().includes("devir grafları")) {
        sendBotMessage("Devir Grafları, Bir patika grafının iki uç noktasının birleştirilmesiyle elde edilen graftır. n köşeli ve n kenarlı olan bir devir grafı C<sub>n</sub> şeklinde gösterilir ve n > 2 olmalıdır.");
    }   else if (userText.toLowerCase().includes("yıldız grafları")) {
        sendBotMessage("...");
    }   else if (userText.toLowerCase().includes("duble yıldız grafları")) {
        sendBotMessage("...");
    }








    else {
        sendBotMessage("Bu sorunun cevabını bilmiyorum. Lütfen tablodan konulara bakın.");
    }
}

window.onload = function() {
    sendBotMessage("Hoşgeldiniz! Aşağıdaki konu başlıklarından devam edebilirsiniz:\n- Basit Sorular\n- Matematik Konuları");
};
