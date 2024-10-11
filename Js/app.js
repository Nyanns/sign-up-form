// Ambil elemen input password dan konfirmasi password dari DOM
const passwordInput = document.querySelector('#password'); // Input untuk password pertama
const passwordConfirm = document.querySelector('#confirm-password'); // Input untuk konfirmasi password
const form = document.querySelector('.form'); // Ambil elemen form

// Fungsi untuk memeriksa apakah password dan konfirmasi password cocok
const checkPassword = () => {
    const pass1Value = passwordInput.value; // Nilai dari input password pertama
    const pass2Value = passwordConfirm.value; // Nilai dari input konfirmasi password

    // Jika konfirmasi password masih kosong (belum diisi)
    if (!pass2Value) {
        passwordInput.style.border = '1px solid green'; // Setel border hijau di password pertama (valid)
        passwordInput.previousElementSibling.style.color = 'green'; // Setel warna label password menjadi hijau
    }
    // Jika password dan konfirmasi password tidak sama
    else if (pass1Value !== pass2Value) {
        passwordInput.style.border = '1px solid red'; // Setel border merah di password pertama (tidak cocok)
        passwordInput.previousElementSibling.style.color = 'red'; // Setel warna label password pertama menjadi merah
        passwordConfirm.style.border = '1px solid red'; // Setel border merah di konfirmasi password (tidak cocok)
        passwordConfirm.previousElementSibling.style.color = 'red'; // Setel warna label konfirmasi password menjadi merah
    }
    // Jika password dan konfirmasi password cocok
    else {
        passwordInput.style.border = '1px solid green'; // Setel border hijau di password pertama (cocok)
        passwordInput.previousElementSibling.style.color = 'green'; // Setel warna label password pertama menjadi hijau
        passwordConfirm.style.border = '1px solid green'; // Setel border hijau di konfirmasi password (cocok)
        passwordConfirm.previousElementSibling.style.color = 'green'; // Setel warna label konfirmasi password menjadi hijau
    }
};

// Event listener untuk input password dan konfirmasi password
passwordInput.addEventListener('input', checkPassword);
passwordConfirm.addEventListener('input', checkPassword);

// Event listener untuk form submit
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah perilaku default form (refresh halaman)
    const pass1Value = passwordInput.value; // Ambil nilai password pertama
    const pass2Value = passwordConfirm.value; // Ambil nilai konfirmasi password

    // Periksa apakah password valid
    if (pass1Value && pass2Value && pass1Value === pass2Value) {
        // Jika valid, tampilkan alert atau feedback ke pengguna
        alert("Form submitted successfully!"); // Feedback sukses
        form.reset(); // Reset form setelah submit berhasil
        checkPassword(); // Panggil checkPassword untuk reset styling
    } else {
        alert("Please make sure your passwords match and are not empty."); // Feedback jika tidak valid
    }
});
