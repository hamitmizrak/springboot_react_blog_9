import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import BlogApiServices from '../../services/BlogApiServices';

class BlogCreate extends Component {
  static displayName = "Blog_Create";

  // CONSTRUCTOR
  constructor(props) {
    super(props);
    // STATE
    this.state = {
      blogDto: {},
      header: null,
      content: null,
    };
    //BIND
    this.onchangeInputValue = this.onchangeInputValue.bind(this);
    this.blogCreateSubmit = this.blogCreateSubmit.bind(this);
  }

  // CDM

  // FUNCTION

  // ONCHANGE
  onchangeInputValue = (event) => {
    console.log(event);

    // 1.YOL
    // const eventTargetName =event.target.name;
    // const eventTargetValue=event.target.value;
    // console.log(`NAME: ${eventTargetName} VALUE: ${eventTargetValue}`);

    // 2. YOL
    const { name, value } = event.target
    console.log(`NAME: ${name} VALUE: ${value}`);

    // STATE
    this.setState({
      [name]: value,
    })
  }

  // SUBMIT
  blogCreateSubmit = async (event) => {
    // Browser sen dur ben gönderirim.
    event.preventDefault();
    const { header, content } = this.state;
    const blogDto = {
      //header:header,
      //content:content,
      header, content
    }

    // BlogApiServices.blogServiceCreate(blogDto).then().catch();
    try {
      const response = await BlogApiServices.blogServiceCreate(blogDto);
      if (response == 200) {
        // PHP
        this.props.history.push("/blog/list")
      }
    } catch (err) {
      console.log(err);
    }
  }

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
                {this.props.t('blog_header')}
              </label>
              <input
                type="text"
                className="form-control"
                id="header"
                name="header"
                placeholder={this.props.t('blog_header')}
                autofocus={true}
                required={true}
                onChange={this.onchangeInputValue}
              />
              <div className="text-danger is-invalid">{this.props.t('is_valid_header')}</div>
            </div>
            {/* Content */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="content">
                {this.props.t('blog_content')}
              </label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                placeholder={this.props.t('blog_content')}
                autofocus={false}
                required={true}
                defaultValue={"        "}
                onChange={this.onchangeInputValue}
              />
              <div className="text-danger is-invalid">{this.props.t('is_valid_content')}</div>
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
            <button
              type='submit'
              onClick={this.blogCreateSubmit}
              className="btn btn-primary">{this.props.t('submit')}</button>
          </form>
        </div>
      </React.Fragment>
    )
  } // end render
} // end class


// i18n export default Wrapper
export default withTranslation()(BlogCreate);




