

//Hamburger nav:

const nav = document.querySelector("nav");
const burger = document.querySelector(".burger");

burger.addEventListener("click", function() {
    nav.classList.toggle("show-nav");
});

//Modal for sign-up - I saw lots of tutorials for vanilla JS modals but I wanted to try using a class/constructor. 
// Source: engineertodeveloper.com/create-a-modal-using-vanilla-javascript/

//Modal Class

class Modal {
    constructor(modal, target) {
        this.isOpen = false;
        this.modal = modal;
        this.target = target;
        this.closeModal = modal.querySelectorAll("[data-close]");

    //Event listener to check for modal trigger (sign-up button):

    this.target.addEventListener("click", (event) => {
        if (this.isOpen) {
            return this.close();
        }
        return this.open();
    });
    this.closeModal.forEach(item => {
        item.addEventListener("click", (event) => {
            this.close();
        });
    });

    }

    //open and close toggle modal methods:

    open() {
        this.modal.classList.add("show-modal");
    }
    close() {
        this.modal.classList.remove("show-modal");
    }
}

// Modal instantiation:

const modal = new Modal(
    document.querySelector(".modal"),
    document.querySelector('[data-toggle="modal"]')
);

