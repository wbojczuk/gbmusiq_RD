"use client"
import Link from 'next/link';
import styles from './events.module.css';
import eventData from '@/app/(mainsite)/data/eventData';

export default function Events(){

    const eventDataElems = eventData.map((data, i)=>{
        const hasDirections: boolean = (data.directions != undefined)
        const dateObj = new Date(data.date)
        const currentDateObj = new Date()
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        //@ts-ignore
        const formattedDate = dateObj.toLocaleDateString("en-US", options);
        
        let retval = <></>
        if((dateObj.getFullYear() >= currentDateObj.getFullYear()) && (dateObj.getMonth() >= currentDateObj.getMonth()) && (dateObj.getDate() >= currentDateObj.getDate())){
            retval =  
            <div key={i} className={styles.eventItem}>
                <div className={styles.info}><span>{formattedDate}</span><br /> <span>@ {data.time}</span></div>
                <div className={styles.location}>{data.location}</div>
                <Link className='main-link main-link-outline' href={(hasDirections) ? data.directions! : "/contact"}>{(hasDirections) ? "Get Directions" : "Contact For Info"}</Link>
            </div>
        }

        return(
          retval
        )
    })

return (
 <div className={styles.events}>
    <h2>Upcoming Events</h2>
    <div className={styles.eventsWrapper}>
        {eventDataElems}
    </div>
 </div>
)};