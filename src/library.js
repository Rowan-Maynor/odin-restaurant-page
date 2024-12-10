export { createImg, createA };

function createImg(src, target, type, id, classList) {
    const img = document.createElement("img");
    img.src = src;
    if (id) {
        img.id = id
    }
    if (classList) {
        img.classList = classList
    }
    if (type == "append") {
        target.append(img);
    } else if (type == "prepend") {
        target.prepend(img);
    }
}

function createA(href, target, type, id, classList, content) {
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
    if (type == "append") {
        target.append(a);
    } else if (type == "prepend") {
        target.prepend(a);
    }
}

function createBtn(parent, type, id, classList, content) {
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
    if (type == "append") {
        parent.append(btn);
    } else if (type == "prepend") {
        parent.prepend(btn);
    }
}