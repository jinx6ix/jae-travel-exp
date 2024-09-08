import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import richText from '../../fields/richText'

export const ContentMediaDown: Block = {
  fields: [
    invertBackground,
    {
      name: 'mediaSidePosition',
      options: [
        {
          label: 'Up',
          value: 'up',
        },
        {
          label: 'Down',
          value: 'down',
        },
      ],
      type: 'radio',
    },
    richText(),
    {
      name: 'media',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },
  ],
  slug: 'contentMediaDown',
  imageURL: 'https://ik.imagekit.io/6cga8hi9z/JaeTravels/Home__7__kvlok_U-Y.png',
}
