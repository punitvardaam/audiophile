import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="bg-black">
            <div className="container mx-auto flex justify-between border-b border-slate-600 border-solid py-6">
                <img src='/images/shared/desktop/logo.svg' alt="Logo"/>
                <Navbar/>
                <img src='/images/shared/desktop/icon-cart.svg' alt="Cart icon"/>
            </div>
        </div>
    );
}
export default Header;