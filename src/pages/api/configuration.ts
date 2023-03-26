import type { NextApiRequest, NextApiResponse } from "next";
import type { PageConfigType } from "types";

import { pageConfigMock } from "utils/mocks";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PageConfigType>
) {
  res.status(200).json(pageConfigMock);
}
