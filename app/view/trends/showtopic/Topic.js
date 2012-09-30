Ext.define('DoWhy.view.trends.showtopic.Topic', {
    extend: 'Ext.Container',
    requires: ['DoWhy.view.trends.showtopic.Arguments'],
    xtype: 'trends-show-topic',
    
    config: {
        layout: 'vbox',
        baseCls: 'x-show-topic',

        items: [

            {   
                tpl: [
                    '<div class="top">',
                            '<div class="headshot" style="background-image:url(resources/images/headshots/{user_id}.jpeg);"></div>',
                            '<div class="title">{title}<span>{user_email}</span></div>',
                    '</div>'
                ].join('')                               
            },

            {
                xclass: 'DoWhy.view.trends.showtopic.Arguments',
                flex: 1
            }
        ],
    },

    // set the record sent by Topics controller
    updateRecord: function(record) {
        if (record) {
            this.getComponent(0).setData(record.data);
        }
    }
});