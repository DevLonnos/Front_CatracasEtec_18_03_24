import { Drawer } from "../gui/Drawer.js";

class GuiController {
    drawer;

    buildGui() {
        this.drawer = new Drawer('mySidebar');
    }

}
export { GuiController };

