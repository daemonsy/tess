import React from 'react';
import moment from 'moment';
import { graphql } from 'react-relay';
import './styles.scss';

const query = graphql`
  query issuesQuery {
    issues: allIssues {
      id
      rowId
      description
      reportedAt
    }
  }
`;

class Applications extends React.Component {
  render() {
    const { issues } = this.props;

    return (
      <ul className="issues-list">
        {issues.map(issue => (
          <li key={issue.id} className="issue">
            <div className="level">
              <div className="level-left">
                <span className="number">#{issue.rowId}</span>
                <div>
                  <strong>Dr Axel: </strong>
                </div>
                <p>
                  {issue.description
                    .split(' ')
                    .splice(0, 10)
                    .join(' ')}...
                </p>
              </div>
              <div className="level-right">{moment(issue.reportedAt).fromNow()}</div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export { query };

export default Applications;
