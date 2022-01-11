import "../Navigation/Navigation.scss"

function Navigation() {
    return (
        <nav>
            <div className="flex justify-between bg-white items-center h-16 bg-[#112836]">
                <div className="text-2xl font-bold ml-10 text-white">
                    <div>Logo</div>
                </div>
                <div className="flex text-xl font-bold mr-10 text-white">
                    <Buttons text = "Log In"/>
                    <Buttons text = "Sign Up" />
                </div>
            </div>
        </nav>
    )
}

function Buttons({text, className}){
    return(
        <div className={`mx-4 transition-all duration-200`}>
            <a href="">{text}</a>
        </div>
    )
}

export default Navigation;