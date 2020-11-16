# Selamat datang di NEWS APP

#### cara setup project
1. Daftarkan diri di www.newsapi.org dan dapatkan key api
2. Buat sebuah file config_key.js | Path: /src/config_key.js 
3. isikan config_key.js dengan 
```
   const fetch_link = "https://newsapi.org/v2" 
   const key_news_api = "super_secret_key"
   export{
    fetch_link,
    key_news_api
   }
```
