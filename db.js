const mysql = require('mysql2');

// Membuat koneksi ke database MySQL 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // User default MySQL di XAMPP/Laragon
  password: '',           // Password default biasanya kosong
  database: 'fti_kerjasama' // Nama database sesuai ERD [cite: 32]
});

// Menghubungkan ke database
connection.connect((err) => {
  if (err) {
    console.error('Koneksi database GAGAL: ' + err.stack);
    return;
  }
  console.log('Koneksi database BERHASIL. Terkoneksi sebagai ID: ' + connection.threadId);
});

// Ekspor koneksi agar bisa digunakan di routes.js dan server.js
module.exports = connection;