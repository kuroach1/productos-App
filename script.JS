class Product{
    constructor(name,price,quantity,date){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.date = date;
    }
}

class UI{
    showMessage(message,cssClass){
        const element= document.createElement('div');
        element.className = `alert alert-${cssClass} mt-2`;
        element.appendChild(document.createTextNode(message));
        const container=document.querySelector('.container');
        const app= document.querySelector('#app');
        container.insertBefore(element, app);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

document.getElementById(`product-form`).addEventListener(`submit`, function(e){
    e.preventDefault();
    const ui = new UI();
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;
    const date = document.getElementById('date').value;

    if (name && price && quantity && date) {
        const product = new Product(name, price, quantity, date);
        console.log(product);
        ui.showMessage(`Product added successfully`, `success`);
    } else {
        ui.showMessage(`Please fill out all fields`, `danger`);
    }
});

