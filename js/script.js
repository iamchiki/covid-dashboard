// dom elemnets
const countryList = document.querySelector('.country-list');
const dateInput = document.querySelector('#input-date');
const confirmed = document.querySelector('.confirmed');
const deaths = document.querySelector('.deaths');
const recoverd = document.querySelector('.recovered');
const active = document.querySelector('.active');
let country, date;


// functions
function fetchCountryData(country, date) {
    if (country != '' && date != '') {
        fetch(`https://api.covid19api.com/total/country/${country}`)
            .then((response) => {
                return response.json();
            })
            .then((countryData) => {
                let singleDayData = countryData.filter((data) => {
                    return data.Date.split('T')[0] == date;
                });
                console.log(singleDayData);
                confirmed.innerText = singleDayData[0].Confirmed;
                deaths.innerText = singleDayData[0].Deaths;
                recoverd.innerText = singleDayData[0].Recovered;
                active.innerText = singleDayData[0].Active;
            });
    }
}

// Event Listeners
// fetch info on changing country
countryList.addEventListener('change', () => {
    country = countryList.value;
    date = dateInput.value;
    fetchCountryData(country, date);
});

// fetch value onchanging date
dateInput.addEventListener('change', () => {
    country = countryList.value;
    date = dateInput.value;
    fetchCountryData(country, date);
});


// fetching country name list form covid api

fetch('https://api.covid19api.com/countries')
    .then((response) => {
        return response.json();
    })
    .then((countries) => {
        countries.forEach((country) => {
            const option = document.createElement('option');
            option.value = country.Slug;
            option.innerText = country.Country;
            countryList.append(option);
        });
    });

