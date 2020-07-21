var kali = function pengali(a, b) {
    if (b === 1) {
        return a;
    } else {
        return a + pengali(a, b - 1)
    }
};

console.log(kali(3, 4));