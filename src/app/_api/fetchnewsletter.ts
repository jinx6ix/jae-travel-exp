import type { Post, Review, User, Newsletter } from '../../payload/payload-types'
import { NEWSLETTERS_BY_DOC, NEWSLETTERS_BY_USER } from '../_graphql/newletter'
import { GRAPHQL_API_URL } from './shared'

export const fetchReviews = async (args: {
  user?: User['id']
  doc?: Post['id']
}): Promise<Newsletter[]> => {
  const { user, doc } = args || {}

  const newsletter: Newsletter[] = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({
      query: user ? NEWSLETTERS_BY_DOC : NEWSLETTERS_BY_USER,
      variables: {
        user,
        doc,
      },
    }),
  })
    .then(res => res.json())
    .then(res => {
      if (res.errors) throw new Error(res.errors[0]?.message ?? 'Error fetching Newsletter')
      return res.data?.Reviews?.docs
    })

  return newsletter
}
