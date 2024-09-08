import type { Field } from 'payload/types'

import deepMerge from '../../utilities/deepMerge'

export const appearanceOptions = {
    primary: {
        label: 'Primary Button',
        value: 'primary',
    },
    secondary: {
        label: 'Secondary Button',
        value: 'secondary',
    },
    default: {
        label: 'Default',
        value: 'default',
    },
}

export type LinkAppearances = 'primary' | 'secondary' | 'default'

type LinkType = (options?: {
    appearances?: LinkAppearances[] | false
    disableLabel?: boolean
    overrides?: Record<string, unknown>
}) => Field

const ManyImages: LinkType = ({ appearances, disableLabel = false, overrides = {} } = {}) => {
    const linkResult: Field = {
        name: 'Images',
        type: 'group',
        admin: {
            hideGutter: true,
        },
        fields: [
            {
                type: 'row',
                fields: [
                    {
                        name: 'type',
                        type: 'radio',
                        options: [
                            {
                                label: 'Two Images',
                                value: 'TwoImages',
                            },
                            {
                                label: 'Three Images',
                                value: 'ThreeImages',
                            },
                            {
                                label: 'Four Images',
                                value: 'FourImages',
                            },
                        ],
                        defaultValue: 'TwoImages',
                        admin: {
                            layout: 'horizontal',
                            width: '50%',
                        },
                    },
                ],
            },
        ],
    }

    const linkTypes: Field[] = [
    
        {
            name: 'TwoImages',
            label: 'Two Images',
            labels: {
            singular: 'image',
            plural: 'Images',
            },
            type: 'array',
            minRows: 2,
            maxRows: 2,
            fields: [
            {
                type: 'upload',
                name: 'media',
                relationTo: 'media',
                required: true,
            },
 
            ],
            required: true,
            admin: {
                condition: (_, siblingData) => siblingData?.type === 'TwoImages',
            },
        },
        {
            name: 'TrippleImages',
            label: 'Tripple Images',
            labels: {
            singular: 'image',
            plural: 'Images',
            },
            type: 'array',
            minRows: 3,
            maxRows: 3,
            fields: [
            {
                type: 'upload',
                name: 'media',
                relationTo: 'media',
                required: true,
            },
 
            ],
            required: true,
            admin: {
                condition: (_, siblingData) => siblingData?.type === 'ThreeImages',
            },
        },
        {
            name: 'FourImages',
            label: 'Four Images',
            labels: {
            singular: 'image',
            plural: 'Images',
            },
            type: 'array',
            minRows: 4,
            maxRows: 4,
            fields: [
            {
                type: 'upload',
                name: 'media',
                relationTo: 'media',
                required: true,
            },
 
            ],
            required: true,
            admin: {
                condition: (_, siblingData) => siblingData?.type === 'FourImages',
            },
        },
    ]

    if (!disableLabel) {
        linkTypes.map(linkType => ({
            ...linkType,
            admin: {
                ...linkType.admin,
                width: '50%',
            },
        }))

        linkResult.fields.push({
            type: 'row',
            fields: [
                ...linkTypes,
            ],
        })
    } else {
        linkResult.fields = [...linkResult.fields, ...linkTypes]
    }

    if (appearances !== false) {
        let appearanceOptionsToUse = [
            appearanceOptions.default,
            appearanceOptions.primary,
            appearanceOptions.secondary,
        ]

        if (appearances) {
            appearanceOptionsToUse = appearances.map(appearance => appearanceOptions[appearance])
        }

        linkResult.fields.push({
            name: 'appearance',
            type: 'select',
            defaultValue: 'TwoImages',
            options: appearanceOptionsToUse,
            admin: {
                description: 'Choose how Many Images Should be Rendered.',
            },
        })
    }

    return deepMerge(linkResult, overrides)
}

export default ManyImages






// import type { Block } from 'payload/types'

// import { invertBackground } from '../../fields/invertBackground'

// export const DoubleMediaBlock: Block = {
//   slug: 'mediaBlock',
// //   imageURL: 'https://ik.imagekit.io/6cga8hi9z/JaeTravels/Home__3__pvAUHz5r3.png',
//   fields: [
//     invertBackground,
//     {
//       name: 'position',
//       type: 'select',
//       defaultValue: 'TwoImages',
//       options: [
//         {
//           label: 'Two Images',
//           value: 'TwoImages',
//         },
//         {
//           label: 'Three Images',
//           value: 'ThreeImages',
//         },
//         {
//             label: 'Four Images',
//             value: 'FourImages',
//         },
//       ],
//     },
//     {
//       name: 'LeftMedia',
//       type: 'upload',
//       relationTo: 'media',
//       required: true,
//     },
//     {
//         name: 'Media',
//         type: 'upload',
//         relationTo: 'media',
//         required: true,
//     },
//   ],
// }
