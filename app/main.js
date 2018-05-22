import React from "react";
import ReactDOM from "react-dom";
import environment from './relay/environment'
import { graphql, QueryRenderer } from 'react-relay';

const query = graphql`
  query mainQuery {
    applications: allApplications {
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
        variables={{}}
        render={({ error, props }) => {

          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          const { applications } = props;

          return (
            <ul>
              {applications.map(application =>
                <li key={application.id}>
                  <p>First Name: {application.candidate.firstName}</p>
                  <p>Last Name: {application.candidate.lastName}</p>
                  <p>Email: {application.candidate.email}</p>
                </li>
              )}
            </ul>
          );
        }}
      />
    );
  }
}

ReactDOM.render(
  <App />
  , document.getElementById('app')
);
