Ext.define('DoWhy.view.newtopic.Form', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.field.Select'],
    xtype: 'new-topic-form',
    
    config: {
        
        scrollable: false,
        padding: 10,
        layout: 'vbox',
        items: [
            {
                xtype: 'spacer',
                height: 10
            },
            
            {
                itemId: 'title',
                name: 'title',
                xtype: 'textareafield',
                height: 30,
                maxLength: 140,
                clearIcon: false,
                autoCorrect: true,
                placeHolder: 'The new topic here...',
                flex: 1
                // ADICIONAR CONTADOR DE CARACTERES E FUNCAO QUE AUMENTA A ALTURA
                // DA TEXT AREA ENQUANTO NÁO ATINGIR O NUMERO DE CARACTERES
            },

            {
                xtype: 'spacer',
                height: 10
            },

            {
                itemId: 'saveButton',
                xtype: 'button',
                ui: 'action',
                height: 40,
                text: 'Save'
            }
        ]
    }
});