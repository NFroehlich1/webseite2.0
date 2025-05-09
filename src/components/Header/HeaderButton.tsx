import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderButtonProps {
    caption: string;
    href: string;
}

export default function HeaderButton(props:HeaderButtonProps) {

  const [caption, setCaption] = useState(props.caption)
  const [href, setHref] = useState(props.href)

  return (
    <Link className="Header-Button" to={href}>
      {caption}
    </Link>
  );
}