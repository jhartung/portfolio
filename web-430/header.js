/*
============================================
; Title: Personal Portfolio
; Author: Joel Hartung
; Date: 4 March 2022
; Description: Joel's Personal Portfolio header.js
;===========================================
*/


class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="banner">
               <a href="index.html"><img src="../images/joel_logo.png" alt="Joel-Hartung" id="banner-image"></a>
            </div>

            <div id="nav-container">
                <ul id="nav-list">
                     <li>
                        <a href="../index.html">Home</a>
                    </li>
                    <span>|</span>
                     <li>
                        <a href="../about.html">About</a>
                    </li>
                    <span>|</span>
                    <li>
                        <a href="../projects.html">Projects</a>
                    </li> 
                    <span>|</span>
                    <li>
                        <a href="../hartung-diagrams.html">Database Diagrams</a>
                    </li>
                    <span>|</span>
                    <li>
                        <a href="../hartung-api-unit-tests.html">API Unit Tests</a>
                    </li>
                    <span>|</span>
                    <li>
                        <a href="../devops-presentations.html">DevOps Presentations</a>
                    </li>
                    <span>|</span>
                    <li>
                        <a href="../resume.html">Resume</a>
                    </li>
                </ul>
            </div>
        `;
    }
}

customElements.define("header-component", Header);
