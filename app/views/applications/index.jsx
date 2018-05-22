{/* <QueryRenderer
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
/> */}
import React from 'react';
import environment from '../../relay/environment';
import { graphql, QueryRenderer } from 'react-relay';

const query = graphql`
  query applicationsQuery {
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

class Applications extends React.Component {
  render() {
    const { relay, applications} = this.props;
    // if (error) {
    //   return <div>Error!</div>;
    // }
    // if (!props) {
    //   return <div>Loading...</div>;
    // }
    // const { applications } = props;

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
  }
}

export { query };

export default Applications;
