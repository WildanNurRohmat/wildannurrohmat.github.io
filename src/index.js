if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    });
}

const laundry = [ 
    {
    "name": "baju",
    "label_name": "baju"
    "harga": "20000",
},
{
    "name": "celana",
    "label_name": "celana"
    "harga": "10000",
},
{
    "name": "selimut",
    "label_name": "selimut"
    "harga": "100000",
},


let[dataBarang, listBarang,alert,elGrandTotal,GrandTotal] = [],
document.getElementByld("laundry"),
document.getElementById("barang"),
document.getElementById("grandtotal"),
]

const uniqBarang =() =>{}