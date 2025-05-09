import Container from "react-bootstrap/Container";
import Quote from "../../resources/quote.svg";
import {TiHomeOutline} from 'react-icons/ti';
import Home from "../../resources/Home.svg";
import Dot from "../../resources/dot.svg";
import Dash from "../../resources/dash.svg";
export interface Event{
    image_src: string;
    tag: string;
    date: Date;
    title: string;
    author_img_src: string;
    author_name: string;
    description: string;
}

export const monthMap: Map<number,string> = new Map([
    [1, 'January'],
    [2, 'February'],
    [3, 'March'],
    [4, 'April'],
    [5, 'May'],
    [6, 'June'],
    [7, 'July'],
    [8, 'August'],
    [9, 'September'],
    [10, 'October'],
    [11, 'November'],
    [12, 'December'],
])

export function EventContainer(event: Event, handleClick: () => void) {
    return (
        <section className="event">
            <button className="eventImageButton" onClick={handleClick}>
                <img src={event.image_src} className="eventImage"/>
            </button>
            <div className="tag_and_date">
                <div className="tag">{event.tag}</div>
                <div className="date">{monthMap.get(event.date.getMonth()) + " " + event.date.getDate()+ ", " + event.date.getFullYear()}</div>
            </div>
            <h2>{event.title}</h2>
            <section className="event_bottom">
                <hr/>
                <section className="author">
                    <img className="roundImg" src={event.author_img_src}/>
                    {event.author_name}
                </section>
            </section>
        </section>
    );
}


export function EventDisplay(event: Event, handleClick: () => void,
 cur_id: number, num_ids: number, changeId: (id: number) => void
 ) {
    const elem_ids = Array.from({length: num_ids}, (_,i) => i);
    return (
        <section className="eventDisplay">
            <div className="eventContainerWrapper">
                {EventContainer(event, handleClick)}
            </div>
            <div className="eventDisplayDescription">
                <div className="iconsAndText">
                    <div className="quote-icon">
                        <img src={Quote} alt="Quotation Mark"/>
                    </div>
                    <div className="eventDescription">
                        {event.description}
                    </div>
                </div>
                <div className="navButtons">
                    <button className="homeButton" onClick={handleClick}>
                        <img src={Home} alt="Home"/>
                    </button>
                    {elem_ids.map((id) => {
                        if (id == cur_id) {
                            return <button className="activeButton">
                                <img src={Dash} alt="Dash"/>
                            </button>
                        } else {
                            return <button className="inActiveButton" onClick={() => changeId(id)}>
                                <img src={Dot} alt="Dot"/>
                            </button>
                        }
                    })}
                </div>
             </div>
        </section>
    );

}