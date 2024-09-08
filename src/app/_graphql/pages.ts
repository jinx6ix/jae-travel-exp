import { ARCHIVE_BLOCK, CALL_TO_ACTION, CONTENT, CONTENT_MEDIA, CONTENT_MEDIA_DOWN, DOUBLE_MEDIA_CONTENT, MEDIA_BLOCK } from './blocks'
import { META } from './meta'

export const PAGES = `
  query Pages {
    Pages(limit: 300)  {
      docs {
        slug
      }
    }
  }
`

export const PAGE = `
  query Page($slug: String, $draft: Boolean) {
    Pages(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        layout {
          ${CONTENT}
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${ARCHIVE_BLOCK}
          ${CONTENT_MEDIA}
          ${DOUBLE_MEDIA_CONTENT}
        }
        ${META}
        Categories{
          title
          media {
            imagekit {
              url
            }
          }
          Days
          CustomUrl
        }
        Destinations{
          title
          media {
            imagekit {
              url
            }
          }
          Days
          CustomUrl
        }
        Accordion{
          Heading
          Description

        }
        HighlightImages {
          title
          media {
            imagekit {
              url
            }
          }
        }
      }
    }
  }
`
