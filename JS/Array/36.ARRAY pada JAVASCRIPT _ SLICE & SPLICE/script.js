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

// 1. join
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Doddy', 'Fitri');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('Doddy');
// arr.shift();
// console.log(arr.join(' - '));


// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(1, 2, 'Doddy', 'Fitri');
// console.log(arr.join(' - '));

// 5. slice
// slice(awal,akhir);
var arr = ['Maudi', 'Gita', 'Arzeti', 'Doddy', 'Fitri'];
var arr2 = arr.slice(1,4);
console.log(arr.join(' - '));
console.log(arr2.join(' - '));