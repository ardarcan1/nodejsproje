// HTTP modülünü yükle
const http = require("http");

// HTTP sunucusunu oluştur ve 8000 portunda istekleri dinle
http.createServer((request, response) => {

    // Yanıt HTTP başlığını HTTP durumu ve İçerik tipi ile ayarla
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Yanıt gövdesini "Hello World" olarak gönder
    response.end('Arda World\n');
}).listen(8000);

// Konsol mesajı yazdırır
console.log('Server running at http://127.0.0.1:8000/');
