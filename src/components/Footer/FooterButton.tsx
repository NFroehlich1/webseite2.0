import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

interface FooterButtonProps {
    caption: string;
    href: string;
}

export default function FooterButton(props:FooterButtonProps) {

  const [caption, setCaption] = useState(props.caption)
  const [href, setHref] = useState(props.href)

  return (
    <Link className="Footer-Button" to={href}>
      {caption}
    </Link>
  );
}