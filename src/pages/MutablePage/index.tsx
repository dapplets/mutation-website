import { FC, useEffect, useState } from 'react'
import styles from './MutablePage.module.scss'
import Download from '../../assets/images/icons/download.svg'
import { useSearchParams } from 'react-router-dom'
export type MutablePageProps = {}

const MutablePage: FC<MutablePageProps> = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  const [version, setVersion] = useState('')
  const [website, setWebsite] = useState('')
  const [author, setAuthor] = useState('')
  const testUrl =
  'https://augm.link/?t=https%3A%2F%2Ftwitter.com%2FMrConCreator&m=alsakhaev.near%2Fred-buttons&d=paywall-dapplet'
  useEffect(()=>{
    searchParams.get('page')
    // todo replace
    parseUrl(testUrl)
  },[])

  const parseUrl = (x: string) => {
    const newLink = x.split('m=')
   const parseNewLink = newLink[1].split('%2F')
   const newVersion = parseNewLink[1].split('&d=')
   setVersion(newVersion[0])
   setAuthor(parseNewLink[0])
  setWebsite(newLink[0].split('%2F')[2])
   
   
  }
 
  return (
    <div className={styles.root}>
      <h1 className={styles.mainTitle}>
        You’re entering <span className={styles.mainTitleLabel}>Mutable Web</span>
      </h1>
      <div className={styles.descriptionBlock}>
        <div className={styles.descriptionBlockTop}>
          You are about to open a &#8249;{version}&#8250; version of the &#8249;{website}&#8250;
          maintained by &#8249;{author}&#8250;
        </div>
        <div className={styles.descriptionBlockBottom}>
          You need to install an extension to watch it.
        </div>
      </div>
      <div className={styles.buttonBlock}>
        <a
          href="https://chrome.google.com/webstore/detail/dapplets-development-buil/oldijfflfojekjlmkjclmjmnpdinieaa"
          className={styles.buttonDownload}
        >
          <img src={Download} />
          Get Extension
        </a>
      </div>
    </div>
  )
}

export default MutablePage
