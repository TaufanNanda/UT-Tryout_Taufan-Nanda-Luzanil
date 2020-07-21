var readline = require('readline'), rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Masukkan angka: ');
rl.prompt();
angka = 0;

rl.on('line', function(line) {
  	num = line.trim().split('');
  	for (var i = 0; i <= num.length; i++){
  		if(num[i] != "=" && isNaN(num[i])){
  			continue;
  		}
		else if(num[i] === "="){
   			console.log('Hasil: ' + angka);
        	process.exit(0);
    	}
  		else{
  			angka = angka + parseInt(num[i]);
  		}
  	}
  	rl.prompt();
}).on('close', function() {
    console.log('Program Berhenti');
    process.exit(0);
});