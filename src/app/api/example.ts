import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Your POST request logic here
    res.status(200).json({ message: 'Success' });
  } else {
    res.setHeader('Allow', ['POST']); // Inform client what methods are allowed
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
