import "../Navigation/Navigation.scss"

function Navigation() {
    return (
        <nav>
            <div className="flex justify-between items-center h-16 bg-[#112836]">
                <div className="text-xl font-bold ml-5 text-white sm:ml-10">
                    <div>WatchAnime</div>
                </div>
                <div className="flex font-bold mr-5 text-white items-center costum-font sm:mr-10">
                    <Buttons text = "Log In" className={"text-md sm:text-lg mx-2 sm:mx-4 costum"}/>
                    <Buttons text = "SIGN UP" className={"text-lg sm:text-xl text-teal-500 mx-2 sm:mx-4 costum-green"} />
                </div>
            </div>
        </nav>
    )
}

function Buttons({text, className}){
    return(
        <div className={`transition-all duration-200 relative ${className}`}>
            <a href="">{text}</a>
        </div>
    )
}

export default Navigation;