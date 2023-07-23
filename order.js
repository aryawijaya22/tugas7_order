let itemOrder = [
    {
        dipesan :false,
        harga : 10000,
        nama : 'Seblak Biasa',
    },
    {
        dipesan :false,
        harga : 13000,
        nama : 'Seblak Batagor',
    },
    {
        dipesan :false,
        harga : 15000,
        nama : 'Seblak Balungan',
    },
    {
        dipesan :false,
        harga : 17000,
        nama : 'Seblak Seafood',
    },
    {
        dipesan :false,
        harga : 20000,
        nama : 'Seblak Komplit',
    }
]

let totalOrder = 0;

const textTotal = document.getElementById('last-item');

const itemTerpilih = document.getElementsByClassName('item');

for(let i = 0; i < itemTerpilih.length; i++){
    itemTerpilih[i].addEventListener('click', function(){
        setItemPemesanan(i, itemTerpilih[i]);
    });
}

function setItemPemesanan(index, elemen){
    if (itemOrder[index].dipesan == false){
        itemOrder[index].dipesan = true;
        elemen.style.backgroundColor = 'brown';
        elemen.style.color = 'white';
        totalOrder = totalOrder + itemOrder[index].harga;
    }
    else{
        itemOrder[index].dipesan = false;
        elemen.style.backgroundColor = 'aqua';
        elemen.style.color = 'black';
        totalOrder = totalOrder - itemOrder[index].harga;
    }
    textTotal.innerHTML = "Total <span>Rp " + totalOrder + " </span>";
}