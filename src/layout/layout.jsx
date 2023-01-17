import { Outlet } from "react-router-dom";
import Header from "../components/header";
const Layout = () => {
    return (
        <>
            <Header /> 
            <main className="container mx-auto px-16 py-8">
                <Outlet />
            </main>
        </>

    );
}
 
export default Layout;