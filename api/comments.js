import { MongoClient } from 'mongodb'

// In serverless environments, cache the client across function invocations
let client
let clientPromise

const uri = process.env.MONGODB_URI || 'mongodb+srv://sampatakumarsv_db_user:yRhuT9bD7J68dTCO@cluster0.srnjnss.mongodb.net/portfolioblogs'

if (!global._mongoClientPromise) {
  client = new MongoClient(uri)
  global._mongoClientPromise = client.connect()
}
clientPromise = global._mongoClientPromise

export default async function handler(req, res) {
  // CORS configuration to allow calls from GitHub Pages and localhost
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST,DELETE')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  try {
    const mongo = await clientPromise
    const db = mongo.db('portfolioblogs')
    const commentsCollection = db.collection('comments')

    // GET /api/comments?postId=...
    if (req.method === 'GET') {
      const { postId } = req.query || {}
      const filter = postId ? { postId: String(postId) } : {}

      const rawComments = await commentsCollection
        .find(filter)
        .sort({ createdAt: -1 })
        .limit(100)
        .toArray()

      const formatted = rawComments.map((c) => ({
        id: c._id ? c._id.toString() : c.id || String(Math.random()),
        postId: c.postId,
        author: c.author || 'Anonymous Reader',
        text: c.text || '',
        date: c.createdAt ? new Date(c.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently',
        rawDate: c.createdAt
      }))

      return res.status(200).json({ success: true, count: formatted.length, comments: formatted })
    }

    // POST /api/comments
    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {}
      const { postId, author, text } = body

      if (!postId || !text || !text.trim()) {
        return res.status(400).json({ error: 'postId and text are required fields' })
      }

      const newRecord = {
        postId: String(postId),
        author: author && author.trim() ? author.trim() : 'Reader',
        text: text.trim(),
        createdAt: new Date().toISOString()
      }

      const insertResult = await commentsCollection.insertOne(newRecord)

      return res.status(201).json({
        success: true,
        comment: {
          id: insertResult.insertedId.toString(),
          postId: newRecord.postId,
          author: newRecord.author,
          text: newRecord.text,
          date: 'Just now',
          rawDate: newRecord.createdAt
        }
      })
    }

    return res.status(405).json({ error: `Method ${req.method} not allowed` })
  } catch (error) {
    console.error('MongoDB API Error:', error)
    return res.status(500).json({
      error: 'Failed to process comment',
      message: error.message
    })
  }
}

