// @flow

import React from 'react';
import { Icon } from 'components/Icon/Icon';
import { spinnerIcon } from 'consts/iconIds';
import './_c-spinner.scss';

export const Spinner = () => (
  <div className="c-spinner">
    <div className="c-spinner__wrapper">
      <Icon iconClass="c-spinner__icon" iconId={spinnerIcon} />
    </div>
  </div>
);
