import { Hono } from 'hono'
import { getTemporalIndex } from '../services/dateService.js'

const easter = new Hono()

easter.get('/', (c) => {
  const date = c.req.query('date')
  const answer = getTemporalIndex(date)
  return c.json({
    answer
  })
})

export default easter
