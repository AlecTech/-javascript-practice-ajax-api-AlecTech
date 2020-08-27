fetch('https://www.dnd5eapi.co/api/spells').then(response => response.json()).then(data => {console.log(data);

const results = data.results;
console.log(results);

const resultsUL = document.createElement('OL');
for (const item of results )
{
    const itemLI = document.createElement('LI');
    itemLI.textContent = `NAME=> [${item.name}]   COMMAND=> [${item.index}]   URL=> https://www.dnd5eapi.co${item.url}`;
    // itemLI.textContent = `" ====================================================================="`;
    resultsUL.appendChild(itemLI);
}
document.body.appendChild(resultsUL);
})

.catch( error => { // It is a good idea to output it when debugging.
    console.log( error );
} );