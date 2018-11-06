// @flow
import React, { Component } from 'react';
import { Card } from 'components/Card/Card';
import { cityFilter } from 'consts/filters';
import './_c-column.scss';

type Props = {
  title: string,
  data: any[],
  currentPosition: string,
  filter: string,
  filterBy: string,
  btnRight: string,
  btnLeft: string,
  handleBtnClick: Function
};

export class Column extends Component<Props> {
  filterCards = data => {
    const { filter, filterBy } = this.props;
    switch (filterBy) {
      case cityFilter:
        return data.filter(item => {
          const {
            location: { city }
          } = item;

          return city.substring(0, filter.length).toLowerCase() === filter;
        });

      default:
        return data.filter(item => {
          const {
              name: { first, last }
            } = item,
            fullName = `${first} ${last}`;

          return fullName.substring(0, filter.length).toLowerCase() === filter;
        });
    }
  };

  displayCards = () => {
    const { data, btnLeft, btnRight, handleBtnClick, currentPosition, filter } = this.props;

    let cards = null,
      filteredData = data;

    if (data && data.length && filter) {
      filteredData = this.filterCards(data);
    }

    if (filteredData && filteredData.length) {
      cards = filteredData.map(card => {
        const {
            name: { first, last },
            picture: { thumbnail },
            location: { city },
            login: { uuid }
          } = card,
          fullName = `${first} ${last}`;

        return (
          <Card
            name={fullName}
            img={thumbnail}
            location={city}
            key={uuid}
            id={uuid}
            btnLeft={btnLeft}
            btnRight={btnRight}
            handleBtnClick={handleBtnClick}
            currentPosition={currentPosition}
          />
        );
      });
    }

    return cards;
  };

  render() {
    const { title } = this.props,
      cards = this.displayCards();
    return (
      <div className="c-column">
        <header className="c-column__header">
          <h2 className="c-column__title">{title}</h2>
        </header>
        <section className="c-column__body">{cards}</section>
      </div>
    );
  }
}
