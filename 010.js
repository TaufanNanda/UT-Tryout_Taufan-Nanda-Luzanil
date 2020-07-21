var orang = [
  { "id": 1, "name": "Udin", "age": 12 },
  { "id": 2, "name": "Reane", "age": 51 },
  { "id": 3, "name": "Budi", "age": 34 },
  { "id": 4, "name": "Agus", "age": 16 },
  { "id": 5, "name": "Sari", "age": 19 },
  { "id": 6, "name": "Ririn", "age": 20 },
  { "id": 7, "name": "Dessy", "age": 23 }
];

function dibawah21(orang){
	console.log("Daftar Orang Berusia Dibawah 21 Tahun =")
	for(i in orang){
		if(orang[i].age <= 21)
		console.log("-> "+orang[i].name + " " + orang[i].age + " tahun");
	}	
}

dibawah21(orang);