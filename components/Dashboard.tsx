import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Dashboard =async () => {
    const {getUser} = getKindeServerSession()
    const user =await getUser()
    return (
        <div>   
        <h1>Dashboard {user?.given_name}</h1>
        </div>
    )
}
export default Dashboard;