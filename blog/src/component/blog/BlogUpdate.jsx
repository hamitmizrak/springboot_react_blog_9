import React, { Component } from 'react'
import BlogApiServices from '../../services/BlogApiServices';
import ResuabilityBlogInput from './ResuabilityBlogInput';
import { withTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

class BlogUpdate extends Component {

  //DisplayName
  static displayName = "Blog_Update";

  // CONSTRUCTOR
  constructor(props) {
    super(props);
    // STATE
    this.state = {
      //id: this.props.match.params.id,
      id: 2,
      blogDto: {},
      header: null,
      content: null,
      isRead: false,
      spinnerData: false,
      validationErrors: {}
    };
    //BIND
     this.onchangeInputValue = this.onchangeInputValue.bind(this);
     this.blogSubmit = this.blogSubmit.bind(this);
  }

  //CDM
  componentDidMount() {
    BlogApiServices.blogServiceFindById(this.state.id)
      .then((response) => {
        const findBlog = response.data;
        //console.log(findBlog);
        this.setState({
          header: findBlog.header,
          content: findBlog.content,
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // ONCHANGE INPUT
  onchangeInputValue = (event) => {
    console.log(event);

    // 1.YOL
    // const eventTargetName =event.target.name;
    // const eventTargetValue=event.target.value;
    // console.log(`NAME: ${eventTargetName} VALUE: ${eventTargetValue}`);

    // 2. YOL
    const { name, value } = event.target
    //console.log(`NAME: ${name} VALUE: ${value}`);

    // Backend Error
    const backendErrorHandle = { ...this.state.validationErrors }
    //console.log(backendErrorHandle);
    backendErrorHandle[name] = undefined;

    // STATE
    this.setState({
      [name]: value,
      backendErrorHandle
    })
  }


  // ONCHANGE CHECKBOX
  onchangeCheckBoxValue = (event) => {
    console.log(event.target.checked);
    this.setState({
      isRead: event.target.checked
    })
  }



  // SUBMIT
  blogSubmit = (event) => {
    // Browser sen dur ben gönderirim.
    event.preventDefault();
    const { header, content } = this.state;
    const blogDto = {
      //header:header,
      //content:content,
      header, content
    }
    console.log(blogDto);

    

    // Spinner Data çalışsın
    this.setState({ spinnerData: true })

    // BlogApiServices.blogServiceCreate(blogDto).then().catch();
    const response = BlogApiServices.blogServiceUpdateId(this.state.id,blogDto)
      .then((response) => {
        if (response.status == 200) {
          //this.setState({ spinnerData: false })
          //alert("deneme");
          // PHP
          //this.props.history.push("/blog/list")
          
          let navigate=useNavigate();
          navigate("/blog/list");
        }
      }).catch((err) => {
        console.log(err);

        // backendten gelen hataları handle
        if (err.response.data.validationErrors) {
          //console.log(err.response.data.validationErrors);
          this.setState({ validationErrors: err.response.data.validationErrors })
        } //end if
        this.setState({ spinnerData: false })
      }) //end catch
  } //end submit


  // RENDER
  render() {


    // i18n
    const { t } = this.props;

    // state
    const { validationErrors, isRead, spinnerData,header,content,id } = this.state;
   
    return (
      <React.Fragment>
        <div className="container">
          <h2
            className="display-3 text-center text-primary p-4 text-uppercase"
            style={{ marginBottom: "1rem" }}
          >
            {this.props.t('update')}
          </h2>
          <form className="create_form" method="post" autoComplete="true">
            {/* Header */}
            {/* <div className="form-outline mb-4">
              <label className="form-label" htmlFor="header">
                {t('blog_header')}
              </label>
              <input
                type="text"
                className="form-control"
                id="header"
                name="header"
                placeholder={t('blog_header')}
                autofocus={true}
                required={true}
                onChange={this.onchangeInputValue}
              />
              <div className="text-danger is-invalid">{t('is_valid_header')}</div>
            </div> */}
            <ResuabilityBlogInput
              type="text"
              name="header"
              label={t('blog_header')}
              id="header"
              placeholder={t('blog_header')}
              autoFocus={true}
              required={true}
              onChange={this.onchangeInputValue}
              //error={this.state.validationErrors.header}
              error={this.state.validationErrors.header}
              value={header}
            />

            {/* Content */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="content">
                {t('blog_content')}
              </label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                placeholder={t('blog_content')}
                autoFocus={false}
                required={true}
                onChange={this.onchangeInputValue}
                value={content}
              />
              <div 
              className={this.state.validationErrors.content&&'text-danger is-invalid'}
               >{this.state.validationErrors.content}</div>
            </div>
            {/* is read */}
            <div className="form-check d-flex justify-content-center">
              <input
                type="checkbox"
                className="form-check-input"
                id="isRead"
                name="isRead"
                onChange={this.onchangeCheckBoxValue}
              />
              <label className="form-check-label ms-2" htmlFor="isRead">
                blog Yüklensin mi ?
              </label>
            </div>
            <button
              type='submit'
              onClick={this.blogSubmit}
              disabled={(!isRead)||(spinnerData)}
              className="btn btn-primary">
               {(spinnerData)&&<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                {this.props.t('submit')}
                </button>
          </form>
        </div>
      </React.Fragment>
    )
  }
} //end class

// i18n export default Wrapper
export default withTranslation()(BlogUpdate);
