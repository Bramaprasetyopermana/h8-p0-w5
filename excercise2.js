// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.
//
// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.
//
// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
function naikAngkot(arrPenumpang) {
  var result = []
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  for (var i = 0; i < arrPenumpang.length; i++) {
    var count = []
    var hasil = {}
    hasil.penumpang = arrPenumpang[i][0]
    hasil.naikDari = arrPenumpang[i][1]
    hasil.tujuan = arrPenumpang[i][2]
    hasil.bayar = 0
    result.push(hasil)
    for (var j = 0; j < rute.length; j++) {
      if (arrPenumpang[i][1] === rute[j]) {
        count.push(j)
      }
      if (arrPenumpang[i][2]===rute[j]) {
        count.push(j)
      }
    }
    // console.log(count);
    var banyakRute=count[1]-count[0]
    hasil.bayar=banyakRute * 2000
  }
  return result
}
//TEST CASE
console.log(naikAngkot([
  ['Dimitri', 'B', 'F'],
  ['Icha', 'A', 'B'],
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
