// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { githubAPI } from '@/data/config';

export default function handler(req, res) {
  const headers = { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` };
  fetch(githubAPI, { headers })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to retrieve last commit date');
    })
    .then((data) => {
      res.status(200).json({ lastPush: data.pushed_at });
    })
    .catch((error) => {
      console.error(error);
    });
}
