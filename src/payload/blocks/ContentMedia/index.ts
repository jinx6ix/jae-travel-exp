import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import richText from '../../fields/richText'

export const ContentMedia: Block = {
  fields: [
    invertBackground,
    {
      name: 'mediaPosition',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
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
  slug: 'contentMedia',
  imageURL: 'https://ik.imagekit.io/6cga8hi9z/JaeTravels/Home__1__izZxgLdnl.png',
}
