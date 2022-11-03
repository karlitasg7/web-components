class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h1>
                    <slot name="title"></slot>
                </h1>

                <div>
                    <p>
                        <slot name="body"></slot>
                    </p>
                </div>
            </section>

            ${this.getStyles()}
        `;

        return template;
    }

    getStyles() {
        return `        
        <style>
            ::slotted(span) {
                font-size: 30px;
                color: red;
            }
            ::slotted(.text) {
                color: blue;
            }

        </style>
        `;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('my-element', myElement);
