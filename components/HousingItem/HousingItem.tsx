import styles from './HousingItem.module.css';
import Image from 'next/image';
import { FaThumbsUp } from 'react-icons/fa';

function HousingItem() {
  return (
    <li className={styles.container}>
      <Image
        priority
        src="/images/Housing.jpg"
        height={250}
        width={300}
        alt="Housing Example"
        className={styles.image}
      />
      <div className={styles.overlay}>
        <span>Housing Title</span>
        <div className={styles.overlayLikes}>
          <FaThumbsUp />
          <span className={styles.likes}>20</span>
        </div>
      </div>
    </li>
  );
}

export default HousingItem;
