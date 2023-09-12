import { FC, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import styles from './Layout.module.scss'
import MutablePage from '../../pages/MutablePage'
import heart from '../../assets/images/icons/heart.svg'
import git from '../../assets/images/icons/git.svg'
import discord from '../../assets/images/icons/discord.svg'
import tg from '../../assets/images/icons/tg.svg'
import medium from '../../assets/images/icons/medium.svg'
import twitter from '../../assets/images/icons/twitter.svg'
import fb from '../../assets/images/icons/facebook.svg'
import mail from '../../assets/images/icons/mail.svg'
// import { Link as RouterLink } from "react-router-dom";

export type LayoutProps = {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      primary: { main: '#D9304F' },
      mode: isDarkMode ? 'dark' : undefined,
    },
  })

  const handleDarkModeChange = (_: React.ChangeEvent<HTMLInputElement>, newValue: boolean) => {
    setIsDarkMode(newValue)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.layout}>
        <div className={styles.container}>
          <MutablePage />

          <div className={styles.footer}>
            <div className={styles.footerText}>
              <span className={styles.footerTextCopiright}>© 2019—2023	&#x20;</span>
              <img src={heart} />	&#x20;
              <span className={styles.footerTextCopiright}>by	&#x20; </span>
              <a
                className={styles.footerTextLink}
                href="https://dapplets.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dapplets Project
              </a>
            </div>
            <div className={styles.footerLinks}>
              <a className={styles.footerItem} href="https://github.com/dapplets" target="_blank" rel="noopener noreferrer">
                <img src={git} />
              </a>
              <a className={styles.footerItem}  href="https://discord.com/invite/YcxbkcyjMV" target="_blank" rel="noopener noreferrer">
                <img src={discord} />
              </a>
              <a className={styles.footerItem}  href="https://t.me/dapplets" target="_blank" rel="noopener noreferrer">
                <img src={tg} />
              </a>
              <a className={styles.footerItem}  href="https://blog.dapplets.org/" target="_blank" rel="noopener noreferrer">
                <img src={medium} />
              </a>
              <a className={styles.footerItem}  href="https://twitter.com/dapplets_org" target="_blank" rel="noopener noreferrer">
                <img src={twitter} />
              </a>
          
              <a className={styles.footerItem}  href="https://www.facebook.com/dapplets" target="_blank" rel="noopener noreferrer">
                <img src={fb} />
              </a>
              <a className={styles.footerItem}  href="mailto:contact@dapplets.org" target="_blank" rel="noopener noreferrer">
                <img src={mail} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Layout
