class SimpleReactor{

    constructor(root) {
        this.root = document.getElementById(root);
    } 

    setTemplate(template) {
        this.root.innerHTML = template;
        return true;
    }

    addToRoot(template) {
        if (typeof template !== 'function') {
            this.root.innerHTML += template;
        }
    }

    useComponent(component){
        component(this);
    }
}
