"use client"
import styles from "./about.module.css"

export default function About() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/about-bg.webp" width={360} height={600} alt="People Praising Image" />
        </div>
        

        <div className={styles.content}>
            <h2>About</h2>

            <p>Our music arose from navigating through various disappointments in life, leaving us with no recourse but to seek solace in God. Music became pivotal, serving as a lifeline not only for me but also for those engaged in our music ministry, offering hope and renewal amidst life's challenges.
            </p>
        </div>
    </section>
  )
}
