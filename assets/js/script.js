//Switch catégories
var catArray = [document.getElementById('classic'), document.getElementById('special'), document.getElementById('led')];
catArray[1].style.display = 'none';
catArray[2].style.display = 'none';
//space
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
/*Des produits qui devront avoir un nom, une image, une description, une catégorie, une ref et un prix.*/
class Canard {
    constructor(name, price, description, ref, category, img) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.ref = ref;
        this.category = category;
        this.img = img;
    }
}
let canard1 = new Canard(
    'Canard Classique Noir',
    10,
    'Petit canard noir 12cm x 8cm',
    '001',
    'Classique',
    'assets/img/classic/classicBlack.jpg',
)
let canard2 = new Canard(
    'Canard Classique Vert',
    10,
    'Petit canard vert 12cm x 8cm',
    '002',
    'Classique',
    'assets/img/classic/classicGreen.jpg'
)
let canard3 = new Canard(
    'Canard Classique Rose',
    10,
    'Petit canard rose 12cm x 8cm',
    '003',
    'Classique',
    'assets/img/classic/classicPink.jpg',
)
let canard4 = new Canard(
    'Canard Classique Jaune',
    10,
    'Petit canard jaune 12cm x 8cm',
    '004',
    'Classique',
    'assets/img/classic/classicYellow.jpg',
)
let canard5 = new Canard(
    'Canard Classique Rouge',
    10,
    'Petit canard rouge 12cm x 8cm',
    '005',
    'Classique',
    'assets/img/classic/classicRed.jpg',
)
let canard6 = new Canard(
    'Canard Classique Bleu',
    10,
    'Petit canard bleu 12cm x 8cm',
    '006',
    'Classique',
    'assets/img/classic/classicBlue.jpg',
)
//fonction Set
var allDucks = [canard1, canard2, canard3, canard4, canard5, canard6];
function setDuck(activeDuck) {
    document.getElementById('price').innerHTML = allDucks[activeDuck].price + ' €';
    document.getElementById('name').innerHTML = allDucks[activeDuck].name;
    document.getElementById('description').innerHTML = allDucks[activeDuck].description;
    document.getElementById('image').src = allDucks[activeDuck].img;
}

//Ajouter au panier

function addToCart() {
    
}