import { ARCHIVE_BLOCK, CALL_TO_ACTION, CONTENT, CONTENT_MEDIA, CONTENT_MEDIA_DOWN, DOUBLE_MEDIA_CONTENT, MEDIA_BLOCK } from './blocks'
import { LINK_FIELDS } from './link'
import { MEDIA } from './media'
import { META } from './meta'

export const PROJECTS = `
  query Projects {
    Projects(limit: 300) {
      docs {
        slug
      }
    }
  }
`

export const PROJECT = `
  query Project($slug: String, $draft: Boolean) {
    Projects(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        categories {
          title
        }
        createdAt
        hero {
          type
          richText
          links {
            link ${LINK_FIELDS()}
          }
          ${MEDIA}
        }
        layout {
          ${CONTENT}
          ${CALL_TO_ACTION}
          ${CONTENT_MEDIA}
          ${MEDIA_BLOCK}
          ${ARCHIVE_BLOCK}
          ${DOUBLE_MEDIA_CONTENT}
        }
        relatedProjects {
          id
          slug
          title
          ${META}
        }
        OntopImage{
          TitleDescription
          media {
            imagekit {
              url
            }
          }
        }
        ${META}
      }
    }
  }
`
