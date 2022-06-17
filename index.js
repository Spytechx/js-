// const name = "Daniel Nwankwo";

const users = [
    {firstName:"John", lastName:"Doe", age:"18", gender:"Male", isMarried:"false"},
    {firstName:"Mary", lastName:"Doe", age:"28", gender:"Female", isMarried:"true"},
    {firstName:"David", lastName:"Doe", age:"18", gender:"Male", isMarried:"false"},
    {firstName:"Steven", lastName:"Wonder", age:"87", gender:"Male", isMarried:"true"},
    {firstName:"Emeka", lastName:"Doe", age:"6", gender:"Male", isMarried:"false"},
]

const newUsers = users.map((user) =>{
    return{
        name : `${user.firstName} ${user.lastName}`,
        age : user.age,
        gender : user.gender,
        isMarried: user.isMarried
    }
})
// console.log(newUsers);

const lastUsers = users.map((nuser) =>{
    return{
        name : `${nuser.firstName} ${nuser.lastName}`,
        age : nuser.age,
     }
})

// console.log(lastUsers);

