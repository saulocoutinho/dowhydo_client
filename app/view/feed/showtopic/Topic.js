Ext.define('DoWhy.view.feed.showtopic.Topic', {
    extend: 'Ext.Container',
    requires: ['DoWhy.view.feed.showtopic.Arguments', 'DoWhy.view.feed.showtopic.Form'],
    xtype: 'feed-show-topic',
    
    config: {
        layout: 'vbox',
        baseCls: 'x-show-topic',

        items: [

            {   
                tpl: [
                    '<div class="top">',
                        '<tpl if="topic_user_id">',
                            '<div class="headshot" style="background-image:url(resources/images/headshots/{topic_user_id}.jpeg);"></div>',
                            '<div class="title">{title}<span>{topic_user_email}</span></div>',
                        '<tpl else>',
                            '<div class="headshot" style="background-image:url(resources/images/headshots/{user_id}.jpeg);"></div>',
                            '<div class="title">{title}<span>{user_email}</span></div>',
                        '</tpl>',
                    '</div>'
                ].join('')  
            },

            {
                xclass: 'DoWhy.view.feed.showtopic.Arguments',
                flex: 1
            },

            {
                xclass: 'DoWhy.view.feed.showtopic.Form'
            }

        ],
    },

    // set the record sent by Topics controller
    updateRecord: function(record) {
        if (record) {
            this.getComponent(0).setData(record.data);
            this.getComponent(2).setData(record.data);
        }
    }
});