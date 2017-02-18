import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p>
      <a
        href={ process.env.PHENOMIC_HOMEPAGE }
        className={ styles.phenomicReference }
      >
        { "Site créé avec " }
        <span className={ styles.phenomicReferenceName }>
          {  `<${ process.env.PHENOMIC_NAME} />` }
        </span>
      </a><br />
      <a
        href="/legal"
        className={ styles.phenomicReference }
      >
        { "Mentions légales" }
      </a>
    </p>
  </footer>
)

export default Footer
