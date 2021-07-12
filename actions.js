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

function remove(x, y, idx, thing) {
    if (thing != "loot" && thing != "inhabitants") {
        return;
    }
    var s = state[x + ',' + y];
    if (!s || !s[thing]) {
        return;
    } 
    var arr = [];
    for (var i = 0; i < s[thing].length; i++) {
        if (i != idx) {
            arr.push(s[thing][i])
        }
    }
    state[x + ',' + y][thing] = arr;
}