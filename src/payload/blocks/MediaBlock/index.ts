import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import richText from '../../fields/richText'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  imageURL: 'https://ik.imagekit.io/6cga8hi9z/JaeTravels/image_-OXDZ8m2-.png',
  fields: [
    invertBackground,
    {
      name: 'position',
      type: 'select',
      defaultValue: 'mediaDown',
      options: [
        {
          label: 'media Up',
          value: 'mediaUp',
        },
        {
          label: 'media Down',
          value: 'mediaDown',
        },
      ],
    },
    richText(),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
