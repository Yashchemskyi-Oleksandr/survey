import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header = ({ withBackButton }: { withBackButton?: boolean }) => (
  <header className={styles.header}>
    {/* Also it's possible to make it by router.back() */}
    {/* <button onClick={() => router.back()} type='button'>
      Previous question
    </button> */}
    {withBackButton ? (
      <button
        className={styles.backButton}
        onClick={() => {}}
        type='button'
      >
        <Image
          width={24}
          height={24}
          src='/arrow_black.svg'
          alt='logo'
        />
      </button>
    ) : null}
    <Image
      className={styles.logo}
      src='/logo.webp'
      alt='logo'
      width={24}
      height={24}
    />
  </header>
);

export default Header;
