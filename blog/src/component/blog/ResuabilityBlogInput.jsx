import React from 'react'

export default function ResuabilityBlogInput(props) {

  // type="text"
  // className="form-control"
  // id="header"
  // name="header"
  // placeholder={t('blog_header')}
  // autofocus={true}
  // required={true}
  // onChange={this.onchangeInputValue}

  // object
  const { label, type, id, name, placeholder, autoFocus, required, onChange, error,value} = props;
  const className = name && "is-invalid form-control mb-3";

  return (
    <React.Fragment>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor={id}>{label} </label>
        <input
          type={type}
          className={className}
          id={id}
          name={name}
          placeholder={placeholder}
          autoFocus={autoFocus}
          required={required}
          onChange={onChange}
          value={value}
        />
        <div className="text-danger">{error}</div>
      </div>
    </React.Fragment>
  )
}
