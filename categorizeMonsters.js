var monstersByAc = dnd.monsters.reduce(function(obj, monster){
    var ac = monster.Challenge.match(/^\d+/);
    if (obj && !obj[ac]) {
        obj[ac] = [];
    }
    if (obj && obj[ac]) {
        obj[ac].push(monster)
    }
    return obj;
}, [])

dnd.monstersCategorized = monstersByAc;