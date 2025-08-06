import React from 'react'
import './PageHeader.scss'

function PageHeader({ title, icon: Icon }) {
  return (
    <div className="page-header">
      {Icon && <Icon className="page-header__icon" />}
      <h1 className="page-header__title">{title}</h1>
    </div>
  )
}

export default PageHeader
