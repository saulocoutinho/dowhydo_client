Ext.define('DoWhy.controller.Application', {
    extend: 'Ext.app.Controller',
    requires: [
        'DoWhy.view.Main',
        'DoWhy.view.Login'
    ],

    config: {
        refs: {
            main: 'main-tab-panel',
            loginForm: 'login-form',
            loginFormEmail: 'login-form #emailField',
            loginFormPassword: 'login-form #passwordField',
            loginFormButton: 'login-form #loginButton'
        },

	    control: {

            loginFormButton: {
                tap: 'onLoginButtonTap'
            }
	    }
	},

    onLoginButtonTap: function(button, e) {
        loginForm = this.getLoginForm();
        email = this.getLoginFormEmail().getValue();
        password = this.getLoginFormPassword().getValue();

        Ext.Ajax.request({
            // http://localhost:3000/topics.json
            url: 'http://localhost:3000/tokens.json',
            method: 'POST',
            //withCredentials: true,
            //disableCaching: false,
            useDefaultXhrHeader: false,

            params: {
                email: email,
                password: password
            },

            success: function(response) {
                console.log('Login Success');
                Ext.getStore('Application').add({token: response.responseText.slice(10,-2)});
                token = Ext.getStore('Application').first().get('token');

                Ext.getStore('Feed').load({
                    params: {
                        auth_token: token
                    }
                });

                Ext.getStore('Friends').load({
                    params: {
                        auth_token: token
                    }
                });

                Ext.getStore('MeFeed').load({
                    params: {
                        auth_token: token
                    }
                });

                Ext.getStore('Trends').load();

                Ext.Viewport.add({ xclass: 'DoWhy.view.Main' });
                Ext.Viewport.setActiveItem(1);
            },

            failure: function(response){
                console.log("Login Failure");
                console.log(response.responseText);
            }

        })
        
    }
});