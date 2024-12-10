export { createImg };

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