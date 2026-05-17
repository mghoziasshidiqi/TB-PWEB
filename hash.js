const bcrypt = require('bcryptjs');

// Ganti teks di bawah dengan password yang ingin kamu jadikan hash
const passwordManual = 'naufal'; 

bcrypt.hash(passwordManual, 10, (err, hash) => {
    if (err) {
        console.error("Gagal melakukan hashing:", err);
        return;
    }
    
    console.log("=========================================");
    console.log(`Password Asli : ${passwordManual}`);
    console.log(`Hasil Hash    : ${hash}`);
    console.log(`Panjang Hash  : ${hash.length} karakter`);
    console.log("=========================================");
    console.log("SILAKAN COPY HASIL HASH DI ATAS KE DATABASE");
});