import React from "react";

//* This component is kept as a class rather than using hooks since componentDidCatch does not have an equivalent hook yet.

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops. Something broke</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
