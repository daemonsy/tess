export default {
  Application: {
    candidate({ candidateId }, args, { loaders: { finders: { candidate } } }) {
      return candidate.load(candidateId)
    },

    job(obj, args, { loaders: { finders: { job } } }) {
      return job.load(obj.jobId)
    }
  }
}
