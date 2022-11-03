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

            :host{
                display: inline-block;                
                with: 100%;
                min-width: 300px;
                max-width: 450px;
                font-size: 20px;
                background: gray;
            }
            :host(.blue){
                background: lightblue;
            }
            :host([yellow]){
                background: lightyellow;
            }
            :host([yellow]) h2 {
                color: gray;
            }
            :host-context(article.card){
                display: block;
                max-width: 100%;
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
