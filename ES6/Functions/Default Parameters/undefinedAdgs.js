function createDiv(height = '200px', width = '20px'){
    let div = document.createElement('div');
    div.style.height = height;
    div.style.width = width;

    document.body.appendChild(div);
    return div;
}

createDiv();