class MyCustomElement extends HTMLElement {
    constructor() {
        super();

        console.log("Hi from constructor - Memory");
    }

    connectedCallback() {
        console.log("it's from DOM");
    }

    disconnectedCallback() {
        console.log('Bye');
    }
}

customElements.define("my-custom-element", MyCustomElement);

document.querySelector("my-custom-element").remove();
