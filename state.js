var state = {};
// function loadSave(state) {
  
// }

function save() {

  let blob = new Blob([JSON.stringify(state)], { type: "text/json" })
  let url = window.URL.createObjectURL(blob)
  let a = document.createElement('a')
  a.href = url
  a.download = 'saveState.json'
  a.click()
  window.URL.revokeObjectURL(url)
}

function load(filepath) {
  // event.preventDefault();
  // const file = new FormData(document.querySelector('#fileSelector')).get('file');
  // file.text()
  //     .then(sheet => {
  //         let parsed = parser.parseFromString(sheet, 'text/html');
  //         if (parsed.body.innerHTML.length) {
  //             if (confirm("Are you sure?  This will overwrite your current character sheet.")) {
  //                 document.body = parsed.body;
  //                 checkboxListeners();
  //             }
  //         }
  //     })
  //     .catch(console.log)
  var text = readTextFile('C:/Users/Joshua/Downloads/' + filepath);
  if (!text) {
    return;
  }
  state = JSON.parse(text)
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                return allText;
            }
        }
    }
    // rawFile.send(null);
}