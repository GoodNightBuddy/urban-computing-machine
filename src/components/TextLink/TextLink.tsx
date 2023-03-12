import React from 'react';
import { Link } from 'react-router-dom';
import { IRoutePath, RoutePath } from '../../types/RouteTypes';

type TextLinkProps = {
  to: string,
  plainText: string,
  linkText: string
}

const TextLink: React.FC<TextLinkProps> = ({to, linkText, plainText}) => {
  return (
    <div>
      {plainText}&nbsp;
      <Link to={RoutePath.CD + to} className="sign-form__link">
        {linkText}
      </Link>
    </div>
  )
}

export default TextLink;