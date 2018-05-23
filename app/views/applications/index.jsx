import React from 'react';
import environment from '../../relay/environment';
import { graphql } from 'react-relay';

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
    const { relay, applications } = this.props;

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
