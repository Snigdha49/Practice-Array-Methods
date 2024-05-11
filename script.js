const main = document.querySelector("#main");
const addUserBtn = document.querySelector("#addUser");
const doubleMoney = document.querySelector("#double");
const millionaire = document.querySelector("#millionaire");
const sortRichest = document.querySelector("#sort");
const entireWealth = document.querySelector("#calculateWealth");

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
const addData = (obj) =>{
    data.push(obj);
    // console.log(obj)
    updateDom()
}

