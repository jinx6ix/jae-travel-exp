import type { CollectionConfig } from 'payload/types'

const SiteMedia: CollectionConfig = {
    slug: 'SiteMedia',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Logo',
                    fields: [{
                        name: 'media',
                        type: 'upload',
                        relationTo: 'media',
                    },],
                },
                {
                    label: 'Hero Small Images',
                    fields: [
                        {
                            name: 'HeroSmallImages',
                            label: 'Hero Small Images',
                            labels: {
                                singular: 'image',
                                plural: 'Images',
                            },
                            type: 'array',
                            minRows: 1,
                            maxRows: 4,
                            fields: [
                                {
                                    type: 'upload',
                                    name: 'media',
                                    relationTo: 'media',
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Fliping Images',
                    fields: [
                        {
                            name: 'FlipingImages',
                            label: 'Fliping Images',
                            labels: {
                                singular: 'image',
                                plural: 'Images',
                            },
                            type: 'array',
                            minRows: 1,
                            maxRows: 3,
                            fields: [
                                {
                                    type: 'upload',
                                    name: 'media',
                                    relationTo: 'media',
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Faq Images',
                    fields: [
                        {
                            name: 'FaqImages',
                            label: 'Faq Images',
                            labels: {
                                singular: 'image',
                                plural: 'Images',
                            },
                            type: 'array',
                            minRows: 1,
                            maxRows: 1,
                            fields: [
                                {
                                    type: 'upload',
                                    name: 'media',
                                    relationTo: 'media',
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'For Inquiries Images',
                    fields: [
                        {
                            name: 'ForInquiriesImages',
                            label: 'For Inquiries Images',
                            labels: {
                                singular: 'image',
                                plural: 'Images',
                            },
                            type: 'array',
                            minRows: 1,
                            maxRows: 1,
                            fields: [
                                {
                                    type: 'upload',
                                    name: 'media',
                                    relationTo: 'media',
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Self drive Images',
                    fields: [
                        {
                            name: 'SelfDriveImages',
                            label: 'SelfDrive Images',
                            labels: {
                                singular: 'image',
                                plural: 'Images',
                            },
                            type: 'array',
                            minRows: 1,
                            maxRows: 1,
                            fields: [
                                {
                                    type: 'upload',
                                    name: 'media',
                                    relationTo: 'media',
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },

    ],
}

export default SiteMedia;
