import { sample } from 'lodash-es';
import uuidv4 from 'uuid/v4';

import { Model } from 'objection';

import Job from '../../models/job';
import Candidate from '../../models/candidate';
import FieldEntry from '../../models/field-entry';

const generateFieldEntry = index => ({
  name: `Question ${index}`,
  uuid: uuidv4(),
  type: 'text',
  question: `This is question ${index}`,
  answer: `This is answer ${index} `,
  required: true,
});

exports.seed = (knex, Promise) => {
  Model.knex(knex);

  return knex('applications').del()
    .then(() => Job.query())
    .then(jobs => Candidate.query().then(candidates => ({ candidates, jobs })))
    .then(({ jobs, candidates }) =>
      Promise.all(
        jobs.map(job => job.$relatedQuery('applications').insert({
          candidateId: sample(candidates).id
        }).then(application =>
          Promise.all(Array(5).fill().map((_, index) => application.$relatedQuery('fieldEntries').insert(generateFieldEntry(index)))))
        )
      )
    )
}
