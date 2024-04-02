import styles from './formandmap.module.css';
import FreeEstimateForm from '../FreeEstimateForm/FreeEstimateForm';
import ContactInfo from '../ContactInfo/ContactInfo';

export default function FormAndMap(){
return (
 <div className={styles.formAndMap}>
    <div className={styles.formWrapper}>
        <FreeEstimateForm />
    </div>

    <div className={styles.mapWrapper}>
       <ContactInfo />
    </div>
 </div>
)};