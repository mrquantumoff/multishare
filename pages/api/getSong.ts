// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ISong } from '@/app/interfaces';
import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
  name: string
}



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const songId = req.query.songId;
  if (songId==="") {
    return res.status(400).json({name: "songId can't be empty"});
  }
  else if (typeof(songId)!=="string") {
    return res.status(400).json({
      name: 'Wrong type for songId'
    });
  }
  else {

    try {
        const returnValue: ISong | null = await getSong(songId)!;
        if (returnValue!==null) {
          return res.status(200).json(returnValue);
        }
        else {
          return res.status(404).json({name: "Failed to get your song"});
        }
    }
    catch (error) {
      return res.status(404).json({name: "Failed to get your song"});
    }
  }
}


export async function getSong(songId: string) {
  require('dotenv').config()
  const supabase = createClient(
    process.env.SUPABASE_URL ?? "",
    process.env.SUPABASE_KEY ?? "",
  );

  const { data, error } = await supabase
        .from('Songs').select("*").eq("id", songId).range(0, 1);
    if (data!==null && data.length>=1) {
        let returnValue: ISong = JSON.parse(JSON.stringify(data[0]))
        return returnValue;
    }
    else {
      return null;
    }
}