import styles from "./Shop.module.css"

const Shop = () => {
  return (
    <>
    <div className={`${styles.shop} d-flex-inline p-3 px-3  mt-3 mb-2`}>
        <h2 className={`${styles.head} d-flex justify-content-between mt-1`}>Like What You See ? <button className={`${styles.button} text-light border-0  ms-5 px-3 py-1 `}>Shop</button></h2>
    </div>
    </>
  )
}

export default Shop