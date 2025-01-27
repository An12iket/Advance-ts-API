interface User {
    id:string,
    name: string,
    age:number,
    email:string,
    password:string
};

// using Pick<> here...

type UpdatesProps = Pick<User, "name" | "age" | "email">

function updateUser(updatesProps:UpdatesProps){
    // hit the database to update the user
}