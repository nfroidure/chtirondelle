import React, { PropTypes } from "react"

import PagePreview from "../PagePreview"

import styles from "./index.css"

const PagesList = ({ pages }) => {
  return (
    <div>
      {
      pages.length
      ? (
        <ul className={ styles.list }>
          {
          pages.map((page) => (
            <li key={ page.title }><PagePreview { ...page } /></li>
          ))
        }
        </ul>
      )
      : "Aucune actualité pour le moment"
    }
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList
