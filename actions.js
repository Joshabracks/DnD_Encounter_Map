function show(id) {
    var docs = document.querySelectorAll('.main');
    for (var i = 0; i < docs.length; i++) {
        var doc = docs[i];
        if (doc.id == id) {
            doc.style.display = "block";
        } else {
            doc.style.display = "none";
        }
    }
}