Ext.define('DoWhy.view.friends.FriendShow', {
    extend: 'Ext.Container',
    requires: ['DoWhy.view.friends.FriendFeed'],
    xtype: 'friend-show',
    
    config: {
        layout: 'vbox',
        baseCls: 'x-show-topic',

        items: [

            {   
                id: 'friend-content',
                tpl: [
                    '<div class="top">',
                        '<div class="headshot" style="background-image:url(resources/images/headshots/{id}.jpeg);"></div>',
                        '<div class="title">{email}</div>',
                    '</div>'
                ].join('')                               
            },

            {
                xclass: 'DoWhy.view.friends.FriendFeed',
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