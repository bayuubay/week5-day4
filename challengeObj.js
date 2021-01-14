const data = [
  [
    {
      transaksi: {
        id: 1,
        name: "Pepsodent",
        harga: 5000,
        qty: 1
      }
    },
    {
      transaksi: {
        id: 2,
        name : "Kecap ABC",
        harga: 10000,
        qty: 12
      }
    }
  ],
  [
    {
      transaksi: {
        id: 12,
        name: "Shampo Pantene",
        harga: 20000,
        qty: 10
      }
    }
  ]
]

//   //1. nilai qty kecap ABC dari data transaksi
// console.log(`qty dari ${data[0][1].transaksi.name} adalah: ${data[0][1].transaksi.qty} pcs`);

//  //2. hitung semua total trx yang ada dalam variable data
// let dataJmlTrx1 = data[0].length+data[1].length

// console.log(`nilai total transaksi data adalah : ${dataJmlTrx1}`)


//2. nilai satuan barang shampoo pantene
const trx = data[1][0].transaksi;//disingkat
console.log(trx.harga/trx.qty)