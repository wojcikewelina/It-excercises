// 1.Stwórz stronę “Lista zakupów”, strona powinna zawierać:
// a.formularz na wprowadzanie danych (nazwa, ilość)
// oraz przycisk “dodaj”
// b.tabelkę z przedmiotami do kupienia z przyciskami do edycji i usuwania przedmiotó;
window.onload = () => {

    let idToSet = 0;
    let tableToStorage = [];
    console.log(tableToStorage)

    // Ta część kodu zapobiega domyślnemu odświeżaniu strony po naciśnięciu przycisku

    var formOfShpping = document.querySelector("form");
    formOfShpping.onsubmit = (element) => {
            element.preventDefault();
        }
        // W tej części tworzę nowy element ul

    var tabOfProducts = document.createElement("ul");
    document.body.appendChild(tabOfProducts);

    // w tej części dodaję elementy z localStorage;

    function setItemsToLocalStorage() {
        var strinifyTableToStorage = JSON.stringify(tableToStorage);
        localStorage.setItem("shopping list", strinifyTableToStorage)
    }

    // w tej części 

    function getItemsFromLocalStorage() {
        var itemsFromLocalStorage = JSON.parse(localStorage.getItem("shopping list"));
        console.log(itemsFromLocalStorage);

        if (itemsFromLocalStorage === null) {
            itemsFromLocalStorage = [];
        }

        for (var i = 0; i < itemsFromLocalStorage.length; i++) {
            createNewProduct(itemsFromLocalStorage[i][0], itemsFromLocalStorage[i][1])
        }
    }


    getItemsFromLocalStorage();

    // Tworzę produkt i nadaję mu unikalne ID:

    function createNewProduct(nameOfProduct, amountOfProduct) {
        var newLiOfProduct = document.createElement("li");
        tabOfProducts.appendChild(newLiOfProduct);
        newLiOfProduct.innerText = nameOfProduct + ", " + amountOfProduct + " szt.   ";

        newLiOfProduct.setAttribute("id", `productNr${idToSet}`);

        var newButtonX = document.createElement("button");
        newButtonX.innerText = "x";
        newButtonX.addEventListener("click", () => {
            var findParent = newButtonX.parentNode;
            findParent.remove();
        })

        var newButtonEdit = document.createElement("button");
        newButtonEdit.innerText = "Edit";


        newLiOfProduct.appendChild(newButtonX)
        newLiOfProduct.appendChild(newButtonEdit);

        // tworzenie value dla localStorage:

        tableToStorage[idToSet] = [nameOfProduct, amountOfProduct]
        setItemsToLocalStorage()

        // Zmiana indywidualnego ID;

        idToSet++;
    }

    var submitButton = document.getElementById("sendData");
    var nameOfProductInput = document.getElementById("sendName");
    var amountOfProductInput = document.getElementById("sendAmount");

    submitButton.addEventListener("click", () => {
        createNewProduct(nameOfProductInput.value, amountOfProductInput.value)
    });
}




// 2.Napisz funkcję do generowania unikalnego ID dla przedmiotu

//3.Po naciśnięciu przycisku dodaj, pobierz dane z formularza i dodaj je do localstorage, oraz odśwież listę zakupów

//4.Zaimplementuj funkcjonalność usuwania i edycji5.Wykorzystaj localstoragedo zapewnienia trwałości danych