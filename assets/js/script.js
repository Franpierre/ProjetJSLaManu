//Switch catégories
var catArray = [document.getElementById('classic'), document.getElementById('special'), document.getElementById('led')];
catArray[1].style.display = 'none';
catArray[2].style.display = 'none';
//Space
function switchCat(cat) {
    switch (cat) {
        case 0:
            catArray[0].style.display = 'block';
            catArray[1].style.display = 'none';
            catArray[2].style.display = 'none';
        break;
        case 1:
            catArray[0].style.display = 'none';
            catArray[1].style.display = 'block';
            catArray[2].style.display = 'none';
        break;
        case 2:
            catArray[0].style.display = 'none';
            catArray[1].style.display = 'none';
            catArray[2].style.display = 'block';
        break;  
    }
}
//Classes canard
class Canard {
    constructor(name, price, description, ref, category, img, qty) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.ref = ref;
        this.category = category;
        this.img = img;
        this.qty = qty;
    }
}
let canard1 = new Canard(
    'Canard Classique Noir',
    10,
    'Petit canard noir 12cm x 8cm',
    '000',
    'Classique',
    'assets/img/classic/classicBlack.jpg',
    0,
)
let canard2 = new Canard(
    'Canard Classique Vert',
    10,
    'Petit canard vert 12cm x 8cm',
    '001',
    'Classique',
    'assets/img/classic/classicGreen.jpg',
    0,
)
let canard3 = new Canard(
    'Canard Classique Rose',
    10,
    'Petit canard rose 12cm x 8cm',
    '002',
    'Classique',
    'assets/img/classic/classicPink.jpg',
    0,
)
let canard4 = new Canard(
    'Canard Classique Jaune',
    10,
    'Petit canard jaune 12cm x 8cm',
    '003',
    'Classique',
    'assets/img/classic/classicYellow.jpg',
    0,
)
let canard5 = new Canard(
    'Canard Classique Rouge',
    10,
    'Petit canard rouge 12cm x 8cm',
    '004',
    'Classique',
    'assets/img/classic/classicRed.jpg',
    0,
)
let canard6 = new Canard(
    'Canard Classique Bleu',
    10,
    'Petit canard bleu 12cm x 8cm',
    '005',
    'Classique',
    'assets/img/classic/classicBlue.jpg',
    0,
)
//Fonction Set
var allDucks = [canard1, canard2, canard3, canard4, canard5, canard6];

var selectedDuck;
function setDuck(activeDuck) {
    for (let index = 0; index < allDucks.length; index++) {
        var code = allDucks[index].ref;
        if (code == activeDuck) {
            document.getElementById('price').innerHTML = allDucks[index].price + ' €';
            document.getElementById('name').innerHTML = allDucks[index].name;
            document.getElementById('description').innerHTML = allDucks[index].description;
            document.getElementById('image').src = allDucks[index].img;
            selectedDuck = index;
        }
    }
}
//Ajouter au panier
var cartArray = [];
function addToCart() {
    
    cartArray.push(allDucks[selectedDuck]);

    for (let index = 0; index < cartArray.length; index++) {
        let ttt = cartArray[index].ref;
        let ref = allDucks[selectedDuck].ref;
        if (ttt.includes(ref)) {
            alert('aille');
        }
    }
    
    console.log(cartArray.includes(allDucks[selectedDuck].ref));
    
    /* for (let index = 0; index < cartArray.length; index++) {
        if (allDucks[selectedDuck].ref == cartArray[index].ref) {
            cartArray.pop();
            allDucks[selectedDuck].qty += 1;
            console.log('DEJA PRESENT !!! et il y en a : ' + allDucks[selectedDuck].qty);
        }
    } */
    
    /* for (let index = 0; index < cartArray.length; index++) {
        if (allDucks[selectedDuck].ref == cartArray[index].ref) {
            allDucks[selectedDuck].qty += 1;
            console.log('quantité = ' + allDucks[selectedDuck].qty);
        } else {
            
        }
    } */
}



/* var add = document.createElement('tr');
            add.innerHTML = '<th scope="row">' + cartArray[index].ref + '</th> <td>' +
                cartArray[index].name + '</td> <td>' + cartArray[index].price + '€' +
                '</td><td><a onclick="removeDuck()"><i class="fas fa-times"></i></a></td>'
            document.getElementById('arrayIncrement').appendChild(add); */
//Afficher panier
/* function showCart() {
    for (let index = 0; index < cartArray.length; index++) {
        var add = document.createElement('tr');
        add.innerHTML = '<th scope="row">' + cartArray[index].ref + '</th> <td>' +
            cartArray[index].name + '</td> <td>' + cartArray[index].price + '€' +
            '</td><td><a onclick="removeDuck(' + selectedDuck + ')"><i class="fas fa-times"></i></a></td>'
        document.getElementById('arrayIncrement').appendChild(add);
    }
}
//Retirer article
function removeDuck(item) {
    cartArray.splice(item, 0);

}

//bouton ajout/retrait article */
