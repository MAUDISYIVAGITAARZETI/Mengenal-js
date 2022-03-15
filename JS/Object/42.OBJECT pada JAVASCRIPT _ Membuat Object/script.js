// Membuat Object
// Object Literal
var mhs1 = {
	nama : 'Mondy Gita',
	nrp : '837659080',
	email : 'mondygit@gmail.com',
	jurusan : 'Rekayasa Perangkat Lunak'
}

var mhs2 = {
	nama : 'Anifa Veby',
	nrp : '839265480',
	email : 'anifa@gmail.com',
	jurusan : 'Kepariwisataan'
}

// Function Declaration
function buatobjectMahasiswa(nama, nrp, email, jurusan) {
	var mhs = {};
	mhs.nama = nama;
	mhs.nrp = nrp;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs;
}

var mhs3 = buatobjectMahasiswa('Azhar Ashraf', '763762543', 'Ashraf@gmail.com', 'Mekatronika')


// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
	// var this = {};
	this.nama = nama;
	this.nrp = nrp;
	this.email = email;
	this.jurusan = jurusan;
	// return this;
}

var mhs4 = new Mahasiswa('Riko Gusti', '732483640', 'rico@gmail.com', 'Elektronika Industri');



