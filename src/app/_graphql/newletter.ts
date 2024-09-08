const NEWSLETTER = `
  id
  email
  createdAt
`

export const NEWSLETTERS_BY_DOC = `
  query NewsLetters($doc: ID) {
    NewsLetters(where: { doc: { equals: $doc } }) {
      docs {
        ${NEWSLETTER}
      }
    }
  }
`

export const NEWSLETTERS_BY_USER = `
  query NewsLetters($user: ID) {
    NewsLetters(where: { user: { equals: $user } }) {
      docs {
        ${NEWSLETTER}
      }
    }
  }
`
