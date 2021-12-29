
import CallPageControls from "../Components/CallPageControls";

import MeetingInfo from "../Components/MeetingInfo";
import "./CallPage.css";
const CallPage = () => {
    return ( 
        <div className="classPage" style={{
            margin:"0",
            borderStyle:"none",
            height:"100vh",
            width: "100%",
            backgroundColor: "#202124"
            }}>
            <div className="meeting-info"><MeetingInfo/></div>
            <div className="container">
                <div className="row" >
                    <div className="video-container" style={{zIndex:"-1"}} controls></div>
                </div>
            </div>
            <div className="bottom-bar">
                <CallPageControls/>
            </div>
        </div>
     );
}
 
export default CallPage;