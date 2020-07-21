function reverse(str) {
    var pisahKata = str.split("");
    var balikArray = pisahKata.reverse();
    var gabungKata = balikArray.join("");
    return gabungKata;
}
 
console.log(reverse("semua kata-kata"));