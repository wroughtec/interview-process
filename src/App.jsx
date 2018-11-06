// @flow
import React, { Component, Fragment } from 'react';
import { asyncFetch } from 'utils/asyncFetch';
import { endpoint } from 'consts/apiEndpoints';
import { Column } from 'components/Column/Column';
import { columnData } from 'consts/columnData';
import { Filter } from 'components/Filter/Filter';
import { FilterBy } from 'components/FilterBy/FilterBy';
import { nameFilter } from 'consts/filters';
import { Spinner } from 'components/Spinner/Spinner';
import 'app/_app.scss';

type State = {
  results: any[],
  applied: any[],
  interviewing: any[],
  hired: any[],
  loading: boolean,
  filter: string,
  filterBy: string
};

export class App extends Component<void, State> {
  state = {
    results: [],
    applied: JSON.parse(localStorage.getItem('applied')) || [],
    interviewing: JSON.parse(localStorage.getItem('interviewing')) || [],
    hired: JSON.parse(localStorage.getItem('hired')) || [],
    filter: JSON.parse(localStorage.getItem('filter')) || '',
    filterBy: JSON.parse(localStorage.getItem('filterBy')) || nameFilter,
    loading: true
  };

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', this.filterUpdated);
    }

    // Only load new applicants if none in the applied state
    if (
      !localStorage.getItem('applied') ||
      (Array.isArray(JSON.parse(localStorage.getItem('applied'))) &&
        !JSON.parse(localStorage.getItem('applied')).length)
    ) {
      return this.getInterviewers();
    }

    return this.loadingComplete();
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', this.filterUpdated);
    }
  }

  loadingComplete = () => {
    this.setState({
      loading: false
    });
  };

  // Updates the state if filter is changed in another window
  // @TODO could add the different progresses in here to be updated
  filterUpdated = () => {
    const { filter, filterBy } = this.state,
      storageFilter = localStorage.getItem('filter'),
      storageFilterBy = localStorage.getItem('filterBy');

    if (storageFilter !== null && JSON.parse(localStorage.getItem('filter')) !== filter) {
      this.setState({
        filter: JSON.parse(localStorage.getItem('filter'))
      });
    }

    if (storageFilterBy !== null && JSON.parse(localStorage.getItem('filterBy')) !== filterBy) {
      this.setState({
        filterBy: JSON.parse(localStorage.getItem('filterBy'))
      });
    }
  };

  // Fetch interviewers from API
  getInterviewers = async () => {
    try {
      const data = await asyncFetch(endpoint);

      this.setAppliedApplicants(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Add data from API to temporay array to be added to the applied column
  setAppliedApplicants = ({ results }) => {
    this.setState(
      {
        applied: results
      },
      () => {
        const { applied } = this.state;
        this.loadingComplete();
        localStorage.setItem('applied', JSON.stringify(applied));
      }
    );
  };

  handleBtnClick = (id: string, currentPosition: string, moveTo: string) => {
    const { state } = this,
      moveInterviewer = state[moveTo];

    return this.updateProgress(moveTo, moveInterviewer, currentPosition, id);
  };

  // Get the interviewer that progress is changing
  getInterviewer = (currentPosition: string, id: string) => {
    const { state } = this;

    return state[currentPosition].filter(item => item.login.uuid === id);
  };

  // Move the interviewer from one array to another
  updateProgress = (progress: string, newPosition: any[], currentPosition: string, id: string) => {
    const interviewer = this.getInterviewer(currentPosition, id),
      oldPosition = this.updateOldPosition(currentPosition, id);

    newPosition.push(...interviewer);

    return this.updatePosition(progress, newPosition, currentPosition, oldPosition);
  };

  // Remove interviewer from their current position
  updateOldPosition = (currentPosition: string, id: string) => {
    const { state } = this;

    return state[currentPosition].filter(item => item.login.uuid !== id);
  };

  // Update state
  updatePosition = (progress: string, newPosition: any[], currentPosition: string, oldPosition: any[]) => {
    this.setState(
      {
        [progress]: newPosition,
        [currentPosition]: oldPosition
      },
      () => {
        localStorage.setItem(progress, JSON.stringify(newPosition));
        localStorage.setItem(currentPosition, JSON.stringify(oldPosition));
      }
    );
  };

  // Generate columns from configuration
  getColumns = () => {
    const { state } = this,
      { filter, filterBy } = state;

    return columnData.map(item => {
      const { title, data, id, btnLeft, btnRight } = item;

      return (
        <Column
          key={id}
          data={state[data]}
          currentPosition={data}
          title={title}
          btnLeft={btnLeft}
          btnRight={btnRight}
          handleBtnClick={this.handleBtnClick}
          filter={filter}
          filterBy={filterBy}
        />
      );
    });
  };

  handleFilterChange = (event: SyntheticEvent<HTMLInputElement>) => {
    event.preventDefault();

    this.setState(
      {
        filter: event.currentTarget.value.toLowerCase()
      },
      () => {
        const { filter } = this.state;
        localStorage.setItem('filter', JSON.stringify(filter));
      }
    );
  };

  handleFilterByChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState(
      {
        filterBy: event.currentTarget.value
      },
      () => {
        const { filterBy } = this.state;
        localStorage.setItem('filter', JSON.stringify(filterBy));
      }
    );
  };

  // Reset state and localstorage to reset app
  resetState = () => {
    localStorage.clear();

    this.setState(
      {
        results: [],
        applied: [],
        interviewing: [],
        hired: [],
        filter: '',
        filterBy: nameFilter,
        loading: true
      },
      () => this.getInterviewers()
    );
  };

  render() {
    const { loading, filter, filterBy } = this.state,
      columns = this.getColumns();

    return (
      <Fragment>
        <div className="c-app">
          <div className="c-app__filters">
            <Filter filter={filter} filterBy={filterBy} handleChange={this.handleFilterChange} />
            <FilterBy filterBy={filterBy} handleChange={this.handleFilterByChange} />
          </div>

          {loading ? <Spinner /> : <section className="c-app__columns">{columns}</section>}

          <div className="c-app__btns">
            <button className="c-app__btn" onClick={this.resetState}>
              Reset
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
