async function krData(god, strana_cod){
    try{
        const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${god.value}/${strana_cod.value}`)
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
