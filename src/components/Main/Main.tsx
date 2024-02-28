import Navbar from "../Navbar/Navbar"
import "./Main.css"
const Main = () => {
    return (
        <>
        <div className="Main-Container">
            <Navbar/>
            <div className="Main-Section">
                <div className="Main-Section-Left">
                    <div className="Main-Section-Left-RowOne">
                        <div className="w-60 h-60 Main-Section-Left-BackgoundCircle outer-circle">
                            <div className="Main-Section-Left-MainCircle inner-circle">
                                <img src="./icons/heart.svg" className="w-24 h-24" alt="heart" />
                                <p className="font-medium text-xl">Life-Style</p>
                            </div>
                        </div>
                    </div>
                    <div className="Main-Section-Left-RowTwo">
                        <div className="Main-Section-Left-BackgoundCircle outer-circle">
                            <div className="Main-Section-Left-SubCircle inner-circle ">
                                <img src="./icons/sleep.svg" className="w-[46px] h-[46px]" alt="sleep" />
                                <p className="text-sm">Sleep</p>
                            </div>
                        </div>
                        <div className="Main-Section-Left-BackgoundCircle outer-circle">
                            <div className="Main-Section-Left-SubCircle inner-circle ">
                                <img src="./icons/disease.svg" className="w-[46px] h-[46px]" alt="disease" />
                                <p className="text-sm">Disease</p>
                            </div>
                        </div>
                    </div>
                    <div className="Main-Section-Left-RowThree">
                        <div className="Main-Section-Left-BackgoundCircle outer-circle">
                            <div className="Main-Section-Left-SubCircle inner-circle ">
                                <img src="./icons/exercise.svg" className="w-[46px] h-[46px]" alt="exercise" />
                                <p className="text-sm">Exercise</p>
                            </div>
                        </div>
                        <div className="Main-Section-Left-BackgoundCircle outer-circle">
                            <div className="Main-Section-Left-SubCircle inner-circle ">
                                <img src="./icons/sunexposure.svg" className="w-[46px] h-[46px]" alt="sunexposure" />
                                <p className="text-sm">Sun Exposure</p>
                            </div>
                        </div>
                    </div>
                    <div className="Main-Section-Left-RowFour">
                        <div className="Main-Section-Left-BackgoundCircle outer-circle">
                            <div className="Main-Section-Left-SubCircle inner-circle ">
                                <img src="./icons/game.svg" className="w-[46px] h-[46px]" alt="game" />
                                <p className="text-sm">Game</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Main-Section-Right absolute bottom-0 right-0 top-[233px] ">
                    <img src="./icons/person.svg" alt="" />
                </div>
            </div>
        </div>        
        </>
    )
}
export default Main

