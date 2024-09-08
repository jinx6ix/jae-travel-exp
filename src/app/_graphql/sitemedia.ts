export const SITEMEDIA = `
  query SiteMedia {
    Media(limit: 300) {
      title
      media {
        imagekit {
          url
        }
      }
      HeroSmallImages {
        media {
          imagekit {
            url
          }
        }
      }
      FlipingImages {
        media {
          imagekit {
            url
          }
        }
      }
      FaqImages {
        media {
          imagekit {
            url
          }
        }
      }
      ForInquiriesImages {
        media {
          imagekit {
            url
          }
        }
      }
      SelfDriveImages {
        media {
          imagekit {
            url
          }
        }
      }
    }
  }
`