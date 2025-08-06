import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './GoBack.scss'

function GoBack() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <button className="go-back" onClick={handleClick}>
      <FiArrowLeft className="go-back__icon" />
      Go Back
    </button>
  )
}

export default GoBack
