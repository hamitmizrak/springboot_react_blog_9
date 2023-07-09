import React, { Component } from 'react'
import BlogApiServices from '../../services/BlogApiServices';

export default class BlogList extends Component {

    static displayName = "Blog_List";

    constructor(props) {
        super(props);
        this.state = {
            blogList: [],
        }
        //BIND
        this.create=this.create.bind(this);
        this.view=this.view.bind(this);
        this.update=this.update.bind(this);
        this.delete=this.delete.bind(this);

    }

    // CDM
    componentDidMount() {
        // Promise
        BlogApiServices.blogServiceList().then(
            (response) => {
                this.setState({
                    blogList: response.data
                })
            }).catch((error) => {
                console.error("Blog List");
                console.error(error);
            });
    }

    // FUNCTION
    // PUSH CREATE
    create() {
        // PHP
        this.props.history.push("/blog/create")
    }

    // PUSH VIEW
    view(id) {
        // PHP
        this.props.history.push("/blog/view/" + id)
    }

    // PUSH UPDATE
    update(id) {
        // PHP
        this.props.history.push(`/blog/update/${id}`)
    }

    //DELETE
    delete(id) {
        BlogApiServices.blogServiceDeleteId(id).then(
            (response) => {
                this.setState({
                    blogList: this.state.blogList.filter(
                        blogList => blogList.id != id
                    )
                });
            }).catch((err) => {
                console.log("Blog Delete Wrong");
                console.error(err);
            });
    }

    // RENDER
    render() {

        // RETURN
        return (
            <React.Fragment>
                <h1 className="text-center display-4">Blog List</h1>
                <div className="container">
                    <div className="row">
                        <div className="mx-auto">
                            <button className="btn btn-primary" onClick={this.create}>Ekle</button>
                            {/* <button className="btn btn-primary" onClick={()=>this.create()}>Ekle</button> */}
                        </div>
                    </div>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>HEADER</th>
                                <th>CONTENT</th>
                                <th>Güncelle</th>
                                <th>Göster</th>
                                <th>Sil</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.blogList.map(temp =>
                                    <tr key={temp.id}>
                                        <td>{temp.id}</td>
                                        <td>{temp.header}</td>
                                        <td>{temp.content}</td>
                                        <td><i style={{ "cursor": "pointer" }} className="text-primary fa-solid fa-pen-to-square" onClick={() => this.update(temp.id)} ></i></td>
                                        <td><i style={{ "cursor": "pointer" }} className="text-warning fa-solid fa-expand" onClick={() => { this.view(temp.id) }}></i></td>
                                        <td><i style={{ "cursor": "pointer" }} className="text-danger fa-solid fa-trash" onClick={() => {
                                            if (window.confirm("Blogu Silmek istediğinizden Emin misiniz?")) {
                                                this.delete(temp.id);
                                            } else {
                                                window.alert("Silinmedi !!!")
                                            }
                                        }}></i></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        ) // end return
    } // end render
}// end class
