import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaAngleRight, FaCog } from 'react-icons/fa';
import { GetServerSideProps } from 'next';
import { getSession, signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

function Navbar() {
  const { data: session } = useSession();

  const [active, setActive] = useState(false);

  console.log(session);

  return (
    <>
      <nav className={styles.navContainer}>
        <Link href="/">
          <div className={styles.navLogo}>
            <Image
              priority
              src="/images/Logo.svg"
              height={45}
              width={45}
              alt="Logo"
            />
          </div>
        </Link>
        <div className={styles.navWrapper}>
          <ul className={styles.navMenu}>
            <Link href="/">
              <li className={styles.navItem}>Home</li>
            </Link>
            <Link href="/listings">
              <li className={styles.navItem}>Listings</li>
            </Link>
            <li className={styles.navItem}>Guide</li>
          </ul>
        </div>

        <div onClick={() => setActive(!active)} className={styles.responsive}>
          {!active && <FaBars size={25} />}
        </div>

        {session?.user?.image && session?.user?.name ? (
          <div className={styles.userContainer}>
            <Link href="/newlisting">
              <button className={`${styles.navButton} btn-outline`}>
                New Listing
              </button>
            </Link>
            <FaCog size={20} className={styles.navCog} />
            <div
              className={styles.userProfile}
              onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
            >
              <Image
                priority
                src={session.user.image}
                className={styles.userImage}
                height={35}
                width={35}
                alt="Logo"
              />
              <p className={styles.userName}>{session?.user?.name}</p>
            </div>
          </div>
        ) : (
          <button
            onClick={() => signIn('discord')}
            className={`${styles.navButton} btn-outline`}
          >
            Sign in with Discord
          </button>
        )}
      </nav>

      {/* Sidebar */}

      <div className={active ? styles.activeSideNav : styles.sideNav}>
        <FaAngleRight
          className={styles.sideNavItem}
          onClick={() => setActive(!active)}
          size={25}
        />
        {session?.user?.image && session?.user?.name && (
          <>
            <div
              className={styles.sideNavUser}
              onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
            >
              <Image
                priority
                src={session.user.image}
                className={styles.userImage}
                height={35}
                width={35}
                alt="Logo"
              />
              <p className={styles.userName}>{session?.user?.name}</p>
              <FaCog className={styles.navCog} size={20} />
            </div>
            <Link href="/newlisting">
              <li
                onClick={() => setActive(!active)}
                className={`${styles.sideNavListing}`}
              >
                New Listing
              </li>
            </Link>
          </>
        )}
        <ul>
          <Link href="/">
            <li
              onClick={() => setActive(!active)}
              className={styles.sideNavItem}
            >
              Home
            </li>
          </Link>
          <Link href="/listings">
            <li
              onClick={() => setActive(!active)}
              className={styles.sideNavItem}
            >
              Listings
            </li>
          </Link>
          <Link href="/">
            <li
              onClick={() => setActive(!active)}
              className={styles.sideNavItem}
            >
              Guide
            </li>
          </Link>

          {!session && (
            <li
              onClick={() => signIn('discord')}
              className={`${styles.sideNavBtn}`}
            >
              Sign in with Discord
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession(context);

//   if (session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// };

export default Navbar;
