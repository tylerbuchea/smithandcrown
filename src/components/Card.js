import React from 'react';

export default class Card extends React.PureComponent {
  render() {
    const {
      name,
      description,
      organization,
      language,
      open_issues,
      forks,
      homepage,
    } = this.props.item;

    return (
      <div className="">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    alt="company"
                    src={organization.avatar_url}
                    style={styles.imageAvatar}
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{name}</p>
                <p className="subtitle is-6">{language}</p>
              </div>
            </div>

            <div className="content">{description}</div>

            <a
              className="button has-background-info has-text-white"
              href={homepage}
              target="_blank"
              style={{ display: 'block', margin: 'auto' }}
            >
              Homepage
            </a>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              <i className="fas fa-exclamation"></i> {open_issues}
            </div>
            <div className="card-footer-item">
              <i className="fas fa-code-branch"></i> {forks}
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

const styles = {
  imageAvatar: {
    width: 100,
  },
};