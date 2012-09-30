Ext.define('DoWhy.view.trends.showuser.ShowUser', {
    extend: 'Ext.Container',
    requires: ['DoWhy.view.trends.showuser.UserFeed'],
    xtype: 'trends-show-user',
    
    config: {
        layout: 'vbox',
        baseCls: 'x-show-topic',

        items: [

            {   
                tpl: [
                    '<div class="top">',
                        '<div class="headshot" style="background-image:url(resources/images/headshots/{user_id}.jpeg);"></div>',
                        '<div class="title">{user_email}</div>',
                    '</div>'
                ].join('')                               
            },

            {
                xclass: 'DoWhy.view.trends.showuser.UserFeed',
                flex: 1
            }
        ],
    },

    // set the record sent by Feed controller
    updateRecord: function(record) {
        if (record) {
            this.getComponent(0).setData(record.data);
        }
    }
});