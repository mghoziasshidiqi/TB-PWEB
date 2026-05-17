const express = require('express');
const session = require('express-session');
const path = require('path');
const db = require('./db'); // Pastikan koneksi DB kamu sudah benar
const router = require('./routes'); // Mengambil rute dari routes.js

const app = express();

// 1. SETTINGS & TEMPLATE ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 2. BODY PARSER (Wajib untuk menangkap data dari Form Login)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 3. KONFIGURASI SESSION (Kunci utama agar tidak "mantul")
app.use(session({
    secret: 'kerjasama_fti_unand_2024', // Bebas tapi unik
    resave: false,
    saveUninitialized: false, 
    cookie: { 
        secure: false, // Wajib FALSE karena kita masih pakai localhost (HTTP)
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 // Session berlaku 24 jam
    }
}));

// 4. GLOBAL VARIABLE MIDDLEWARE
// Agar variabel 'user' bisa diakses di semua file EJS tanpa dikirim manual
app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

// 5. MOUNT ROUTER (Wajib di bawah Session)
app.use('/', router);

// 6. START SERVER
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`...........................................`);
    console.log(`Sistem Kerjasama FTI Berjalan di Port ${PORT}`);
    console.log(`Link: http://localhost:${PORT}`);
    console.log(`...........................................`);
});