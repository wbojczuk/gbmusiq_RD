import styles from './pagetitle.module.css';

export default function PageTitle(props: {title: string}){
return (
 <div className={styles.pageTitle}>
    <div className="center">
        <h1>{props.title}</h1>
    </div>
 </div>
)};