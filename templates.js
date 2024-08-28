
const template = `
    <h1>Template</h1>
    <div id="text"> Awesome text</div>
`;

const component = (btn_name) => {
    return `<button id="btn_click">${btn_name}</button>`
}


const setupEventListeners = () => {
    document.getElementById("btn_click").addEventListener("click",()=>{
        alert("click")
    })

};