import { useNavigate } from 'react-router-dom'

function GoBack() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(-1)
  }
  return (
    <>
      <button onClick={handleClick}>Go back</button>
    </>
  )
}

export default GoBack
