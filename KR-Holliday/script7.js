async function krData(god, strana_cod){
    try{
        const god1 = god.value;
        const strana_cod1 = strana_cod.value;
        const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${god1}/${strana_cod1}`)
        let data = await response.json();
        let sorted = data.sort((a, b) => a.localName > b.localName ? 1 : -1);
        console.log(sorted);
    }catch(err){
        console.log('Errrorrrr >>> , err');
    }
}