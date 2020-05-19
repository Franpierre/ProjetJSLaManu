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
    1,
)
let canard2 = new Canard(
    'Canard Classique Vert',
    10,
    'Petit canard vert 12cm x 8cm',
    '001',
    'Classique',
    'assets/img/classic/classicGreen.jpg',
    1,
)
let canard3 = new Canard(
    'Canard Classique Rose',
    10,
    'Petit canard rose 12cm x 8cm',
    '002',
    'Classique',
    'assets/img/classic/classicPink.jpg',
    1,
)
let canard4 = new Canard(
    'Canard Classique Jaune',
    10,
    'Petit canard jaune 12cm x 8cm',
    '003',
    'Classique',
    'assets/img/classic/classicYellow.jpg',
    1,
)
let canard5 = new Canard(
    'Canard Classique Rouge',
    10,
    'Petit canard rouge 12cm x 8cm',
    '004',
    'Classique',
    'assets/img/classic/classicRed.jpg',
    1,
)
let canard6 = new Canard(
    'Canard Classique Bleu',
    10,
    'Petit canard bleu 12cm x 8cm',
    '005',
    'Classique',
    'assets/img/classic/classicBlue.jpg',
    1,
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
    for (i = 0; i < cartArray.length; i++){
      for (x = 0; x < cartArray.length; x++){
          if (cartArray[i].ref == cartArray[x].ref && i != x) {
            alert('Cet article à déjà été ajouté au panier ! Modifiez les quantités pour en obtenir plus !');
            console.log('SAME ones in ARRAY: ' + cartArray[i]);
            cartArray.pop();
            cartArray[i].qty += 1;
        }else console.log('no same ones');
      }
    }
    console.log(cartArray);
}
//Afficher panier
function showCart() {
    document.getElementById('arrayIncrement').innerHTML = ' ';
    for (let index = 0; index < cartArray.length; index++) {
        var add = document.createElement('tr');
        add.innerHTML = '<th scope="row">' + cartArray[index].ref + '</th>' +
            '<td>' + cartArray[index].name + '</td>' +
            '<td>' + cartArray[index].price + '€' + '</td>' +
            '<td><select class="md-form mdb-select colorful-select dropdown-primary"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></td>' +
            '<td onclick="removeDuck(' + 'this.parentNode' + ')"><i class="fas fa-times"></i></td>';
        document.getElementById('arrayIncrement').appendChild(add);
    }
}
//Retirer article
function removeDuck(item){
    item.remove();
}
//Prix Total
function sum() {
    var somme = 0;
    for (let index = 0; index < cartArray.length; index++) {
        somme += cartArray[index].price; 
    }
    document.getElementById('totalPrice').innerHTML = somme + '€';
    console.log(somme);
}