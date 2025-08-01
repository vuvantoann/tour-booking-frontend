import { useEffect, useState } from 'react'
import './CategoryList.scss'
import { getCategory } from '../../../../services/categoryService'
import { Link } from 'react-router-dom'

function CategoryList() {
  const [dataCategory, setDataCategory] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getCategory()
      setDataCategory(result)
    }

    fetchApi()
  }, [])

  return (
    <>
      <div className="category-list">
        {dataCategory.map((category) => (
          <div className="category-card" key={category._id}>
            <Link to={`/tours/${category.slug}`}>
              <div className="category-card__image">
                <img src={category.image} alt={category.title} />
              </div>
              <div className="category-card__info">
                <h3 className="category-card__title">{category.title}</h3>
                <p className="category-card__desc">{category.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default CategoryList
