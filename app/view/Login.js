Ext.define('DoWhy.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login-form',
    requires: ['Ext.field.Email', 'Ext.field.Password'],
    
    config: {
        
        scrollable: false,
        padding: 10,
        layout: 'vbox',
        items: [

            {
                itemId: 'emailField',
                xtype: 'emailfield',
                name: 'email',
                placeHolder: 'Email',
            },

            {
                xtype: 'spacer',
                height: 3
            },

            {
                itemId: 'passwordField',
                xtype: 'passwordfield',
                name: 'password',
                placeHolder: 'Password',
                clearIcon: false
            },

            {
                xtype: 'spacer',
                height: 15
            },

            {
                itemId: 'loginButton',
                xtype: 'button',
                ui: 'action',
                height: 40,
                text: 'Login'
            }
        ]
    }
});