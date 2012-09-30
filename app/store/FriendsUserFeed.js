Ext.define('DoWhy.store.FriendsUserFeed', {
    extend: 'Ext.data.Store',
    xtype: 'userfeed',
    
    config: {
	    model: 'DoWhy.model.Feed',

	    proxy: {
	    	type: 'jsonp',
	    	url: 'http://localhost:3000/feeds/userfeed.js',

	    	noCache: false,
            startParam: '',
            pageParam: '',
            limitParam: '',

            extraParams: {
                auth_token: '6jmwp833xBwMpLDdHKzW'
            },
	    },

	    //autoLoad: true
	}
});