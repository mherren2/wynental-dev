class SM_Component {
    constructor(selector, _main = null) {
        this.selector = selector;
        this.components = document.querySelectorAll(selector);

        if(_main && typeof _main === 'function') {
            this.Main = _main;
            this.Init();
        }
    }

    Main(comp) {
        console.info(`[SM Component] Main is still default, overwrite main function.`);
    }

    Init() {
        if(this.components.length === 0) {
            console.info(`[SM Component] No components found by selector: ${this.selector}`);
            return;
        }

        for (let i = 0; i < this.components.length; i++) {
            const comp = this.components[i];
            this.Main.call(this, comp);
        }
    }
}
