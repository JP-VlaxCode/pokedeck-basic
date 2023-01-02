class Greetings extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    console.log("Constructed", this);

    // Render HTML

    /* Direct render
    this.innerHTML = `
      <div class="mv-2 ph-2 text-gray">
        <p>Greetings from WebComponent</p>
      </div>
    `;
    */

    this.#getHTML('webcomponents/greetings.html');
  }

  /**
   * Runs each time the element is appended to or moved in the DOM
   */
  connectedCallback() {
    console.log("connected!", this);
  }

  /**
   * Runs when the element is removed from the DOM
   */
  disconnectedCallback() {
    console.log("disconnected", this);
  }

  async #getHTML(path) {
    // Get the page
    let request = await fetch(path);
    if (!request.ok) return;

    // Get the HTML
    this.innerHTML = await request.text();
  }
}

if ("customElements" in window) {
  customElements.define("greetings-element", Greetings);
}
