
import React, { Component } from 'react'

// Context tanımlamak
export const LoginAuthenticationContext = React.createContext();

// Class
export default class LoginContext extends Component {

    //Component'te  görünür isim
    static displayName = "Login_Context";

    // başlangıç değerleri
    state = {
        isLoginState: false,
        username: undefined,
        password: undefined,
        name: undefined,
        surname: undefined,
        email: undefined,
        displayName: undefined,
        image: undefined,
        rolesName: undefined,
        rolesId: undefined,
    }

    // USER LOGIN
    // kullanıcı Login ise true olsun
    userIsLogin = (authenticationState) => {
        this.setState({
            ...authenticationState, // state bütün verileri alsın
            isLoginState: true,
        })
    }

    // LOGOUT
    userLogout = () => {
        this.setState({
            isLoginState: false,
            username: undefined,
            password: undefined,
            name: undefined,
            surname: undefined,
            email: undefined,
            displayName: undefined,
            image: undefined,
            rolesName: undefined,
            rolesId: undefined,
        })
    }

    // RENDER
    render() {
        return (
            <LoginAuthenticationContext.Provider value={{
                state: { ...this.state },
                userIsLogin: this.userIsLogin,
                userLogout: this.userLogout
            }}>
                {this.props.children}
            </LoginAuthenticationContext.Provider>
        ) //end return
    } // end render
} //end class
