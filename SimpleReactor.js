class SimpleReactor{
    
    constructor(root) {
        this.root = document.getElementById(root);
    } 

    addComponent(component, customRootId = null) {

        document.onreadystatechange = () => {
            if (document.readyState === "complete") {
                if(customRootId) {
                    document.getElementById(customRootId).innerHTML += component;
                } else {
                    this.root.innerHTML += component;
                }
                setupEventListeners();
            }
        };
       
    }

    useTemplate(template){
        this.root.innerHTML = template;
    }
}
