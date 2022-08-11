import React, { HTMLAttributes, memo } from 'react';
import { Link } from 'react-router-dom';

interface PropsButton extends HTMLAttributes<HTMLButtonElement | HTMLLinkElement> {
  children: React.ReactNode;
  to?: string;
  href?: string;
  className?: string;
  title?: string;
  [props: string]: any;
}

function Button(props: PropsButton) {
  let Comp: React.ElementType = 'button';

  const _props: { [a: string]: any } = {
    ...props,
  };

  if (props.to) {
    Comp = Link;
  } else if (props.href) {
    Comp = 'a';
  }

  return (
    <Comp {..._props} className={props.className}>
      {props.children}
    </Comp>
  );
}

export default memo(Button);
