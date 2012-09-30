Ext.define('DoWhy.view.friends.showuser.ShowUser', {
    extend: 'Ext.Container',
    requires: ['DoWhy.view.friends.showuser.UserFeed'],
    xtype: 'friends-show-user',
    
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
                xclass: 'DoWhy.view.friends.showuser.UserFeed',
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