import rdfDereferencer from 'rdf-dereference'

async function load() {
    const {quads} = await rdfDereferencer.dereference('http://localhost:8080');
    quads.on('data', (quad) => {
        const node = document.createTextNode( `${quad.subject.value} ${quad.predicate.value} ${quad.object.value}

`)
        document.getElementById("result").appendChild(node);
    })
        .on('error', (error) => console.error(error))
        .on('end', () => console.log('All done!'));
}

load().then(() => console.log("Finished loading"))