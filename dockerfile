# Node.js resmi base imajını kullan
FROM node:14

# Çalışma dizinini ayarla
WORKDIR /usr/src/app

# Uygulama dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama kaynak kodunu kopyala
COPY . .

# Uygulama için bir port belirle
EXPOSE 8000

# Uygulamayı başlat
CMD [ "node", "app.js" ]
