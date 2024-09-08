import { ARCHIVE_BLOCK, CALL_TO_ACTION, CONTENT, CONTENT_MEDIA, CONTENT_MEDIA_DOWN, DOUBLE_MEDIA_CONTENT, MEDIA_BLOCK } from './blocks'
import { META } from './meta'

export const POSTS = `
  query Posts {
    Posts(limit: 300) {
      docs {
        slug
      }
    }
  }
`

export const POST = `
  query Post($slug: String, $draft: Boolean) {
    Posts(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        categories {
          title
        }
        createdAt
        publishedAt
        populatedAuthors {
          id
          name
        }
        layout {
          ${CONTENT}
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${ARCHIVE_BLOCK}
          ${CONTENT_MEDIA}
          ${DOUBLE_MEDIA_CONTENT}
        }
        Availability,
        Age,
        OntopImage{
          TitleDescription
          media {
            imagekit {
              url
            }
          }
        }
        MainInfo
        HighlightImages {
          title
          media {
            imagekit {
              url
            }
          }
        }
        Itinary {
          Heading
          Description
          DescriptionImages {
            media {
              imagekit {
                url
              }
            }
          }
          Accomodation {
            Accomodation
            AccomodationDescription
          }
        }
        Days
        Price
        relatedPosts {
          id
          slug
          title
          ${META}
        }
        ${META}
      }
    }
  }
`

export const POST_PREMIUM_CONTENT = `
  query Post($slug: String, $draft: Boolean) {
    Posts(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        premiumContent {
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${ARCHIVE_BLOCK}
        }
      }
    }
  }
`
