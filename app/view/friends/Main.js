Ext.define('DoWhy.view.friends.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'friends-main',
    requires: ['DoWhy.view.friends.Friends'],
    
    config: {

        autoDestroy: false,

        navigationBar: {
            items: [
                {
                    iconMask: true,
                    itemId: 'removeButton',
                    ui: 'decline',
                    iconCls: 'delete',
                    align: 'right',
                    hidden: true,
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
                xclass: 'DoWhy.view.friends.Friends'
            },
        ]
    }
});