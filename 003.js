var arr = []
var avrArr = 0;
while(arr.length <= 10){
    var r = Math.floor(Math.random()*100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}

for(i = 0; i <arr.length; i++){
   avrArr += arr[i];
}

console.log("Nilai Maksimal "+Math.max(...arr));
console.log("Nilai Minimal "+Math.min(...arr));
console.log("Nilai Rata-rata "+avrArr / arr.length);