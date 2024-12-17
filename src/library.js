export { createImg, createA, createBtn, createP };

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