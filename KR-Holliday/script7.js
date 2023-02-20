async function krData(god, strana_cod){
    try{
        const god1 = god.value;
        const strana_cod1 = strana_cod.value;
        const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${god1}/${strana_cod1}`)
        let data = await response.json();
        await getValue(data);
    }catch(err){
    console.log('Введён неверный код страны.' , err);
}
}
function getValue(data) {

    let sorted = data.sort((a, b) => a.localName > b.localName ? 1 : -1);
    console.log(sorted);
}
