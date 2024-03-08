// let saldo = 0;

// const TampilkanSaldo = document.getElementById('TampilkanSaldo');

// function formatRupiah(angka) {
//     return angka.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
// }

// function updateTampilkanSaldo() {
//     TampilkanSaldo.textContent = "Saldo: " + formatRupiah(saldo);
// }

// function tambahSaldo() {
//     let tambahan = parseInt(window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:"));
//     if (!isNaN(tambahan)) {
//         if (tambahan !== 0) {
//             saldo += tambahan;
//             updateTampilkanSaldo();
//             window.alert("Saldo baru: " + formatRupiah(saldo));
//         } else {
//             window.alert("Tidak boleh menambahkan saldo sebesar 0.");
//         }
//     } else {
//         window.alert("Saldo Yang Dimasukkan Tidak Sesuai Kriteria.");
//     }
// }

// function kurangiSaldo() {
//     let pengurangan = parseInt(window.prompt("Masukkan jumlah saldo yang ingin dikurangi:"));
//     if (!isNaN(pengurangan)) {
//         if (pengurangan !== 0 && pengurangan <= saldo) {
//             saldo -= pengurangan;
//             updateTampilkanSaldo();
//             window.alert("Saldo baru: " + formatRupiah(saldo));
//         } else if (pengurangan === 0) {
//             window.alert("Tidak boleh mengurangkan saldo sebesar 0.");
//         } else {
//             window.alert("Saldo tidak mencukupi.");
//         }
//     } else {
//         window.alert("Saldo Yang Dimasukkan Tidak Sesuai Kriteria.");
//     }
// }

// updateTampilkanSaldo();

class BankAccount {
    
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }

    TampilkanSaldo = document.getElementById('TampilkanSaldo');

    formatRupiah(angka) {
    return angka.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    }

    updateTampilkanSaldo() {
    TampilkanSaldo.textContent = "Saldo: " + this.formatRupiah(this.balance);
    }

    deposit() {
        let Saldodeposit = parseInt(window.prompt("Masukkan jumlah saldo yang untuk deposit:"));
        setTimeout(() => {
        if (!isNaN(Saldodeposit)) {
            if (Saldodeposit !== 0) {
                this.balance += Saldodeposit;
                this.updateTampilkanSaldo();
                window.alert("Deposit Berhasil Saldo saat ini: " + this.formatRupiah(this.balance));
            }else {
                window.alert("Tidak boleh deposit dengan saldo sebesar 0.");
            }
        }else {
            window.alert("Saldo Yang Dimasukkan Tidak Sesuai Kriteria.");
        }
    }, 2000); // Menunda eksekusi selama 2 detik
    }

    withdraw() {
        let Saldowithdraw = parseInt(window.prompt("Masukkan jumlah saldo yang untuk withdraw:"));
        setTimeout(() => {
        if (!isNaN(Saldowithdraw)) {
            if (Saldowithdraw !== 0 && Saldowithdraw <= this.balance) {
                this.balance -= Saldowithdraw;
                this.updateTampilkanSaldo();
                window.alert("Withdraw Berhasil Saldo saat ini: " + this.formatRupiah(this.balance));
            }else if (Saldowithdraw === 0) {
                window.alert("Tidak boleh withdraw dengan saldo sebesar 0.");
            } else {
                window.alert("Saldo tidak mencukupi.");
            }
        } else {
            window.alert("Saldo Yang Dimasukkan Tidak Sesuai Kriteria.");
        }
    }, 3000); // Menunda eksekusi selama 3 detik
    }
}

// Export kelas BankAccount
export default BankAccount;
