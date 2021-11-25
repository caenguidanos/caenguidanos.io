import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
   name: string;
   ts: number;
}

export default function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
   res.status(200).json({ name: "John Doe2", ts: Date.now() });
}
