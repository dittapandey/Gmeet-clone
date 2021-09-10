import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { useEffect, useState } from "react";

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const handleLeftArrow = (e) => {
        e.preventDefault();
        var temp = index;
        if(temp === 0){
            setIndex(3);
        }
        else{
            setIndex((temp-1)%4);
        }
    }
    const handleRightArrow = (e) => {
        e.preventDefault();
        var temp =index;
        setIndex((temp+1)%4);
    }
    useEffect(()=>{}, [index]);
    const data=[{
        title:"Start a new meeting",
        src:"https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg",
        content: "Click on New Meeting to start a new meeting"
    },
    {
        title: "Enjoy our video calls",
        src:"https://www.gstatic.com/meet/user_edu_brady_bunch_light_81fa864771e5c1dd6c75abe020c61345.svg",
        content: "talk to the person over internet calls using WTC and peer to peer connection"
    },
    {
        title:"The project is deployed",
        src:"https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg",
        content:"The project is now deployed so use it at any time you want for one on one calling"
    },
    {
        title:"Your meetings are safe",
        src:"https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg",
        content:"your meetings are end to end encrypted"
    }
];
    
    return ( 
        <div className="carousel d-flex flex-column">
            <div className="d-flex justify-content-center">
            <div className="leftButton align-self-center">
                <button 
                style={{background:"none", border: "none"}}
                onClick={(e)=>handleLeftArrow(e)}
                ><KeyboardArrowLeft/></button>
            </div>
            <div className="image">
                <img src={data[index].src} alt="" />
            </div>
            <div className="rightButton align-self-center">
            <button
             style={{background:"none", border: "none"}}
             onClick={(e)=>handleRightArrow(e)}
             ><KeyboardArrowRight/></button>
            </div>
        </div>
        <div className="description">
            <h3>{data[index].title}</h3>
            <p style={{fontSize:"16px"}}>{data[index].content}</p>
        </div>
        </div>
        
     );
}
 
export default Carousel;