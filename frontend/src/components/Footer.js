import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="has-text-centered textFooter">
        <h2>L.A.B.S Team</h2>
      </div>

      <div className="has-text-centered flexFoot">
        <div className="footerGroup1">
          João
          <a
            href="https://github.com/jdpintoGA"
            className="fab fa-github fa-2x footerItem"
          ></a>
          <a
            href="https://www.linkedin.com/in/joaodiogopinto/"
            className="fab fa-linkedin fa-2x footerItem"
          ></a>
        </div>
        <div className="footerGroup2">
          Gordon
          <a
            href="https://github.com/Intravenous"
            className="fab fa-github fa-2x footerItem"
            footerItem
          ></a>
          <a
            href="https://www.linkedin.com/in/gordon-gyakyi/"
            className="fab fa-linkedin fa-2x footerItem"
          ></a>
        </div>
        <div className="footerGroup3">
          Subash
          <a
            href="https://github.com/subashlimbu"
            className="fab fa-github fa-2x footerItem"
          ></a>
          <a
            href="https://www.linkedin.com/in/subash-limbu-8a20341a5/"
            className="fab fa-linkedin fa-2x footerItem"
          ></a>
        </div>
        <div className="footerGroup4">
          David
          <a
            href="https://github.com/dromerosalem"
            className="fab fa-github fa-2x footerItem"
          ></a>
          <a
            href="https://www.linkedin.com/in/david-romero-salem/"
            className="fab fa-linkedin fa-2x footerItem"
          ></a>
        </div>
      </div>
    </footer>
  )
}
