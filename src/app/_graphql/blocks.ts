import { CATEGORIES } from './categories'
import { FORM_FIELDS } from './form'
import { LINK_FIELDS } from './link'
import { MEDIA, MEDIA_FIELDS } from './media'
import { META } from './meta'

export const CALL_TO_ACTION = `
...on Cta {
  blockType
  invertBackground
  richText
  links {
    link ${LINK_FIELDS()}
  }
}
`

export const CONTENT = `
...on Content {
  blockType
  invertBackground
  columns {
    size
    richText
    enableLink
    link ${LINK_FIELDS()}
  }
}
`

export const MEDIA_BLOCK = `
...on MediaBlock {
  blockType
  invertBackground
  richText
  position
  ${MEDIA}
}
`

export const ARCHIVE_BLOCK = `
...on Archive {
  blockType
  introContent
  populateBy
  relationTo
  ${CATEGORIES}
  limit
  selectedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${META}
      }
      ...on Project {
        id
        slug
        title
        ${META}
      }
    }
  }
  populatedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${CATEGORIES}
        ${META}
      }
      ...on Project {
        id
        slug
        title
        ${CATEGORIES}
        ${META}
      }
    }
  }
  populatedDocsTotal
}
`

export const FORM_BLOCK = `
...on FormBlock {
  blockType
  form {
    ${FORM_FIELDS}
  }
}
`

export const CONTENT_MEDIA = `
  ...on ContentMedia{
    blockType
    mediaPosition
    richText
    media {
      imagekit {
        url
      }
    }
  }
`;

export const DOUBLE_MEDIA_CONTENT = `
  ... on DoubleMediaContent {
    blockType
    mediaContentFields {
      MoreImages {
        Images {
          type
          TwoImages {
            media {
              imagekit {
                url
              }
            }
            
          }
          TrippleImages {
            media {
              imagekit {
                url
              }
            }
            
          }
          FourImages {
            media {
              imagekit {
                url
              }
            }
            
          }
          
        }
        
      }
    }
  }
`;