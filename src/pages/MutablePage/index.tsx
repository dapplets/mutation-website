import { FC } from 'react'
import styles from './MutablePage.module.scss'
import Download from '../../assets/images/icons/download.svg'
import { Link, useSearchParams } from 'react-router-dom'
import alert from '../../assets/images/icons/alert.svg'
export type MutablePageProps = {}

const MutablePage: FC<MutablePageProps> = () => {
  const [searchParams] = useSearchParams()

  const mutationId = searchParams.get('m')
  const targetUrl = searchParams.get('t')

  if (!mutationId || !targetUrl) {
    return null
  }

  const [author, mutation, mutationName] = mutationId?.split('/')

  return (
    <div className={styles.root}>
      <div className={styles.descriptionBlockTop}>
        <img src={alert} />
        Mutable Web is an experimental technology.&nbsp;
        <Link to={'https://dapplets.org/'} target="_blank">
          Read more.
        </Link>
      </div>

      <h1 className={styles.mainTitle}>
        You’re entering
        <br /> Mutable Web
      </h1>

      <div className={styles.descriptionBlockMedium}>
        <div className={styles.textMutation}>
          {' '}
          Opening the <span className={styles.variable}>{mutationName}</span> mutation of the&nbsp;
        </div>

        <div className={styles.descriptionBlockTargetUrl}>
          <div className={styles.variableTargetUrl}>{targetUrl}</div>
        </div>
        <div className={styles.textMutation}>
          maintained by <span className={styles.variable}>{author}</span>
        </div>
      </div>

      <div className={styles.buttonBlock}>
        <a
          href="https://chromewebstore.google.com/detail/mutable-web/cnahdmdbhkphpbpbjjbfdnmbphbenglc"
          target="_blank"
          className={styles.buttonDownload}
        >
          <img src={Download} />
          Get our Extension
        </a>
        <div className={styles.descriptionBlockBottom}>
          You need to install an extension to watch it.
        </div>
      </div>
    </div>
  )
}

export default MutablePage
