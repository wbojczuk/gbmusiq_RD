import styles from './header.module.css';

export default function Header(){
return (
 <header className={styles.header}>
 
    <img src='/img/header-bg.png' alt='Image of ' className='bg-img' />
    <div className='shader'></div>
 </header>
)};