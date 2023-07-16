import React, { Component } from 'react'
import BlogApiServices from '../../services/BlogApiServices';

export default class BlogView extends Component {

  //DisplayName
  static displayName = "Blog_View";

  // CONSTRUCTOR
  constructor(props) {
    super(props);
    // STATE
    this.state = {
      //id: this.props.match.params.id,
      id: 2,
      blogDto: {},
    };
  }

  //CDM
  componentDidMount() {
    BlogApiServices.blogServiceFindById(this.state.id)
      .then((response) => {
        const findBlog = response.data;
        //console.log(findBlog);
        this.setState({
          //1.YOL
          //header: findBlog.header,
          //content: findBlog.content,

          //2.YOL
          blogDto: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }


  // RENDER
  render() {
    const { id, header, content, systemDate } = this.state.blogDto;
    // RETURN
    return (
      <React.Fragment>
        <div className="container">
          <h2
            className="display-3 text-center text-primary p-4 text-uppercase"
            style={{ marginBottom: "1rem" }}
          >
            Detay sayfası
          </h2>
          <div className="card text-center">
            <div className="card-body">
              <h3 className="card-title">{id}</h3>
              <p className="card-title">{header}</p>
              <p className="card-text">{content}</p>
              <p className="card-text span float-end">{systemDate}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
