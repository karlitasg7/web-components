class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>
                    <slot name="title"></slot>
                </h2>

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

            :host {
                --primary-color: tomato;
                --secondary-color: salmon;
                --heading-primary: 30px;
                --heading-secondary: 25px;
                display: inline-block;                
                with: 100%;
                min-width: 300px;
                max-width: 450px;
            }
            section {
                background: var(--primary-color)
            }
            section div {
                background: var(--secondary-color)
            }
            h2 {
                font-size: var(--heading-primary)
            }
            p {
                font-size: var(--heading-secondary)
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
