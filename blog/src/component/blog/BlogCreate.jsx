import React, { Component } from 'react'

// CLASS
export default class BlogCreate extends Component {

  static displayName = "Blog_Create";

  // CONSTRUCTOR
  constructor(props) {
    super(props);
    // STATE
    this.state = {
      blogDto: {},
      header:null,
      content:null,

    };
    //BIND
  }

  // CDM

  // FUNCTION

  // RENDER
  render() {

    // RETURN
    return (
      <React.Fragment>
        <div className="container">
  <h2
    className="display-3 text-center text-primary p-4 text-uppercase"
    style={{ marginBottom: "1rem" }}
  >
    Blog Create
  </h2>
  <form className="create_form" method="post" autoComplete="true">
    {/* Header */}
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor="header">
        Header
      </label>
      <input
        type="text"
        className="form-control"
        id="header"
        name="header"
        placeholder="Blog için header giriniz ..."
        autofocus="true"
        required="true"
      />
      <div className="text-danger is-invalid">Header boş geçtiniz</div>
    </div>
    {/* Content */}
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor="header">
        Content
      </label>
      <textarea
        className="form-control"
        id="header"
        name="header"
        placeholder="Blog için content giriniz ..."
        autofocus="false"
        required="true"
        defaultValue={"        "}
      />
      <div className="text-danger is-invalid">Content boş geçtiniz</div>
    </div>
    {/* is read */}
    <div className="form-check d-flex justify-content-center">
      <input
        type="checkbox"
        className="form-check-input"
        id="isRead"
        checked44=""
      />
      <label className="form-check-label ms-2" htmlFor="isRead">
        blog Yüklensin mi ?
      </label>
    </div>
    <button className="btn btn-primary">Gönder</button>
  </form>
</div>

      </React.Fragment>
    )
  } // end render
} // end class
