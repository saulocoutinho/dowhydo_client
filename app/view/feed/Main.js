Ext.define('DoWhy.view.feed.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'feed-main',
    requires: [
        'DoWhy.view.feed.Feed',
        'DoWhy.view.feed.showuser.ShowUser',
        'DoWhy.view.feed.showtopic.Topic'
    ],

    config: {

        navigationBar: {
            items: [                
                {
                    iconMask: true,
                    itemId: 'composeButton',
                    ui: 'action',
                    iconCls: 'compose',
                    align: 'right',
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
                },
            ]
        },
        items: [
            
            {
                xclass: 'DoWhy.view.feed.Feed'
            },
        ]
    }
});