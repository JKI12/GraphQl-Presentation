import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Slide1 from './slides/slide1';
import Slide2 from './slides/slide2';
import Slide3 from './slides/slide3';
import Slide4 from './slides/slide4';
import Slide5 from './slides/slide5';
import Slide6 from './slides/slide6';
import Slide7 from './slides/slide7';
import Slide8 from './slides/slide8';
import Slide9 from './slides/slide9';
import Slide10 from './slides/slide10';
import Slide11 from './slides/slide11';
import Slide12 from './slides/slide12';
import Slide13 from './slides/slide13';
import Slide14 from './slides/slide14';

class Presentation extends React.Component {
  constructor() {
    super();

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
    if (this.props.router.location.pathname !== '/14') {
      document.onkeydown = this.handleKeyDown;
    }
  }

  handleKeyDown(e) {
    const { dispatch, router } = this.props;
    const path = router.location.pathname;

    let nextPath = '';
    let nextSlide = '';

    const route = path.split('/')[1];
    const slide = parseInt(route);

    if(e.keyCode === 39) {
      if (path === '/') {
        nextSlide = '2';
      } else {
        nextSlide = slide + 1;
      }
    }

    if(e.keyCode === 37) {
      if (path === '/') {
        nextSlide = '14';
      } else {
        nextSlide = slide - 1;
      }
    }

    if (nextSlide != '') {
      nextPath = `/${nextSlide}`;
      dispatch(push(nextPath));
    }
  }

  render() {
    return(
      <div className="layout">
        <Switch>
          <Route exact path="/" component={Slide1} />
          <Route path="/2" component={Slide2} />
          <Route path="/3" component={Slide3} />
          <Route path="/4" component={Slide4} />
          <Route path="/5" component={Slide5} />
          <Route path="/6" component={Slide6} />
          <Route path="/7" component={Slide7} />
          <Route path="/8" component={Slide8} />
          <Route path="/9" component={Slide9} />
          <Route path="/10" component={Slide10} />
          <Route path="/11" component={Slide11} />
          <Route path="/12" component={Slide12} />
          <Route path="/13" component={Slide13} />
          <Route path="/14" component={Slide14} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

export default connect(mapStateToProps, null, null, {
  pure: false
})(Presentation);
