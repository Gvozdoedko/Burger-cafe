function Hamburger(size) {
    this.size = size;

    if (this.size == "SIZE_SMALL") {
        this.price = 50;
        this.calories = 20;
    }
    if (this.size == "SIZE_MIDDLE") {
        this.price = 75;
        this.calories = 30;
    }
    if (this.size == "SIZE_LARGE") {
        this.price = 100;
        this.calories = 40;
    }
    this.addTopping = (topping) => {
        this.topping = topping;
        if (this.topping == "TOPPING_CHEESE") {
            this.price = this.price + 10;
            this.calories = this.calories + 20;
        }
        if (this.topping == "TOPPING_SALAD") {
            this.price = this.price + 20;
            this.calories = this.calories + 5;
        }
        if (this.topping == "TOPPING_POTATO") {
            this.price = this.price + 15;
            this.calories = this.calories + 10;
        }
        if (this.topping == "TOPPING_DRESSING") {
            this.price = this.price + 15;
        }
        if (this.topping == "TOPPING_MAYO") {
            this.price = this.price + 20;
            this.calories = this.calories + 5;
        }
    };

    this.getPrice = () => {
        this.newPrice = this.price + "$";
        return this.newPrice;
    };
    this.getCallories = () => {
        this.newCal = this.calories + "cal";
        return this.newCal;
    };
}

function main() {
    let hamburger;
    const firstPage = document.getElementById("first_page");
    const smallBurger = document.getElementById("small_burger");
    const middleBurger = document.getElementById("middle_burger");
    const largeBurger = document.getElementById("large_burger");

    const secondPage = document.getElementById("second_page");
    const topBtns = document.getElementById("toppings_button");

    const totalPrice = document.getElementById("total_price");
    const totalCal = document.getElementById("total_cal");

    smallBurger.onclick = function () {
        hamburger = new Hamburger(`SIZE_SMALL`);
        firstPage.classList.add("vision");
        secondPage.classList.remove("vision");
        totalPrice.innerText = hamburger.getPrice();
        totalCal.innerText = hamburger.getCallories();
    };
    middleBurger.onclick = function () {
        hamburger = new Hamburger(`SIZE_MIDDLE`);
        firstPage.classList.add("vision");
        secondPage.classList.remove("vision");
        totalPrice.innerText = hamburger.getPrice();
        totalCal.innerText = hamburger.getCallories();
    };
    largeBurger.onclick = function () {
        hamburger = new Hamburger(`SIZE_LARGE`);
        firstPage.classList.add("vision");
        secondPage.classList.remove("vision");
        totalPrice.innerText = hamburger.getPrice();
        totalCal.innerText = hamburger.getCallories();
    };

    topBtns.onclick = (e) => {
        const target = e.target;
        if (target.id == "add_cheese") {
            hamburger.addTopping(`TOPPING_CHEESE`);
            totalPrice.innerText = hamburger.getPrice();
            totalCal.innerText = hamburger.getCallories();
        }
        if (target.id == "add_salad") {
            hamburger.addTopping(`TOPPING_SALAD`);
            totalPrice.innerText = hamburger.getPrice();
            totalCal.innerText = hamburger.getCallories();
        }
        if (target.id == "add_potato") {
            hamburger.addTopping(`TOPPING_POTATO`);
            totalPrice.innerText = hamburger.getPrice();
            totalCal.innerText = hamburger.getCallories();
        }
        if (target.id == "add_dressing") {
            hamburger.addTopping(`TOPPING_DRESSING`);
            totalPrice.innerText = hamburger.getPrice();
            totalCal.innerText = hamburger.getCallories();
        }
        if (target.id == "add_mayo") {
            hamburger.addTopping(`TOPPING_MAYO`);
            totalPrice.innerText = hamburger.getPrice();
            totalCal.innerText = hamburger.getCallories();
        }
    };
}

main();
