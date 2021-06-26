const { events } = require('./data.json')

export default (req, res) => {
  // Retrieve the event the matches the slug
  const evt = events.filter(ev => ev.slug === req.query.slug)

  if (req.method === 'GET') {
    res.status(200).json(evt)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Method ${req.method} is not allowed`})
  }
}