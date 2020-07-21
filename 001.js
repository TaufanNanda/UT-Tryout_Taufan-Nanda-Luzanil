const prompt = require('prompt');

prompt.start();

console.log("Masukkan nilai/grade!");
prompt.get(['grade'], function (err, result) {
    if (err) { return onErr(err); }

    if (result.grade >= 90) {
		console.log("\nHuruf Mutu dari grade tersebut adalah A");
	} else if(result.grade > 80 && result.grade < 89){
		console.log("\nHuruf Mutu dari grade tersebut adalah B");
	} else if(result.grade > 70 && result.grade < 79){
		console.log("\nHuruf Mutu dari grade tersebut adalah C");
	} else if(result.grade > 60 && result.grade < 69){
		console.log("\nHuruf Mutu dari grade tersebut adalah D");
	} else if(result.grade < 59){
		console.log("\nHuruf Mutu dari grade tersebut adalah E");
	} else {
		console.log("\nGrade yang Anda masukkan salah");
	}
});

function onErr(err) {
    console.log(err);
    return 1;
}