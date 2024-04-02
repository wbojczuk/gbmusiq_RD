"use client"
import styles from "./aboutcontent.module.css"

export default function AboutContent() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/about-bg.png" width={360} height={600} alt="People Praising Image" />
        </div>
        

        <div className={styles.content}>
            <h2>About</h2>

            <p>My journey has been marked by hurdles and challenges, but through faith, I've overcome them. Now, that same faith propels me to soar even higher in the Lord's grace. Our music is born from life's disappointments, pushing us to seek solace in God. It's not just about me; it's about everyone touched by our ministry, where music becomes a lifeline connecting us to God's saving grace.
            </p>
        </div>
    </section>
  )
}
