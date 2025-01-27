interface User {
    id:string,
    name: string,
    age:number,
    email:string,
    password:string
};

// // using Pick<> here...
type UpdatesProps = Pick<User, "name" | "age" | "email">

function updateUser(updatesProps:UpdatesProps){
    // hit the database to update the user
}

// using Partial<> here...
interface User {
    id:string,
    name: string,
    age:number,
    email:string,
    password:string
};

type UpdatePropsOptional = Partial<UpdatesProps>

function updateUser(updatesProps:UpdatePropsOptional){
    // hit the database to update the user
}
updateUser({
    name:"Aniket"
})

// using readonly here
type User = {
    name: string,
    age: number,
}

const user: Readonly<User> = {
    name:"John",
    age: 21
}
user.age = "asldkl"


// using record here...
type Users = Record<string, { age: number; name: string }>;

const users: Users = {
    "ashdh@1": { age:22, name:"fuefuweh" },
    "ashdh@2": { age:21, name:"ityuiuyi" }
}

//also map()
const usersInfo = new Map();
usersInfo.set("jhfheh@", { name: "shd", age:21, email:"sdhkjsdh@" })
usersInfo.set("sdsd@", { name: "fggfg", age:24, email:"fdffrrt@" })

const user = usersInfo.get("jhfheh@")
usersInfo.delete("sdsd@")