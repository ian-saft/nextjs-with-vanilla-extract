import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faSmileWink } from '@fortawesome/free-solid-svg-icons';

import * as styles from './styles.css';

export default function HomePage() {
  return (
    <>
      <header className={styles.headerStyle}>
        <FontAwesomeIcon icon={faRocket} className={styles.iconStyle} />

        <h1>Template de projeto Next.js 13.4.12</h1>

        <FontAwesomeIcon icon={faRocket} className={styles.iconStyle} />
      </header>

      <main className={styles.mainStyle}>
        <FontAwesomeIcon icon={faSmileWink} className={styles.contentStyle} />

        <h2 className={styles.alreadyStyle}>Tudo pronto!</h2>
        <p className={styles.captionStyle}>
          Bem vindo ao seu projeto{' '}
          <strong className={styles.strongStyle}>Next</strong> com{' '}
          <strong className={styles.strongStyle}>Vanilla Extract</strong>!
        </p>
      </main>
    </>
  );
}
