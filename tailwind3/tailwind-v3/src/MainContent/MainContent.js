import "../MainContent/maincontent.scss"
import main from "../images/main_picture.jpg"

function MainContent(){
    return(
        <div className="">
            <img className="relative opacity-30 object-cover h-screen" src={main} alt="" />
            <div className="absolute text-white main-text left-1/2 text-6xl">Priceless elegance</div>
        </div>
    )
}

export default MainContent;