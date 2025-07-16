import connectToDatabase from '../../../../config/db'
import Post from '../../../../models/post/post'
import { NextApiRequest, NextApiResponse } from 'next'

interface PostData {
  title: string;
  description: string;
  image: string;
  category: string;
  trending?: boolean;
  breaking?: boolean;
  readTime?: string;
  date?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();
      const postItem: PostData = req.body
      const savedItem = await new Post(postItem).save()
      res.status(200).json({ message: 'Post created successfully', post: savedItem })
    } catch (error) {
      console.log('error', error)
      res.status(500).json({ message: 'SERVER ERROR' })
    }
  } else if (req.method === 'GET') {
    try {
      await connectToDatabase();
      const posts = await Post.find()
      res.status(200).json({ message: 'Post fetched successfully', posts })
    } catch (error) {
      console.log('error', error)
      res.status(500).json({ message: 'SERVER ERROR' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
} 