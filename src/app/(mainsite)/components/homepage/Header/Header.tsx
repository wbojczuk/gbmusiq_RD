import styles from './header.module.css';

export default function Header(){
return (
 <header className={styles.header}>
   <div className="center">
      <img src="/img/logo.webp" alt="logo" className={styles.logo} />
   </div>

   <div className={styles.logos}>
      <a target='_blank' href="https://www.facebook.com/gbmusiq21" className={styles.logoItem}>
         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m2.274 6.634h-1.443c-.171 0-.361.225-.361.524V8.6h1.805l-.273 1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545v-.874c0-1.254.87-2.273 2.064-2.273h1.443z"></path></svg>
      </a>
      <a target='_blank' href="https://www.youtube.com/channel/UCt6UY9htSVBTSAwrn4dn2Zw" className={styles.logoItem}>
         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M11.603 9.833L9.357 8.785C9.161 8.694 9 8.796 9 9.013v1.974c0 .217.161.319.357.228l2.245-1.048c.197-.092.197-.242.001-.334M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m0 13.5c-4.914 0-5-.443-5-3.9s.086-3.9 5-3.9s5 .443 5 3.9s-.086 3.9-5 3.9"></path></svg>
      </a>
      <a target='_blank' href="https://open.spotify.com/artist/3dLqBj8pQuDsyQMfFBJJZT?si=993xH0U7RYCmQHLk2LSDeQ" className={styles.logoItem}>
         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m2.964 13.437c-.148 0-.25-.056-.359-.122c-1.013-.613-2.268-.935-3.628-.935c-.694 0-1.443.082-2.226.242l-.095.024c-.1.024-.201.05-.279.05a.554.554 0 0 1-.562-.559c0-.318.18-.543.479-.6a11.968 11.968 0 0 1 2.687-.316c1.58 0 2.994.365 4.201 1.09c.208.121.338.26.338.569a.557.557 0 0 1-.556.557m.778-2.183c-.177 0-.292-.067-.395-.127c-1.825-1.084-4.547-1.443-6.785-.847a7.61 7.61 0 0 0-.102.031c-.084.027-.164.053-.274.053a.67.67 0 0 1-.667-.672c0-.357.186-.607.524-.702a9.95 9.95 0 0 1 2.84-.393c1.886 0 3.714.473 5.146 1.33c.261.148.379.353.379.658c0 .37-.299.669-.666.669m.883-2.488a.774.774 0 0 1-.421-.123c-1.239-.744-3.171-1.186-5.174-1.186c-1.043 0-1.99.115-2.817.338a1.295 1.295 0 0 0-.083.024a1.11 1.11 0 0 1-.312.058a.78.78 0 0 1-.783-.792c0-.386.217-.681.579-.788c.998-.295 2.148-.443 3.415-.443c2.281 0 4.453.506 5.957 1.391c.284.16.423.404.423.742a.774.774 0 0 1-.784.779"></path></svg>
      </a>
   </div>
    <img src='/img/header-bg.webp' alt='Image of ' className='bg-img' />
    <div className='shader'></div>
 </header>
)};