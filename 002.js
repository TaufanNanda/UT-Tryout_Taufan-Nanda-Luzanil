const prompt = require('prompt');

prompt.start();

console.log("Masukkan Angka untuk cek ganjil atau genap!");
prompt.get(['angka'], function (err, result) {
    if (err) { return onErr(err); }

    if (result.angka%2 == 0) {
		console.log("\nAngka "+result.angka+" adalah Genap");
	} else {
		console.log("\nAngka "+result.angka+" adalah Ganjil");
	}
});

function onErr(err) {
    console.log(err);
    return 1;
}