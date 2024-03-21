import { FC } from 'react'
import styles from './Layout.module.scss'
import heart from '../../assets/images/icons/heart.svg'


export type LayoutProps = {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        {children}

        <div className={styles.footer}>
          <div className={styles.footerText}>
            <span className={styles.footerTextCopiright}>© 2019—2024 &#x20;</span>
            <img src={heart} /> &#x20;
            <span className={styles.footerTextCopiright}>by &#x20; </span>
            <a
              className={styles.footerTextLink}
              href="https://dapplets.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dapplets Project
            </a>
          </div>
        
        </div>
      </div>
    
    </div>
  )
}

export default Layout
