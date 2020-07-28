import React from 'react'
import './LinkForm.css'

const LinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className="my-center">
      <p className="my-center f3">
        {'This Magic Brain will detec faces in your pictures.'}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}

export default LinkForm
