import * as React from "react";
import { connect } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import { bindActionCreators } from "redux";

import { GlobalState } from "../shared/interfaces/index";
import { updatePage } from "./actions/pageActions";

interface AppContainerProps {
  pageName: string;
}

interface AppContainerDispatch {
  updatePage(page: string): any;
}

class AppContainer extends React.Component<AppContainerProps & AppContainerDispatch & RouteComponentProps<any>> {
  componentWillMount() {
    const props = this.props;
    props.history.replace("/test");
  }

  componentDidUpdate() {
    const props = this.props;
    props.updatePage(props.match.params.page);
  }

  render() {
    const props = this.props;
    return (
      <div>
        <div className="row">
          <div className="columns text-center">
            <h1>Welcome to React</h1>
            <p>Page: <code>{props.pageName}</code></p>
          </div>
        </div>
        <div className="row">
          <div className="columns">
          <h5>Lets go somewhere else...</h5>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/typescript">TypeScript</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: GlobalState): AppContainerProps => {
  return {
    pageName: state.currentPage,
  };
};

const mapDispatchToProps = (dispatch): AppContainerDispatch => {
  return bindActionCreators({
    updatePage: updatePage,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);