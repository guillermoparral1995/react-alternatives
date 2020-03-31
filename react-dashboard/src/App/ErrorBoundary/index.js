import React from "react";
import { withRouter } from 'react-router-dom';
import ErrorPage from '../Common/ErrorPage';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return {
      hasError: true
    };
  }

  componentDidMount() {
    this.unlisten = this.props.history.listen((_location, _action) => {
      if (this.state.hasError) {
        this.setState({ hasError: false });
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);