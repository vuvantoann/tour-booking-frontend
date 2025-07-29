import { useState } from 'react'
import CreateProduct from './CreateProduct/CreateProduct'
import ProductList from './ProductList/ProductList'

function Products() {
  const [reload, setReload] = useState(false)

  const handleReload = () => {
    setReload(!reload)
  }
  return (
    <>
      <CreateProduct onReload={handleReload} />
      <ProductList reload={reload} />
    </>
  )
}

export default Products
