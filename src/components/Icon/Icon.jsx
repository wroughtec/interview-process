// @flow

import React from 'react';

type Props = {
  iconClass?: string,
  iconId: string
};

export const Icon = ({ iconClass, iconId }: Props) => {
  const svgIcon = (
    <svg className={iconClass} width="1em" height="1em" preserveAspectRatio="xMinYMid meet">
      <use xlinkHref={`#${iconId}`} />
    </svg>
  );

  return svgIcon;
};

Icon.defaultProps = {
  iconClass: '',
  iconSize: ''
};
