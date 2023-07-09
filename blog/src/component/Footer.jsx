import React, { Component } from 'react'

// Arrow function Date
let newDateYear = () => {
    return new Date().getFullYear();
}

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div
                        className="text-center p-4"
                        style={{
                            "backgroundColor": "rgba(0, 0, 0,1)",
                            "color": "white"
                        }}>
                        2020
                        © {newDateYear()} {this.props.copy}
                    </div>
                </footer>
            </div>
        )
    }
}
