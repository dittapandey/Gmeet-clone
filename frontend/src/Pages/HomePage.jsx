import { FeedbackOutlined, HelpOutlineOutlined, Keyboard, SettingsOutlined, VideoCall } from '@material-ui/icons';
import { useEffect } from 'react';
import Carousel from '../Components/Carousel';
import './HomePage.css';

Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes();
}

const HomePage = () => {
    var newDate = new Date();
    var datetime =newDate.timeNow() + " . " + newDate.today();
    useEffect(()=>{},[datetime])
    return ( 
        <div className="homePage">
            <div className="header d-flex justify-content-between p-3">
                <div className="leftPart d-flex">
                <img style={{width: "120%"}} src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png" alt="google meet icon" />
                <p className="m-1 pt-1" style={{fontSize: "22px", color:"rgb(128,128,128)"}}>Meet</p>
                </div>
                <div className="rightPart ">
                    <div className="navicons d-flex flex-reverse justify-content-between">
                        <div className="datetime align-self-center m-2" style={{fontSize:"22px", color:"rgb(128,128,128)"}}>{datetime}</div>
                        <div className="helpIcon m-2"><HelpOutlineOutlined color="action" fontSize="medium"/></div>
                        <div className="feedbackIcon m-2"><FeedbackOutlined color="action" fontSize="medium"/></div>
                        <div className="settingsIcon m-2"><SettingsOutlined color="action" fontSize="medium"/></div>
                        
                        <dov className="userIcon">userIcon</dov>
                    </div>
                    <div className="usericon">

                    </div>
                </div>
                
            </div>
            <div className="container">
                <div className="row align-items-center mt-5">
                    <div className="left pt-4 col-sm d-flex flex-column align-items-stretch justify-content-center">
                        <h1 className="mb-0 mt-4 m-3" style={{textAlign:"start"}}>Premium Meetings Available.</h1>
                        <h1 className="mt-0 m-3" style={{textAlign:"start"}}>Now free for everyone.</h1>
                        <h5 className="m-2" style={{textAlign:"start", color:"GrayText"}}>We re-engineered the service we built for secure business meetings, Google meet, to make it free and available for all</h5>
                        <form className="form d-flex mt-4 pt-4 pb-5" style={{borderBottom: "1px solid rgb(190,190,190)"}}>
                            <button 
                            className='btn-primary d-flex align-center p-2' 
                            style={{
                                border:"none",
                                borderRadius:"6px",
                                fontSize:"15px",
                                fontWeight:"bolder",
                                marginRight:"2vw"
                            }}>
                                <VideoCall fontSize="15px" className="align-self-center"/>
                                <p className="m-1">New Meeting</p>
                                </button>
                                <div className="input d-flex">
                                    <Keyboard color="rgb(128,128,128)" className="align-self-center" style={{position:"absolute", marginLeft:"0.5vw"}}/>
                                    <input
                                    style={{paddingLeft: "2.5vw"}}
                                    type="string"
                                    placeholder="Enter the room Id"
                                    ></input></div>
                                <a className="align-self-center" href="" style={{color:"rgb(190, 190, 190)", marginLeft:"1vw"}}>Join</a>
                        </form>
                        <div className="supportText pt-2" style={{textSize:"10px", textAlign:"start"}}>
                            <a href="">Learn more</a> about google meet
                        </div>
                    </div>
                    <div className="right col-sm">
                        <h1 className="carousel"><Carousel/></h1>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HomePage;