const main = document.querySelector("#main");
const addUserBtn = document.querySelector("#addUser");
const doubleMoneyBtn = document.querySelector("#double");
const millionaireBtn = document.querySelector("#millionaire");
const sortRichestBtn = document.querySelector("#sort");
const entireWealthBtn = document.querySelector("#calculateWealth");

let data = [];
// Fetching Random user and Adding money
// Fetching random user from randomuser.me
getRandomUsers();
getRandomUsers();
getRandomUsers();

async function getRandomUsers(){
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json()

    // console.log(data)

    const user = data.results[0];
    // console.log(user)

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()*1000000),
    };


    addData(newUser)
}
// double money
const doublemoney = () => {
    data = data.map((user) => {
        return {...user,
         money: user.money *2
        };
    });
    updateDom()
}

// Filtering millionaire
const showMillionaire = () => {
    data = data.filter((user)=>user.money>1000000);
    updateDom();
}

// Sorting Richest
const findRichest = () => {
    data = data.sort((a,b) => b.money - a.money)
    updateDom()
}

// Adding New update object to data arr
const addData = (obj) =>{
    data.push(obj);
    // console.log(obj)
    updateDom()
}
const updateDom = (providedData = data) => {
    main.innerHTML = "<h2><strong>Person</strong>Wealth</h2>";
    
    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`
        main.appendChild(element)
    });
}
// formatiing random into money 
const formatMoney = (number) => {
    let USdollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    return USdollar.format(number)
}

const calculateWealth = () => {
   const wealth =  data.reduce((acc,user) => (acc += user.money), 0);

   const wealthElement = document.createElement('div')
   wealthElement.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`
   main.appendChild(wealthElement)
};

addUserBtn.addEventListener('click',getRandomUsers)
doubleMoneyBtn.addEventListener('click',doublemoney)
millionaireBtn.addEventListener('click', showMillionaire)
sortRichestBtn.addEventListener('click', findRichest)
entireWealthBtn.addEventListener('click', calculateWealth)
