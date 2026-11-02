import { MongoClient } from 'mongodb'

let client
let clientPromise

const uri = process.env.MONGODB_URI || 'mongodb+srv://sampatakumarsv_db_user:yRhuT9bD7J68dTCO@cluster0.srnjnss.mongodb.net/portfolioblogs'

if (!global._mongoClientPromise) {
  client = new MongoClient(uri)
  global._mongoClientPromise = client.connect()
}
clientPromise = global._mongoClientPromise

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  try {
    const mongo = await clientPromise
    const db = mongo.db('portfolioblogs')
    const collabCollection = db.collection('collaborations')

    // GET /api/collab - List recent collaboration requests
    if (req.method === 'GET') {
      const requests = await collabCollection
        .find({})
        .sort({ createdAt: -1 })
        .limit(50)
        .toArray()

      return res.status(200).json({
        success: true,
        count: requests.length,
        requests: requests.map((r) => ({
          id: r._id.toString(),
          name: r.name,
          email: r.email,
          contact: r.contact,
          college: r.college,
          projectTitle: r.projectTitle,
          category: r.category,
          techStack: r.techStack,
          description: r.description,
          timeline: r.timeline,
          createdAt: r.createdAt
        }))
      })
    }

    // POST /api/collab - Submit new collaboration request
    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {}
      const { name, email, contact, college, projectTitle, category, techStack, description, timeline } = body

      if (!name || !name.trim()) {
        return res.status(400).json({ error: 'Name is required' })
      }
      if (!contact && !email) {
        return res.status(400).json({ error: 'Please provide either an email or phone/WhatsApp number' })
      }
      if (!projectTitle || !projectTitle.trim()) {
        return res.status(400).json({ error: 'Project title is required' })
      }
      if (!description || !description.trim()) {
        return res.status(400).json({ error: 'Please write a brief description of what you are building' })
      }

      const newCollab = {
        name: name.trim(),
        email: email ? email.trim() : '',
        contact: contact ? contact.trim() : '',
        college: college ? college.trim() : 'Student / Developer',
        projectTitle: projectTitle.trim(),
        category: category || 'Web / Software Project',
        techStack: Array.isArray(techStack) ? techStack : (techStack ? String(techStack).split(',').map((s) => s.trim()) : []),
        description: description.trim(),
        timeline: timeline || 'Flexible',
        status: 'new',
        createdAt: new Date().toISOString()
      }

      const result = await collabCollection.insertOne(newCollab)

      return res.status(201).json({
        success: true,
        message: 'Collaboration request received successfully!',
        id: result.insertedId.toString(),
        data: newCollab
      })
    }

    return res.status(405).json({ error: `Method ${req.method} not allowed` })
  } catch (error) {
    console.error('MongoDB Collab API Error:', error)
    return res.status(500).json({
      error: 'Failed to process collaboration request',
      message: error.message
    })
  }
}
