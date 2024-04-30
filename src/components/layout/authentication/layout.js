import Header from "@/components/layout/authentication/header";

const Layout = ({children}) => {
    return (
        <div className="auth-layout w-screen h-screen">
            <Header/>
            <div className="auth-layout__content">
                {children}
            </div>
        </div>
    )
}

export default Layout