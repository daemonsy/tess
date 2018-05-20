import { Model } from 'objection';
import Job from '../../models/job';

const jobs = ['Economist', 'Terrible Singer', 'Beer Taster', 'Food Taster', 'Scientist', 'Developer']
  .map(title => {
    return {
      title,
      fieldset: {
        name: `Fields for ${title}`,
        fields: [
          {
            name: 'Motivation',
            type: 'text',
            required: true,
            question: 'What is your motivation for applying for this job?',
            internalDescription: 'Focus on understanding the candidate using this',
          }
        ]
      }
    }
  });

exports.seed = (knex, Promise) => {
  Model.knex(knex);
  return knex('jobs').del()
    .then(knex('fieldsets').del())
    .then(() => Job.query().insertGraph(jobs))
}
