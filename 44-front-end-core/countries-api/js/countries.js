const loadCountry = () =>{
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => displayCountry(data))
}
const displayCountry = countries =>{
    console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML[0]);
    const countryContainer = document.getElementById("countries");
    countryContainer.innerHTML = countriesHTML.join(' ');
}
const getCountryHTML = ({ name, flags, area, nativeName }) => {
  return `
        <div class="country">
            <h2>${name}</h2>
            <h3>Native Name: ${nativeName}</h3>
            <p>Area : ${area}</p>
            <img src="${flags.png}">
        </div>
    `;
};


// Option - 1
// const getCountryHTML = country =>{
//     const {name, flags} = country;
//     return `
//         <div class="country">
//             <h2>${name}</h2>
//             <img src="${flags.png}">
//         </div>
//     `
// }


// Original.............
// const getCountryHTML = country =>{
//     return `
//         <div class="country">
//             <h2>${country.name}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `
// }
loadCountry()


