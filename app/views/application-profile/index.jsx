import React from 'react';
import environment from '../../relay/environment';
import { graphql } from 'react-relay';

const query = graphql`
  query applicationProfileQuery($applicationId: ID!) {
    application(id: $applicationId) {
      candidate {
        firstName
        lastName
        email
      }

      fieldEntries {
        question
        answer
      }
    }
  }
`;

class ApplicationProfile extends React.Component {
  render() {
    const { relay, application: { candidate } } = this.props;

    return (
      <div>
        {candidate.firstName} {candidate.lastName}
      </div>
    );
  }
}

export { query };

export default ApplicationProfile;
