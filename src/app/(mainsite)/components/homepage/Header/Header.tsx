import styles from './header.module.css';

export default function Header(){
return (
 <header className={styles.header}>
   <div className="center">
      <img src="/img/logo.png" alt="logo" className={styles.logo} />
   </div>
    <img src='/img/header-bg.png' alt='Image of ' className='bg-img' />
    <div className='shader'></div>
 </header>
)};