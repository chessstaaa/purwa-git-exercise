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
}

{
    // Write code to format number to IDR
    let duid = 1000;
    let idr = duid.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'});
    console.log(idr);
}

{
    // Write code to change first letter of string to capital
    let str = "hello world";
    let strKapital = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(strKapital);

}