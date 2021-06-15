import { NextApiRequest, NextApiResponse } from 'next'
import { sampleBlogData } from '../../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleBlogData)) {
      throw new Error('Cannot find post data')
    }

    res.status(200).json(sampleBlogData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
