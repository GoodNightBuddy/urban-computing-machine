import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../types/RouteTypes';
import styles from '../../components/Auth/SignPage.module.css';

type TextLinkProps = {
  to: Exclude<RoutePath, RoutePath.CD | RoutePath.ANY>,
  plainText: string,
  linkText: string
}

const TextLink: React.FC<TextLinkProps> = ({to, linkText, plainText}) => {
  return (
    <div>
      {plainText}&nbsp;
      <Link to={RoutePath.CD + to} className={styles.sign_form__link}>
        {linkText}
      </Link>
    </div>
  )
}

export default TextLink;