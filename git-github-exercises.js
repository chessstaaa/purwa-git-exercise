// EXCERCISES

{
    // Write a code to display multiplication table of given integer
    let nomor = 9; // Pilih no. 9
    console.log(`Perkalian dari ${nomor}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${nomor} x ${i} = ${nomor * i}`);
    }
}

{
    // Write code to check whether a string is palindrome or not
    let kata = 'madam';
    let kataa = kata.split('').reverse().join('');
    if (kata === kataa) {
        console.log(`${kata} adalah palindrome`);
    } else {
        console.log(`${kata} bukan palindrome`);
    }

    //Jawaban kedua
    let text = "madam"
    let isPalindrome = true // nilai awalnya diasumsikan sebagai true

    for (let i = 0; i < text.length / 2; i++) {
        if (text[i] !== text[text.length - 1 - i]) {
            isPalindrome = false
        }
    }

    if (isPalindrome) {
        console.log(text + " -> palindrome")
    } else {
        console.log(text + " -> not a palindrome")
    }

}

{
    // Write code to convert cm to km
    let satuanCenti = 1000;
    let satuanKilo = satuanCenti / 100000;
    console.log(`${satuanCenti} cm = ${satuanKilo} km`);

}

{
    //Write code to remove first occurrence of a given 'search string' from a string
    let str = "Hello world";
    let searchStr = "ell";
    let strBaru = str.replace(searchStr, '');
    console.log(strBaru);

    //Jawaban kedua
    let mainString = "Hello World"
    let search = "ell"
    let result = ""

    let found = -1

    // cari posisi pertama search di dalam mainString
    for (let i = 0; i <= mainString.length - search.length; i++) {
        let match = true

        for (let j = 0; j < search.length; j++) {
            if (mainString[i + j] !== search[j]) {
                match = false
            }
        }

        if (match) {
            found = i
        }
    }

    // bangun string baru tanpa substring yang dicari
    if (found !== -1) {
        for (let i = 0; i < mainString.length; i++) {
            if (i >= found && i < found + search.length) {
                continue // lewati karakter search
            }

            result += mainString[i]
        }
    } else {
        result = mainString // kalau tidak ketemu
    }

    console.log(result)
}

{
    // Write code to format number to IDR
    let duid = 1000;
    let idr = duid.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'});
    console.log(idr);

    //Jawaban kedua
    let numberIDR = 1000000
    let str = String(numberIDR)
    let result = "" // untuk menampung hasil konversi

    // kita akan sisipkan titik setiap 3 digit dari belakang
    let count = 0

    for (let i = str.length - 1; i >= 0; i--) {
        result = str[i] + result
        count++
        if (count % 3 === 0 && i !== 0) {
            result = "." + result
        }
    }

    let currency = "Rp. " + result + ",00"
    console.log(currency)
}

{
    // Write code to change first letter of string to capital
    let str = "hello world";
    let strKapital = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(strKapital);

    //Jawaban kedua
    let text = "hello world"
    let result = ""
    let capitalize = true

    for (let i = 0; i < text.length; i++) {
        let char = text[i]

        if (capitalize && char !== "") {

            // ubah ke huruf besar
            let code = char.charCodeAt(0)
            if (code >= 97 && code <= 122) {
                char = String.fromCharCode(code - 32) // ubah ke uppercase lewat table ascii
            }

            capitalize = false
        } else if (char === " ") {
            capitalize = true
        }

        result += char
    }

    console.log(result)

}