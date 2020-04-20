import React from 'react'
const Dropbox = ({ handleDropdown }) => {
  return (
    <div className="field is-flex dropdown">
      <div className="control">
        <div className="select">
          <select name="cuisine" onChange={handleDropdown}>
            <option value="Search All"> Category Selection </option>
            <option> Haematology </option>
            <option> Coagulation </option>
            <option> Serology </option>
            <option> Urine-Specials </option>
            <option> Faeces & Coprology </option>
            <option> Immunology </option>
            <option> Bacteriology </option>
            <option> Biochemistry </option>
            <option> Drugs Investigation </option>
            <option> Hormones - Immunochemistry </option>
            <option> Inv. Infectious Diseases </option>
            <option> Tumoral Markers </option>
            <option> Pathologic Anatomy </option>
            <option> Alergeology </option>
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
