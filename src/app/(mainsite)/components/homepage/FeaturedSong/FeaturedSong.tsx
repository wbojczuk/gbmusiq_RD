import styles from './featuredsong.module.css';

export default function FeaturedSong(){
return (
 <div className={styles.featuredSong}>
    <h2>Trials Tribulations</h2>
        <div className="center">
        <div className={styles.embedWrapper}>
            <iframe width="100%" height="100%" style={{border: "none"}} src="https://www.youtube.com/embed/O86Cfzxmo_E?si=CpcrB-sdXAwzar_7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        </div>
    <h3>Song Out Now!</h3>
    <div className={`center ${styles.linkWrapper}`}>
        <a className='main-link main-link-outline' target='_blank' href='https://www.youtube.com/watch?v=O86Cfzxmo_E'>Listen To It</a>
    </div>
 </div>
)};