
function getWorldDimensions() {
    width = document.getElementById('world').offsetWidth
    height = document.getElementById('world').offsetHeight
    return { width: width, height: height }
}



function buildWorld(dimensions, offset) {

    var rows = dimensions.height / 25 - dimensions.height / 25 % 1;
    var columns = dimensions.width / 25 - dimensions.width / 25 % 1;

    var world = document.getElementById('world');
    var html = '';
    for (var y = 0; y < rows; y++) {
        html += '<div class="worldRow">';
        for (var x = 0; x < columns; x++) {
            var encounter = getEncounter(x, y, false, true);
            var red = Math.floor(lerp(0, 255, encounter.xp / 12700))
            if (red > 255) {
                red = 255;
            }
            var r = red.toString(16);
            r = r + ('' + r.length < 2 && '0' || '')
            var b = (255 - red).toString(16);
            b = b + ('' + b.length < 2 && '0' || '')
            var color = '' + r + b + b;
            html += '<div class="worldCell" x="' + x + '" y="' + y + '" onclick="getEncounterHilite(' + x + ',' + y + ', this)" style="background-color: #' + color + ';"></div>';

            // html += '<div class="worldCell" x="' + x + '" y="' + y + '" onclick="getEncounterHilite(' + x + ',' + y + ', this)"></div>';
        }
        html += '</div>'
    }
    world.innerHTML = html;
}

function getEncounterHilite(x, y, el) {
    document.querySelectorAll('.worldCell').forEach((element) => {element.classList.remove('selected')});
    el.classList.add('selected');
    getEncounter(x, y)
}

window.onload = function () {
    document.getElementById('loot').style.display = "none";
    document.getElementById('inhabitants').style.display = "none";
    // document.getElementById('world').style.display = "none";

    coordinates = { x: 0, y: 0 }
    dimensions = getWorldDimensions();

    buildWorld(dimensions, location)
}

window.onresize = function () {
    document.getElementById('loot').style.display = "none";
    document.getElementById('inhabitants').style.display = "none";
    // document.getElementById('world').style.display = "none";

    coordinates = { x: 0, y: 0 }
    dimensions = getWorldDimensions();

    buildWorld(dimensions, location)
}