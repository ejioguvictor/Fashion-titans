import { Link } from "react-router-dom"
import styles from "../index.module.scss"

export default function Products() {
  return (
    <div className={styles.content}>
      <h3>Hoodies</h3>
      <div className={styles.product}>
        {[0, 1, 2, 3].map(p => (
          <div key={p}>
            <Link to={`/products/${p}`}>
              <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/793764/1.jpg?2549" alt="product" />
            </Link>
          </div>
        ))}
      </div>
      <h3>Tees</h3>
      <div className={styles.product}>
        {[4, 5, 6, 7].map(p => (
          <div key={p}>
            <Link to={`/products/${p}`}>
              <img src="https://media.cmsmax.com/kquhyf5ndwdt9mqtkbsan/thumbs/snow-tree-h-gray-ebay.jpg" alt="product" />
            </Link>
          </div>
        ))}
      </div>
      <h3>Sneakers</h3>
      <div className={styles.product}>
        {[8, 9, 10, 11].map(p => (
          <div key={p}>
            <Link to={`/products/${p}`}>
              <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1600060076-11021799.jpg?crop=1.00xw:0.444xh;0,0.481xh&resize=480%3A%2A" alt="product" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
