import Header from "@/components/layout/authentication/header";
import RoleSelectForm from "@/components/login/role-select-form";
import Layout from "@/components/layout/authentication/layout";
const Login = () => {
    return (
        <Layout>
                <RoleSelectForm className={`col-span-12 md:col-span-6`} />
                <img src={"/login/login.png"} alt="login-image" className={`col-span-12 md:col-span-6 transition-all duration-500`}/>
        </Layout>
    )
}

export default Login