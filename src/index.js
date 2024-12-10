console.log("Its working!")

createImg("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     document.body, "prepend", "#header-img")

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