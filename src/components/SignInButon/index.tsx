import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import sytles from './styles.module.scss'

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button
      type="button"
      className={sytles.signInButton}
    >
      <FaGithub color="#04d361" />
      Ana Figueiredo
      <FiX color="#737389" className={sytles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={sytles.signInButton}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}