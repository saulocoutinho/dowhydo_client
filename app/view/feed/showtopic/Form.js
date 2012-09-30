Ext.define('DoWhy.view.feed.showtopic.Form', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.field.Select'],
    xtype: 'feed-show-topic-form',
    
    config: {
        
        scrollable: false,
        padding: 10,
        layout: 'hbox',
        items: [

            {
                itemId: 'kind',
                xtype: 'selectfield',
                usePicker: false,
                hidden: true,
                width: 130,
                options: [
                    {text: 'why',  value: 'why'},
                    {text: 'whynot', value: 'whynot'}
                ]
            },

            {
            	itemId: 'arg',
                name: 'argument',
                xtype: 'textareafield',
                height: 30,
                maxLength: 140,
                clearIcon: false,
                autoCorrect: true,
                placeHolder: 'An argument here...',
                flex: 1
                // ADICIONAR CONTADOR DE CARACTERES E FUNCAO QUE AUMENTA A ALTURA
                // DA TEXT AREA ENQUANTO NÁO ATINGIR O NUMERO DE CARACTERES
            },

            {
                xtype: 'spacer',
                width: 10
                //flex: 1
            },

            {
            	itemId: 'okButton',
                xtype: 'button',
                ui: 'action',
                height: 40,
                text: 'Ok'
            },

            {
                itemId: 'argueButton',
                xtype: 'button',
                ui: 'action',
                height: 40,
                text: 'Argue',
                hidden: true
            },

            {
                xtype: 'spacer',
                width: 10
            },

            {
                itemId: 'cancelButton',
                xtype: 'button',
                ui: 'decline',
                height: 40,
                text: 'Cancel',
                hidden: true
            }
        ]
    },

    updateData: function(data) {
        if (data) {
            this.getComponent(4).setData(data);
        }
    }
});