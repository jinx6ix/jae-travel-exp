import Link from 'next/link'
import { Gutter } from '../_components/Gutter'
import { VerticalPadding } from '../_components/VerticalPadding'

import './notfound.scss'
export default function NotFound() {
  return (
    <Gutter>
      <VerticalPadding top="none" bottom="large">
        <div className="not-found-container">
          <div className="not-found-content">
            <section className="page_404">
              <div className="containers">
                <div className="row">
                  <div className="col-sm-12 ">
                    <div className="text-center">
                      <div className="four_zero_four_bg"></div>
                      <div className="contant_box_404">
                        <h3 className="h2">Look like you're lost</h3>

                        <p>the page you are looking for not avaible!</p>

                        <Link href="/" className="link_404">
                          Go to Home
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </VerticalPadding>
    </Gutter>
  )
}
