import styles from './styles.module.scss';

export function SubscriptionButton() {
  return (
    <button
      type='button'
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}