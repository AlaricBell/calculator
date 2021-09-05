import type { NextApiRequest, NextApiResponse } from 'next'
import {writeToFile, readFromFile} from '../../lib/fileHandler'

type Data = {
  name: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if(req.method === 'POST') {
    return await writeToFile('test.txt', req.body.result) 
      .then(response => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'max-age=180000');
      res.end(JSON.stringify(response))
      }).catch(error => {
        res.json(error);
        res.status(405).end();
      });
    }

  if(req.method === 'GET') {
    return await readFromFile('test.txt')
    .then(response => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'max-age=180000');
      res.end(JSON.stringify(response))
      }).catch(error => {
        res.json(error);
        res.status(405).end();
      });
  }
}