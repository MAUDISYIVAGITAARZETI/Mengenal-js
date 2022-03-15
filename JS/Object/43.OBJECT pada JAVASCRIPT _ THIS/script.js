// this
// var a = 10;
// console.log(window.a);

// cara 1 - function declaration
// function hallo() {
// 	console.log(this);
// 	console.log('hallo');
// }
// this.hallo();
// this mengembalikan object 2







// cara 2 - object literal
// var obj = {a : 87, nama: 'Mondy'};
// obj.hallo = function() {
// 	console.log(this);
// 	console.log('hallo');
// }
// obj.hallo();
// this mengembalikan object yang bersangkutan












// cara 3 - constructor
function Hallo() {
	console.log(this);
	console.log('hallo');
}
var obj1 = new Hallo();
var obj2 = new Hallo();
// this mengembalikan object yang baru dibuat