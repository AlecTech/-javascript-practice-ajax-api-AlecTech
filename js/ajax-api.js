fetch('https://www.dnd5eapi.co/api/spells').then(response => response.json()).then(data => {console.log(data);

const results = data.results;
console.log(results);

const resultsUL = document.createElement('UL');
for (const item of results )
{
    const itemLI = document.createElement('LI');
    itemLI.textContent = `"Command is: "${item.index}" Name:   "${item.name} "Location of other API END POINTS:   "${item.url} !`;
    resultsUL.appendChild(itemLI);
}
document.body.appendChild(resultsUL);
});