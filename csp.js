const policies = {
  'default-src': ["'self'", 'https://imagekit.io', 'https://ik.imagekit.io/', 'https://media.giphy.com', 'https://giphy.com', ],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    'https://checkout.stripe.com',
    'https://js.stripe.com',
    'https://maps.googleapis.com',
    'https://imagekit.io',
    'https://eu-central-1.aws.data.mongodb-api.com',
    'http://translate.google.com',
  ],
  'child-src': ["'self'"],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'img-src': [
    "'self'",
    'https://*.stripe.com',
    'https://raw.githubusercontent.com',
    'https://imagekit.io',
    'https://ik.imagekit.io/',
    'https://giphy.com',
    'https://media.giphy.com',
  ],
  'font-src': ["'self'"],
  'frame-src': [
    "'self'",
    'https://checkout.stripe.com',
    'https://js.stripe.com',
    'https://hooks.stripe.com',
    'http://maps.google.com',
    'https://maps.google.com',
    'https://www.google.com',
  ],
  'connect-src': [
    "'self'",
    'https://checkout.stripe.com',
    'https://api.stripe.com',
    'https://maps.googleapis.com',
    'https://imagekit.io',
    'https://ik.imagekit.io/',
    'https://jae-travels-expenditions.payloadcms.app/api/comments',
    'jaetravel.co.ke/api/comments',
    'jaetravel.co.ke/api/reviews',
    'https://jae-travels-expenditions.payloadcms.app/api/reviews',
    'jaetravel.co.ke/api/form-submissions',
    'https://jae-travels-expenditions.payloadcms.app/api/form-submissions',
    'jaetravel.co.ke',
    'https://jae-travels-expenditions.payloadcms.app',
    'http://translate.google.com',
    'https://giphy.com',
    'https://media.giphy.com',
  ],
}

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(' ')}`
    }
    return ''
  })
  .join('; ')
