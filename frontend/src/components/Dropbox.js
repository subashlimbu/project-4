import React from 'react'
const Dropbox = ({ handleDropdown, category }) => {
  return (
    <div className="field is-flex dropdown">
      <div className="control">
        <div className="select">
          <select name="cuisine" onChange={handleDropdown}>
            <option value="Search All"> Category Selection </option>
            <option> {category} </option>
          </select>
        </div>
        {/* <div className="field">
          <div className="control is-flex">
            <label className="label is-searchform"> <strong> Search By Name </strong> </label>
            <form>
              <input name="name" className="input searchBar is-rounded" type="text" placeholder="Name" onChange={handleSearch} />
            </form>
          </div>
        </div> */}
      </div>
    </div>
  )
}
export default Dropbox
