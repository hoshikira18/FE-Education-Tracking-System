import Header from "@/components/layout/authentication/header";

const Layout = ({children}) => {
    return (
        <div className="auth-layout w-screen h-screen">
            <Header/>
            <main className={`grid grid-cols-12 px-5 md:px-20 transition-all duration-500`}>
                {children}
            </main>
        </div>
    )
}

export default Layout