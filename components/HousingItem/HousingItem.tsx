import styles from './HousingItem.module.css';
import Image from 'next/image';
import { FaThumbsUp } from 'react-icons/fa';
import { House } from '../../types/types';

interface Props {
  listing: House;
}

function HousingItem({ listing }: Props) {
  return (
    <li className={styles.container}>
      <img src={listing.image} alt={listing.name} className={styles.image} />

      <div className={styles.overlay}>
        <span>{listing.name}</span>
      </div>
    </li>
  );
}

export default HousingItem;
