// Manipulasi Array

// 1. Menambah isi array
// var arr = [];
// arr[0] = "Maudi";
// arr[1] = "Syiva";
// arr[2] = "Gita";
// arr[6] = "Arzeti";

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Maudi", "Syiva", "Gita", "Arzeti"];
// arr[1] = undefined;
// console.log(arr);


// 3. Menampilkan isi array
// var arr = ["Maudi", "Syiva", "Gita"];

// for( var i = 0; i < arr.length; i++ ) {
// console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
//}

// Method pada array
var arr = ['Maudi', 'Gita', 'Arzeti'];
// 1. join
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Doddy', 'Fitri');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr. unshift('Doddy');
arr.shift();
console.log(arr.join(' - '));