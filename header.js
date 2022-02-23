class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="banner">
                <img src="./images/joel_logo.png" alt="Joel-Hartung" id="banner-image">
            </div>

            <div id="nav-container">
                <ul id="nav-list">
                     <li>
                        <a href="index.html">Home</a>
                    </li>
                    <span>|</span>
                     <li>
                        <a href="about.html">About</a>
                    </li>
                    <span>|</span>
                    <li>
                        <a href="projects.html">Projects</a>
                    </li> 
                    <span>|</span>
                    <li>
                        <a href="database-diagrams.html">Database Diagrams</a>
                    </li>
                    <span>|</span>
                    <li>
                        <a href="api-unit-tests.html">API Unit Tests</a>
                    </li>
                    <span>|</span>
                    <li>
                        <a href="resume.html">Resume</a>
                    </li>
                </ul>
            </div>
        `;
    }
}

customElements.define("header-component", Header);
