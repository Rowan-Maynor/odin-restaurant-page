export { createImg, createA, createBtn, createP, createDiv, removeChildren, createH1 };

function removeChildren(parent){
    while(parent.firstChild) {
        parent.removeChild(parent.lastChild)
    }
}

function createImg(src, parent, attachType, id, classList) {
    const img = document.createElement("img");
    img.src = src;
    if (id) {
        img.id = id
    }
    if (classList) {
        img.classList = classList
    }
    if (attachType == "append") {
        parent.append(img);
    } else if (attachType == "prepend") {
        parent.prepend(img);
    }
}

function createA(href, parent, attachType, id, classList, content) {
    const a = document.createElement("a");
    a.href = href;
    if (id) {
        a.id = id
    }
    if (classList) {
        a.classList = classList
    }
    if (content) {
        a.textContent = content
    }
    if (attachType == "append") {
        parent.append(a);
    } else if (attachType == "prepend") {
        parent.prepend(a);
    }
}

function createBtn(parent, attachType, id, classList, content) {
    const btn = document.createElement("button");
    if (id) {
        btn.id = id
    }
    if (classList) {
        btn.classList = classList
    }
    if (content) {
        btn.textContent = content
    }
    if (attachType == "append") {
        parent.append(btn);
    } else if (attachType == "prepend") {
        parent.prepend(btn);
    }
}

function createP(parent, attachType, id, classList, textContent) {
    const p = document.createElement("p");
    if (id) {
        p.id = id
    }
    if (classList) {
        p.classList = classList
    }
    if (content) {
        p.textContent = textContent
    }
    if (attachType == "append") {
        parent.append(p);
    } else if (attachType == "prepend") {
        parent.prepend(p);
    }
}

function createDiv(parent, attachType, id, classList, textContent) {
    const div = document.createElement("div");
    if (id) {
        div.id = id
    }
    if (classList) {
        div.classList = classList
    }
    if (content) {
        div.textContent = textContent
    }
    if (attachType == "append") {
        parent.append(div);
    } else if (attachType == "prepend") {
        parent.prepend(div);
    }
}

function createH1(parent, attachType, id, classList, textContent) {
    const h1 = document.createElement("h1");
    if (id) {
        h1.id = id
    }
    if (classList) {
        h1.classList = classList
    }
    if (content) {
        h1.textContent = textContent
    }
    if (attachType == "append") {
        parent.append(h1);
    } else if (attachType == "prepend") {
        parent.prepend(h1);
    }
}