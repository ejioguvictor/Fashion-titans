import { Route, useParams, Routes } from "react-router-dom"
import styles from "../index.module.scss"

// nested routes
import Offers from "./Offers"

export default function ProductDetails() {
  const { id } = useParams()

  return (
    <div className={styles.content}>
      <div className={styles.product}>
        <div className={styles.image}>
          <img src="https://via.placeholder.com/520x460" alt="" />
        </div>
        <div className={styles.details}>
          <h2>Product - {id}</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provident optio harum modi inventore esse nostrum exercitationem magnam tempore odio laborum velit! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptate neque harum. Quam facere accusamus exercitationem in quidem mollitia eligendi porro eos voluptates iure incidunt, laudantium sed harum omnis quasi?</p>
        </div>
      </div>
      <Routes>
        <Route path="offers" element={<Offers />} />
      </Routes>

    </div>
  )
}
