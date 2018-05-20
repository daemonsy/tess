import Candidate from './candidate';
import Job from './job';

const Application = `
  """
  The record of a candidate applying for a job
  """
  type Application {
    candidate: Candidate!
    job: Job!
  }
`;

export default () => [Application, Job, Candidate]
