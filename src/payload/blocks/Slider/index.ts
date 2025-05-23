import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'

export const Slider: Block = {
  slug: 'slider',
  fields: [
    blockFields({
      name: 'sliderFields',
      fields: [
        {
          type: 'array',
          name: 'quoteSlides',
          required: true,
          minRows: 3,
          fields: [
            {
              type: 'text',
              name: 'leader',
            },
            {
              type: 'textarea',
              name: 'quote',
              required: true,
            },
            {
              type: 'row',
              fields: [
                {
                  type: 'text',
                  name: 'author',
                  required: true,
                },
                {
                  type: 'text',
                  name: 'role',
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
}
