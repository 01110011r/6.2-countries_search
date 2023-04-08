const block = document.querySelector('.block'),
    searchInput = document.querySelector('.search__input'),
    searchBtn = document.querySelector('.search__btn');

let url = 'https://restcountries.com/v3.1/all';



async function myFun() {

    if (!searchInput.value) {
        url = 'https://restcountries.com/v3.1/all';
    } else {
        url = `https://restcountries.com/v3.1/name/${searchInput.value}`;
    }
    try {
        const result = await fetch(url);
        const data = await result.json();

        block.innerHTML = '';

        console.log(data);
        data.map((countries) => {




            // console.log(countries.currencies);

            // if (countries.currencies) {
            //     const test = (Object.values(countries.currencies));
            //     console.log((Object.values(...test))[0]);
            // } else { console.log('???'); }



            const card = document.createElement('div');
            block.appendChild(card);
            card.classList.add('card')


            const cardImg = document.createElement('img');
            card.appendChild(cardImg);
            cardImg.alt = `${countries.flags.alt}`;

            cardImg.src = `${countries.flags.png}`;



            const Name = document.createElement('h2');
            card.appendChild(Name);
            Name.textContent = countries.name.common;



            const capital = document.createElement('h4');
            card.appendChild(capital);
            capital.textContent = 'Capital: ' + countries.capital;



            const num = document.createElement('h5');
            card.appendChild(num);


            const population = String(countries.population);



            switch (population.length) {
                case 4:
                    num.textContent = 'Population: ' + population.slice(0, 1) + 'K';
                    break;
                case 5:
                    num.textContent = 'Population: ' + population.slice(0, 2) + 'K';
                    break;
                case 6:
                    num.textContent = 'Population: ' + population.slice(0, 3) + 'K';
                    break;
                case 7:
                    num.textContent = 'Population: ' + population.slice(0, 1) + 'mln';
                    break;

                case 8:
                    num.textContent = 'Population: ' + population.slice(0, 2) + 'mln';
                    break;

                case 9:
                    num.textContent = 'Population: ' + population.slice(0, 3) + 'mln';
                    break;

                case 10:
                    num.textContent = `Population: ${population.slice(0, 2).split('')} mlrd`;
                    break;

                default:
                    num.textContent = 'Population: ' + population;
                    break;
            }




        })
    } catch (error) {
        console.log(error);
    }
}

myFun()

searchBtn.addEventListener('click', () => {
    myFun();
})