import React from 'react'
import PropTypes from 'prop-types'

// Utilities
import kebabCase from 'lodash/kebabCase'

// Components
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const Tags = ({ tags }) => {
  const tagDisplay = tags.map((tag, idx) => (
    <div key={idx}>
      <Link to={'/tags/' + kebabCase(tag.fieldValue)}>{tag.fieldValue}</Link>
    </div>
  ))

  return <div className='tags'>{tagDisplay}</div>
}

export default Tags
