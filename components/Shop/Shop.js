import styles from "./Shop.module.css"

const Shop = () => {
  return (
    <>
    <div className={`${styles.shop} d-flex-inline p-3 px-3  mt-3 mb-2`}>
        <h3 className={`${styles.head} d-flex justify-content-between mt-1`}>Like what you see ? 
        <button className={`${styles.button} text-light border-0  ms-5 px-3 py-3 pt-2 pb-2`}>Shop</button></h3>
    </div>
    </>
  )
}

export default Shop