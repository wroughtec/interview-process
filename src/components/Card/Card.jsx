// @flow
import React, { Component } from 'react';
import { Icon } from 'components/Icon/Icon';
import { arrowRight, arrowLeft } from 'consts/iconIds';
import './_c-card.scss';

type Props = {
  name: string,
  img: string,
  location: string,
  currentPosition: string,
  id: string,
  handleBtnClick: Function,
  btnLeft?: string,
  btnRight?: string
};

export class Card extends Component<Props> {
  handleLeftClick = () => {
    const { id, currentPosition, btnLeft, handleBtnClick } = this.props;

    return handleBtnClick(id, currentPosition, btnLeft);
  };

  handleRightClick = () => {
    const { id, currentPosition, btnRight, handleBtnClick } = this.props;

    return handleBtnClick(id, currentPosition, btnRight);
  };

  render() {
    const { name, img, location, btnLeft, btnRight } = this.props;

    return (
      <article className="c-card">
        <div className="c-card__details">
          {img && <img className="c-card__img" alt={name} title={name} src={img} />}
          <div className="c-card__body">
            {name}
            <br />
            {location}
          </div>
        </div>
        <div className="c-card__btns">
          {btnLeft && (
            <button onClick={this.handleLeftClick} className="c-card__btn c-card__btn--left" type="button">
              <Icon iconId={arrowLeft} />
            </button>
          )}
          {btnRight && (
            <button onClick={this.handleRightClick} className="c-card__btn c-card__btn--right" type="button">
              <Icon iconId={arrowRight} />
            </button>
          )}
        </div>
      </article>
    );
  }
}

Card.defaultProps = {
  btnLeft: '',
  btnRight: ''
};
