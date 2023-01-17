import NavBar from "./navBar";
const Header = () => {
    return ( 
        <header style={{width: '100%'}} className='bg-slate-800'>
            <div className="container mx-auto px-16 py-8">
                <h1 className="text-4xl font-bold text-white mb-2.5">Post from JSON PlaceHolder</h1>
                {<NavBar />}
            </div>
        </header>
    );
}
 
export default Header;
