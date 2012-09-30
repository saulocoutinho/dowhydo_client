Ext.define('DoWhy.view.trends.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'trends-main',
    requires: ['DoWhy.view.trends.Trends'],

    config: {

        //fullscreen: true,
        //layout: 'card',
        autoDestroy: false,

        navigationBar: {
            id: 'NavigationBar',
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
                xclass: 'DoWhy.view.trends.Trends'
            },
        ]
    }
});