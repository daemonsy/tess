import Candidate from './candidate';
import Job from './job';
import FieldEntry from './field-entry';

import NodeIdentification from '../interfaces/node-identification';

const Application = `
  """
  The record of a candidate applying for a job
  """
  type Application implements NodeIdentification {
    id: ID!
    candidate: Candidate!
    job: Job!
    fieldEntries: [FieldEntry!]!
  }
`;

export default () => [Application, Job, Candidate, NodeIdentification, FieldEntry]
