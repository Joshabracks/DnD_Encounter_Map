const difficultyLookupTable = {
    1: [25, 50, 75, 100],
    2: [50, 100, 150, 200],
    3: [75, 150, 225, 400],
    4: [125, 250, 375, 500],
    5: [250, 500, 750, 1100],
    6: [300, 600, 900, 1400],
    7: [350, 750, 1100, 1700],
    8: [450, 900, 1400, 2100],
    9: [550, 1100, 1600, 2400],
    10: [600, 1200, 1900, 2800],
    11: [800, 1600, 2400, 3600],
    12: [1000, 2000, 3000, 4500],
    13: [1100, 2200, 3400, 5100],
    14: [1250, 2500, 3800, 5700],
    15: [1400, 2800, 4300, 6400],
    16: [1600, 3200, 4800, 7200],
    17: [2000, 3900, 5900, 8800],
    18: [2100, 4200, 6300, 9500],
    19: [2400, 4900, 7300, 10900],
    20: [2800, 5700, 8500, 12700]
}

function getEncounter(x, y, playerLevels, getRes) {
    if (state && state[x + ',' + y]) {
        var s = state[x + ',' + y]
        console.log("STATE LOAD ", s)
        loadInhabitants(s.inhabitants);
        loadLoot(s.loot);
        updateFooter(s);

        if (s.inhabitants.length == 0 || s.safe) {
            document.querySelector('[x="' + x + '"][y="' + y + '"]').style.backgroundColor = '#0f0';
        }
        return;
    }
    var _x = Number(x);
    var _y = Number(y);

    var a = perlin.get(x * 0.932, y * 0.932) + 1 / 2;
    var b = perlin.get(x * 1.234, y * 1.234) + 1 / 2;
    var level;
    if (playerLevels) {
        level = playerLevels.reduce((a, b) => a + b, 0);
    } else {
        level = Math.ceil(lerp(0, Object.keys(difficultyLookupTable).length, a));
    }
    if (level > Object.keys(difficultyLookupTable).length - 1) {
        level = Object.keys(difficultyLookupTable).length - 1;
    }
    if (level < 1) {
        level = 1;
    }
    var difficulty = Math.floor(lerp(0, difficultyLookupTable[level] && difficultyLookupTable[level].length || 0, b));

    var expLevel = difficultyLookupTable[level][difficulty];

    var inhabitants = [];
    var expendedXP = 0;

    // var dSet = 0.36124;
    var cSet = 0.0565;

    var c = perlin.get(x * cSet, y * cSet) + 1 / 2;
    // var d = perlin.get(x * dSet, y * dSet) + 1 / 2;
    var int = 0;

    var monsterOrNpc = perlin.get(x * 0.85, y * 0.85);


    var reset = 0;

    while (expendedXP < expLevel * 0.9 && reset < 100) {
        // var monsterLevelIndex = Math.floor(lerp(level - 2 > 0 && level - 2 || 0, level, d));
        // if (dnd.monsters[monsterLevelIndex]) {
        //     var monsterIndex = Math.floor(lerp(0, dnd.monsters[monsterLevelIndex].length - 1, c))
        //     var monster = dnd.monsters[monsterLevelIndex][monsterIndex];
        //     if (!monster) {
        //         continue;
        //     }
        //     var xp = parseInt(monster.Challenge.match(/\((.*)XP/i) && monster.Challenge.match(/\((.*)XP/i)[1].replace(/,/g, '').trim());
        //     // if (xp && expendedXP + xp < expLevel * 1.25) {
        //         expendedXP += xp;
        //         monsters.push(monster);
        //     // }
        // }
        // dSet *= -1.3525;
        if (monsterOrNpc >= -0.1) {

            var monsterIndex = Math.floor(lerp(0, dnd.monsters.length - 1, c));
            var monster = dnd.monsters[monsterIndex];
            if (!monster) {
                cSet++;
                c = perlin.get(x * cSet, y * cSet) + 1 / 2;
                c = perlin.get(x * cSet, y * cSet) + 1 / 2;
                reset++;
                continue;
            }
            var xp = parseInt(monster.Challenge.match(/\((.*)XP/i) && monster.Challenge.match(/\((.*)XP/i)[1].replace(/,/g, '').trim());
            if (xp > expLevel || int < 20) {
                int++;
                cSet++;
                c = perlin.get(x * cSet, y * cSet) + 1 / 2;
                c = perlin.get(x * cSet, y * cSet) + 1 / 2;
                reset++;
                continue;
            }
            inhabitants.push(monster);
            expendedXP += xp;


            cSet++;
            // if (Math.abs(dSet) > 10) {
            //     dSet *= .01
            // }


            c = perlin.get(x * cSet, y * cSet) + 1 / 2;
            c = perlin.get(x * cSet, y * cSet) + 1 / 2;
        } else {
            var npcIndex = Math.floor(lerp(0, Object.keys(dnd.npcs).length - 1, c));
            var npc = dnd.npcs[Object.keys(dnd.npcs)[npcIndex]];
            if (!npc) {
                cSet++;
                c = perlin.get(x * cSet, y * cSet) + 1 / 2;
                c = perlin.get(x * cSet, y * cSet) + 1 / 2;
                reset++;
                continue;
            }
            var xp = parseInt(npc.xp.replace(/,/g, ''));

            if (xp > expLevel || int < 20) {
                int++;
                cSet++;
                c = perlin.get(x * cSet, y * cSet) + 1 / 2;
                c = perlin.get(x * cSet, y * cSet) + 1 / 2;
                reset++;
                continue;
            }
            var firstName = firstNames[Math.floor(lerp(0, firstNames.length - 1, Math.abs(perlin.get(x * cSet + .0112, y * cSet + 0.01564))))]
            var lastName = lastNames[Math.floor(lerp(0, lastNames.length - 1, Math.abs(perlin.get(x * cSet + .41233112, y * cSet + 0.71564))))]
            var race = dnd.races[Math.floor(lerp(0, dnd.races.length - 1, Math.abs(perlin.get(x * cSet + .41112, y * cSet + 0.5484))))].name
            npc.race = race;
            npc.identity = firstName + " " + lastName;
            inhabitants.push(npc);
            expendedXP += xp;

            cSet++;
            c = perlin.get(x * cSet, y * cSet) + 1 / 2;
            c = perlin.get(x * cSet, y * cSet) + 1 / 2;
        }
        // var d = perlin.get(x * dSet, y * dSet) + 1 / 2; d = perlin.get(x * dSet, y * dSet) + 1 / 2;
    }
    lootVal = Math.abs(perlin.get(x * 0.131234, y * -1.21548));
    lootLevel = Math.floor(lerp(0, 1000, lootVal));
    lootIndex = Math.floor(lerp(0, lootTable.length, lootVal));
    var cp = 0;
    var loot = [];
    while (cp < lootLevel) {
        var item = lootTable[lootIndex];
        var cost = parseFloat(item.cost) || 0;
        cp += cost || 1;
        loot.push(item);
        x = x > 5 && x / 2 || x * 1.1211;
        y = y > 5 && y / 2 || y & 1.1121;
        lootIndex = Math.floor(lerp(0, lootTable.length, Math.abs(perlin.get(x * 0.131234, y * -1.21548))))
    }

    var food = Math.floor(lerp(0, 100, Math.abs(perlin.get(x * .02365, y * 1.2486))));
    var gold = lerp(0, 250, Math.abs(perlin.get(x * 1.248, y * .46112))).toFixed(2);
    var place = places[Math.floor(lerp(0, places.length - 1, Math.abs(perlin.get(x * .515054, y * .041556))))];
    var res = { inhabitants: inhabitants, xp: expendedXP, food: food, gold: gold, loot: loot, place: place, coordinates: { x: _x, y: _y } };
    if (getRes) {
        return res;
    }
    loadInhabitants(inhabitants);
    loadLoot(loot);
    updateFooter(res);

    state[_x + ',' + _y] = res;
}

function updateFooter(res) {
    document.getElementById('foot').innerHTML = "<p><b>[" + res.coordinates.x + ',' + res.coordinates.y + '] </b>' + res.place + "</p><p><b>food: </b>" + res.food + "</p><p><b>gold: </b>" + res.gold + "</p><p><b>xp: </b>" + res.xp + "</p>"
}

function loadState(x, y, getRes) {
    var key = x + ',' + y;
    var state = saveState && saveState[key]
    if (!state) {
        return;
    }
    if (getRes) {
        return state;
    }
    loadInhabitants(state.inhabitants)
    loadLoot(state.loot)
    updateFooter(state)
}

function saveState(state) {
    var key = state.coordinates.x + ',' + state.coordinates.y
    saveState[key] = state;
    save();
}

function loadInhabitants(inhabitants) {
    var html = ''
    for (var i = 0; i < inhabitants.length; i++) {
        var inhabitant = inhabitants[i];
        var currhtml = '';
        for (var item in inhabitant) {
            var name;
            if (item == 'name') {
                name = item;
            } else if (item == 'img_url') {
                currhtml += '<img src="' + inhabitant[item] + '" style="max-width: 300px; max-height: 300px;">'
            } else if (item == 'content') {
                for (var j = 0; j < inhabitant[item].length; j++) {
                    currhtml += "<p>" + inhabitant[item][j] + '</p>'
                }
            } else {
                currhtml += "| <b>" + item + "</b>: ";
                currhtml += inhabitant[item] + " |"
            }

        }
        if (name) {
            currhtml = '<h3>' + inhabitant[name] + '</h3>' + currhtml;
        }
        currhtml = "<div style='outline-style: solid; outline-width: 2; outline-color: black;'>" + currhtml + "</div>"
        html += currhtml
    }
    document.getElementById('inhabitants').innerHTML = html;

    
}

function loadLoot(loot) {
    html = '';
    for (var i = 0; i < loot.length; i++) {
        var currhtml = '';
        var item = loot[i];
        for (var tag in item) {
            var name;
            if (tag == 'name') {
                name = tag;
            } else if (item[tag]) {
                currhtml += "<p><b>" + tag + "</b>: " + item[tag] + "</p>"
            }
        }
        if (name) {
            currhtml = '<h3>' + item[name] + '</h3>' + currhtml;
        }
        currhtml = "<div style='outline-style: solid; outline-width: 2; outline-color: black;'>" + currhtml + "</div>"
        html += currhtml;
    }

    document.getElementById('loot').innerHTML = html;
}