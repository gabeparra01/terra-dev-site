import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './ContentWrapper.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The content to be placed within the main content area of the container.
   */
  content: PropTypes.func,
  /**
   * The props to be applied to the content.
   */
  // eslint-disable-next-line react/forbid-prop-types
  props: PropTypes.object,
};

const defaultProps = {
  content: undefined,
  props: undefined,
};

const ContentWrapper = ({ content, props }) => {
  const [state, setState] = useState({
    Content: undefined,
    isErrored: false,
  });
  const { Content, isErrored } = state;

  useEffect(() => {
    let isSubscribed = true;
    if (!Content && !isErrored) {
      content().then(({ default: ContentFile }) => {
        if (isSubscribed) {
          console.log('got the file?');
          setState({
            Content: ContentFile,
            isErrored: false,
          });
        }
      }).catch(() => {
        if (isSubscribed) {
          setState({
            Content: undefined,
            isErrored: true,
          });
        }
      });
    }
    return () => { isSubscribed = false; };
  });

  if (Content) {
    return (
      <div
        data-terra-dev-site-content
        className={cx('dev-site-content')}
      >
        <Content {...props} />
      </div>
    );
  }

  if (isErrored) {
    console.log('is Errored');
    return (
      <div
        data-terra-dev-site-content
        className={cx('dev-site-content')}
      >
        Page failed to reload, refresh the page to try again.
      </div>
    );
  }

  return null;
};

ContentWrapper.propTypes = propTypes;
ContentWrapper.defaultProps = defaultProps;

export default ContentWrapper;
