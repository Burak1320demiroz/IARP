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

function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const tableContainer = document.getElementById('math-table');
    
    // Chatbotu göster ve tabloyu gizle
    if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
        chatbotContainer.style.display = 'block';
        tableContainer.style.display = 'none';
    } else {
        chatbotContainer.style.display = 'none';
    }
}

function toggleTable() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const tableContainer = document.getElementById('math-table');
    
    // Tabloyu göster ve chatbotu gizle
    if (tableContainer.style.display === 'none' || tableContainer.style.display === '') {
        tableContainer.style.display = 'block';
        chatbotContainer.style.display = 'none';
    } else {
        tableContainer.style.display = 'none';
    }
}
// Python Tablosunu Göster veya Gizle
function togglePythonTable() {
    const pythonTable = document.getElementById('python-libraries-table');
    if (pythonTable.style.display === 'none' || pythonTable.style.display === '') {
        pythonTable.style.display = 'block';
    } else {
        pythonTable.style.display = 'none';
    }
}
function toggleSection(sectionId) {
    // Önceki tüm bölümleri gizle
    const sections = ['chatbot-container', 'math-table', 'python-libraries-table'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        section.style.display = 'none';
    });

    // Seçilen bölümü göster
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

function closeAlert() {
    const alertBox = document.getElementById('alert-box');
    alertBox.style.display = 'none';
}



// Kullanıcı mesajına göre cevap verecek fonksiyon
function handleUserMessage(userText) {
    // Kullanıcıdan alınan metni küçük harfe çevir
    const lowerCaseUserText = userText.toLowerCase();
    // Basit Sorular
    if (userText.toLowerCase().includes("basit sorular")) {
        sendBotMessage(`
            Basit sorular:
            1. IARP nedir?
            2. IARP amacı nedir?
            3. Matematik anlamında ne yapabilir?
            4. Hangi konular?
            5. Merhaba 
            6. Nasılsın?
            7. Kaç yaşındasın?
            8. Ne yapabiliyorsun?
            9. Hoşça kal
        `);
    } else if (userText.toLowerCase().includes("iarp nedir?")) {
        sendBotMessage("IARP, gelişmekte olan bir asistan chatbottur. Matematik sorularını çözmek ve bilgi sağlamak amacıyla tasarlanmıştır.");
    } else if (userText.toLowerCase().includes("iarp amacı nedir?")) {
        sendBotMessage("IARP'nin amacı, matematiksel ve başka konularda asistanlık yapmaktır.");
    } else if (userText.toLowerCase().includes("matematik anlamında ne yapabilir?")) {
        sendBotMessage("IARP, matematiksel problemlerin çözümüne yardımcı olmak için geliştirildi.");
    } else if (userText.toLowerCase().includes("hangi konular?")) {
        sendBotMessage("IARP, lineer cebir, analiz, olasılık, istatistik, sayılar teorisi, graf teorisi ve daha birçok matematik konusunu kapsar.");
    } else if (userText.toLowerCase().includes("merhaba") || userText.toLowerCase().includes("selam")) {
        sendBotMessage("Merhaba! Size nasıl yardımcı olabilirim?");
    } else if (userText.toLowerCase().includes("nasılsın")) {
        sendBotMessage("Teşekkür ederim, gayet iyiyim! Sizin için ne yapabilirim?");
    } else if (userText.toLowerCase().includes("kaç yaşındasın")) {
        sendBotMessage("Ben bir yapay zeka modeliyim, bu yüzden yaşım yok ama hep öğrenmeye devam ediyorum!");
    } else if (userText.toLowerCase().includes("ne yapabiliyorsun")) {
        sendBotMessage("Matematik soruları çözebilir, bilgi verebilir ve temel sohbet edebilirim.");
    } else if (userText.toLowerCase().includes("hoşça kal") || userText.toLowerCase().includes("görüşürüz")) {
        sendBotMessage("Hoşça kalın! Tekrar görüşmek üzere.");
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
    // Python Konuları
    else if (userText.toLowerCase().includes("python ile matematik")) {
        sendBotMessage("Python ile Matematik:\n - Python Numpy Kütüphanesi");
    }







    else {
        sendBotMessage("Bu sorunun cevabını bilmiyorum. Lütfen tablodan konulara bakın.");
    }
}

window.onload = function() {
    sendBotMessage("Hoşgeldiniz! Aşağıdaki konu başlıklarından devam edebilir:\n - Basit Sorular \n- Python ile Matematik\n- Matematik Konuları");
};
