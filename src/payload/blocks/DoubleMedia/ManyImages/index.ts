import type { Block } from 'payload/types'

import { blockFields } from '../../../fields/blockFields'
import ManyImages from '../index'

export const DoubleImagesBlock: Block = {
  slug: 'DoubleMediaContent',
  imageURL: 'https://ik.imagekit.io/6cga8hi9z/JaeTravels/Home__6__PztgA-LGS.png',
  fields: [
    blockFields({
      name: 'mediaContentFields',
      fields: [
        {
          name: 'MoreImages',
          type: 'array',
          maxRows: 8,
          fields: [
            ManyImages({
              appearances: false,
            }),
          ],
        },
      ],
    }),
  ],
}



// import type { GlobalConfig } from 'payload/types'

// import ManyImages from '../index'

// export const DoubleImagesBlock: GlobalConfig = {
//   slug: 'ManyImages',
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'MoreImages',
//       type: 'array',
//       maxRows: 8,
//       fields: [
//         ManyImages({
//           appearances: false,
//         }),
//       ],
//     },
//   ],
// }
