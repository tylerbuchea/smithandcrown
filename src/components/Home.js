import React from 'react';

import Nav from './Nav';
import Card from './Card';
import redux from '../redux';

@redux()
export default class Home extends React.PureComponent {
  componentDidMount() {
    const urls = [
      'https://api.github.com/repos/bitcoin/bitcoin',
      'https://api.github.com/repos/ethereum/go-ethereum',
      'https://api.github.com/repos/ripple/rippled',
      'https://api.github.com/repos/Bitcoin-ABC/bitcoin-abc',
      'https://api.github.com/repos/EOSIO/eos',
      'https://api.github.com/repos/stellar/stellar-core',
    ];
    this.props.asyncFetchRepos(urls);
  }

  renderItem = (item, index) => (
    <div style={styles.gridItem} key={index}>
      <Card item={item} />
    </div>
  )

  render() {
    console.log(this.props.repos);
    return (
      <div>
        <Nav />
        <div className="section">
          <div className="container">
            <h1 className="title">
              Repositories{' '}
              {this.props.repos.state.loading && <div className="fas fa-spinner fa-spin" />}
            </h1>
            <div style={styles.grid}>
              {this.props.repos.data.map(this.renderItem)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  gridItem: {
    flex: '0 0 auto',
    maxWidth: 254,
    margin: 10,
  },
};

