const apiKey = `f13f1cf1aa098da50727490fc15c10c0`;

const searchBtnClicked = () => {
    const searchInput = document.getElementById('search-box');
    const searchInputValue = searchInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => console.log(data))
}


const displayWeaither = data => {
    console.log(data);
    const cityName = data.name;
    const temp = data.main.temp;
    
}