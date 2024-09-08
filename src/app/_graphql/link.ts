interface Args {
  disableLabel?: true
  disableAppearance?: true
}

export const LINK_FIELDS = ({ disableAppearance, disableLabel }: Args = {}): string => `{
  ${!disableLabel ? 'label' : ''}
  ${!disableAppearance ? 'appearance' : ''}
  type
  newTab
  url
  icon {
    imagekit {
      fileId
      thumbnailUrl
      url
    }
  }
  MiniCategories{
    title
    subCategories {
      title
      CustomUrl
    }
    CustomUrl
  }
  reference {
    relationTo
    value {
      ...on Page {
        slug
      }
    }
  }
}`
