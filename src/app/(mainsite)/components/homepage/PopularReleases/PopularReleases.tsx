import styles from './popularreleases.module.css';

export default function PopularReleases(){
return (
 <div className={styles.popularReleases}>
    <h2>Popular Releases</h2>

    <div className={styles.embedWrapper}>
        <iframe style={{"borderRadius":"12px", border: "none"}} src="https://open.spotify.com/embed/artist/3dLqBj8pQuDsyQMfFBJJZT?utm_source=generator&theme=0" width="100%" height="100%" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>

    <div className={`center ${styles.linkWrapper}`}>
        <a className='main-link main-link-outline' target='_blank' href="https://open.spotify.com/artist/3dLqBj8pQuDsyQMfFBJJZT?si=993xH0U7RYCmQHLk2LSDeQ">Explore All</a>
    </div>
 </div>
)};