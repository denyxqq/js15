const friends = [
    {name: "Vitalik", friend: ["Dima", "Andriy","Denus"], skills: "Karate"},
    {name: "Dima", friend: ["Denus","Pavlo","Stepan"], skills: "football"},
    {name: "Stepan", friend: ["Denus", "Dima",], skills: "Skateboarding"},
    {name: "Andriy", friend: ["Vova", "Vitalik","Nazar"], skills: "Tayskiy-box"},
    {name: "Pavlo", friend: ["Dima","Max","Nazar"], skills: "fishing"},
    {name: "Sofia", friend:  ["Tania","Marichka"], skills: "reading"}
]


// #1
const income = [35000, 30000, 22000, 27000, 40000, 13000, 15000]
const total = income.reduce((balance, uah) => balance + uah, 0)
console.log(total);

// #2
const DimasFriends = friends.reduce((names, friends) => {
    for(let i = 0; i < friends.friend.length; i++){
        if(friends.friend[i] === "Dima"){
            names.push(friends.name);
        }
    }
    return(names);
},[]);
console.log(DimasFriends);

// #3
const copyFriends = [...friends];
const FriendFilter = copyFriends.sort((CurrectFriend, NextFriend) => {
    let frCrt = CurrectFriend.friend;
    let frNext = NextFriend.friend;
    return frCrt.length - frNext.length; 
});
console.log(FriendFilter);
// #4
const skillsSort = friends.reduce((skill, friends) => {
    skill.push(friends.skills);
    skill.sort();
    return(skill);
},[])
console.log(skillsSort);