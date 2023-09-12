import { FC, useState } from 'react'
import styles from './MutablePage.module.scss'
import Download from '../../assets/images/icons/download.svg'
// import { Link as RouterLink } from "react-router-dom";

export type MutablePageProps = {}

const MutablePage: FC<MutablePageProps> = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.mainTitle}>
        You’re entering <span className={styles.mainTitleLabel}>Mutable Web</span>
      </h1>
      <div className={styles.descriptionBlock}>
        <div className={styles.descriptionBlockTop}>
          You are about to open a &#8249;versionID&#8250; version of the &#8249;website url&#8250;
          maintained by &#8249;Author&#8250;
        </div>
        <div className={styles.descriptionBlockBottom}>
          You need to install an extension to watch it.
        </div>
      </div>
      <div className={styles.buttonBlock}>
        <a
          href="https://chrome.google.com/webstore/detail/dapplets/pjjnaojpjhgbhpfffnjleidmdbajagdj"
          className={styles.buttonDownload}
        >
          <img src={Download} />
          Get our Extension
        </a>
      </div>
    </div>
  )
}

export default MutablePage
