export const urlImg = (id) => {
    return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
}

export const filterByType = (allPokesProps,selectedType)=>{
    console.log(selectedType);
    let allPokes = allPokesProps;
    let ids = [];
    let show = [];
    allPokes.map(allPoke => {
        let target = allPoke.types.filter(ss => {
            return ss.type.name === selectedType
        })
        if (target.length > 0) {
            ids.push(allPoke.id)
        }
    })

    ids.map(id => {
        allPokes.filter(allPoke => {
            return allPoke.id === id
        })
            .map(allpk => {
                show.push(allpk)
            });
    })
    return show
}