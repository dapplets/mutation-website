import { FC } from 'react'
import styles from './DappletExtensionPage.module.scss'
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
      <div className={styles.descriptionBlockTop}>
        Disclaimer: Mutable Web is a research project and an experimental technology.
      </div>
      <h1 className={styles.mainTitle}>
        You’re entering <span className={styles.mainTitleLabel}>Mutable Web</span>
      </h1>
      <div className={styles.descriptionBlock}>
        <div className={styles.descriptionBlockTop}>
          Forwarding to <span className={styles.variable}>{targetUrl}</span> as{' '}
          <span className={styles.variable}>{mutation}</span> version
          <br />
          maintained by <span className={styles.variable}>{author}</span>
        </div>
        <div className={styles.descriptionBlockBottom}>
          You need to install an extension to watch it.
        </div>
      </div>
      <div className={styles.buttonBlock}>
        <a
          href="https://chrome.google.com/webstore/detail/dapplets-development-buil/oldijfflfojekjlmkjclmjmnpdinieaa"
          target="_blank"
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
