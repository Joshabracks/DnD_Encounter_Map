var lootTable = {};

var costMultiplierLookupTable = {
    "cp": .01,
    "sp": 0.1,
    "ep": 0.5,
    "gp": 1,
    "pp": 10
}

var rarityLookupTable = [
    /\scommon/,
    "uncommon",
    "rare",
    "very rare",
    "wonderous",
    "rarity varies",
    "legendary",
    "rarity by"
]

extractToLootTable(dnd.equipment["Adventuring Gear"]["Adventuring Gear"].table);
var armor = dnd.equipment.Armor["Armor List"];
for (var key in armor) {
    var table = armor[key].table;
    extractToLootTable(table);
}

var weapons = dnd.equipment.Weapons["Weapon List"];
for (var key in weapons) {
    var table = weapons[key].table;
    extractToLootTable(table);
}
extractToLootTable(dnd.equipment.Expenses["Food, Drink, and Lodging"]["Food, Drink, and Lodging"].table);
extractToLootTable(dnd.equipment["Mounts and Vehicles"]["Mounts and Other Animals"].table);
extractToLootTable(dnd.equipment["Mounts and Vehicles"]["Tack, Harness, and Drawn Vehicles"].table);
extractToLootTable(dnd.equipment["Mounts and Vehicles"]["Waterborne Vehicles"].table);
extractToLootTable(dnd.equipment.Tools.Tools.content[0].table);
extractToLootTable(dnd.equipment["Trade Goods"]["Trade Goods"].table);

for (var item in dnd.magicItems) {
    if (typeof(dnd.magicItems[item]) == "object") {
        extractMagicItemToTable(dnd.magicItems[item], item);
    }
}

function extractMagicItemToTable(item, name) {
    
    if (item.table || typeof(item.content && item.content[0]) != 'string') {
        if (!lootTable[13]) {
            lootTable[13] = [];
        }
        lootTable[13].push({name: name, item: item});
        return;
    }
    if (name == "Spell Scroll" || name == "Sentient Magic Items") {
        return;
    }
    var rarities = item.content && item.content[0];
    

    if (!rarities) {
        item.forEach(function(i){
            extractMagicItemToTable(i);
        })
    }
    var raritiesParsed = [];
    for (var i = 0; i < rarityLookupTable.length; i++) {
        var rarity = rarityLookupTable[i];
        if (rarities.match(rarity)) {
            raritiesParsed.push(rarity);
            var rarityIndex = Math.floor(lerp(5, 20, i + 1 / rarityLookupTable.length));
            if (!lootTable[rarityIndex]) {
                lootTable[rarityIndex] = [];
            }
            lootTable[rarityIndex].push({name: name, rarity: rarity, info: item});
        }
    }
}

function extractToLootTable(table) {
    for (var i = 0; i < table.Cost.length; i++) {
        var name = table.Armor && table.Armor[i] || table.Goods && table.Goods[i] || table.Item[i];
        var ac = table["Armor Class (AC)"] && table["Armor Class (AC)"][i];
        var cost = getCurrencyValueGP(table.Cost && table.Cost[i]);
        var stealth = table.Stealth && table.Stealth[i];
        var strength = table.Strength && table.Strength[i];
        var weight = table.Weight && table.Weight[i];
        var tableIndex = Math.floor(lerp(0, 20, cost / 1000));
        if (!lootTable[tableIndex]) {
            lootTable[tableIndex] = [];
        }
        lootTable[tableIndex].push({
            name: name,
            ac: ac,
            cost: cost,
            stealth: stealth,
            strength: strength,
            weight: weight
        })
    }
}

function getCurrencyValueGP(string) {
    if (!string) {
        return 0;
    }
    var reg = /([\d\,]+)\s+(\w+)/;
    var values = string.match(reg);
    if (!values) {
        return 0;
    }
    var currencyType = values[2] && costMultiplierLookupTable[values[2]] || 0;
    var currencyVal = values[1].replace(/,/g, '');

    if (!currencyVal) {
        return 0
    }

    return currencyVal * currencyType;
}

lootTable = Object.keys(lootTable).reduce(function(table, key){
    var array = lootTable[key];
    for (var i = 0; i < array.length; i++) {
        table.push(array[i]);
    }
    return table;
}, [])
