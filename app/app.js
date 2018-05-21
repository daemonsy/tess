import React from "react";
import ReactDOM from "react-dom";
import environment from './relay/environment'
import { graphql, QueryRenderer } from 'react-relay';

const query = graphql`
  query appQuery($id: ID!) {
    application(id: $id) {
      id
      candidate {
        firstName
        email
        lastName
      }
    }
  }
`;

class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={{ id: 1 }}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>
            <p>First Name: {props.application.candidate.firstName}</p>
            <p>Last Name: {props.application.candidate.lastName}</p>
            <p>Email: {props.application.candidate.email}</p>
          </div>;
        }}
      />
    );
  }
}

ReactDOM.render(
  <App />
  , document.getElementById('app')
);
