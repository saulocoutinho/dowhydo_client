Ext.define('DoWhy.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main-tab-panel',
    requires: [
                'DoWhy.view.search.Main',
                'DoWhy.view.trends.Main',
                'DoWhy.view.feed.Main',
                'DoWhy.view.friends.Main',
                'DoWhy.view.me.Main'
    ],

    config: {

        tabBarPosition: 'bottom',
        tabBar: {
            activeTab: 2
        },
        items: [
            {
                xclass: 'DoWhy.view.search.Main',
                title: 'Search',
                iconCls: 'search'
            },
            {
                xclass: 'DoWhy.view.trends.Main',
                title: 'Trends',
                iconCls: 'download'
            },
            {
                xclass: 'DoWhy.view.feed.Main',
                title: 'Feed',
                iconCls: 'bookmarks'
            },
            {
                xclass: 'DoWhy.view.friends.Main',
                title: 'Friends',
                iconCls: 'team'
            },
            {
                xclass: 'DoWhy.view.me.Main',
                title: 'Me',
                iconCls: 'user'
            }
        ]
    }
});