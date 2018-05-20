import { sample } from 'lodash-es';
import faker from 'faker';

import { Model } from 'objection';

import Job from '../../models/job';
import Candidate from '../../models/candidate';

exports.seed = (knex, Promise) => {
  Model.knex(knex);

  return knex('applications').del()
    .then(() => Job.query())
    .then(jobs => Candidate.query().then(candidates => ({ candidates, jobs })))
    .then(({ jobs, candidates }) =>
      Promise.all(
        jobs.map(job => job.$relatedQuery('applications').insert({
          candidateId: sample(candidates).id
        }))
      )
    )
}
