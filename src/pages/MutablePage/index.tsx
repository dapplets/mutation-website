import { FC } from 'react'
import styles from './MutablePage.module.scss'
import Download from '../../assets/images/icons/download.svg'
import { useSearchParams } from 'react-router-dom'
export type MutablePageProps = {}

const MutablePage: FC<MutablePageProps> = () => {
  const [searchParams] = useSearchParams()

  const mutationId = searchParams.get('m')
  const targetUrl = searchParams.get('t')

  if (!mutationId || !targetUrl) {
    return null
  }

  const [author, mutation] = mutationId?.split('/')

  return (
    <div className={styles.root}>
      <h1 className={styles.mainTitle}>
        You’re entering <span className={styles.mainTitleLabel}>Mutable Web</span>
      </h1>
      <div className={styles.descriptionBlock}>
        <div className={styles.descriptionBlockTop}>
          You are about to open a {mutation} version of the {targetUrl} maintained by {author}
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
