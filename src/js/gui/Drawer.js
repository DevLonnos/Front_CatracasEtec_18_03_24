export class Drawer {
    constructor(elementId) {
        this.sidebar = document.getElementById(elementId);
        this.isOpen = false;
    }

    toggle() {
        this.isOpen = !this.isOpen;
        this.sidebar.style.display = this.isOpen ? 'block' : 'none';
    }
}
