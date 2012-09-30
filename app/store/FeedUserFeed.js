Ext.define('DoWhy.store.FeedUserFeed', {
    extend: 'Ext.data.Store',
    xtype: 'feed-user-feed-store',
    
    config: {
	    model: 'DoWhy.model.Feed',

	    proxy: {
	    	type: 'jsonp',
	    	url: 'http://localhost:3000/feeds/userfeed.js',

	    	noCache: false,
            startParam: '',
            pageParam: '',
            limitParam: '',

            /*extraParams: {
                //auth_token: '6jmwp833xBwMpLDdHKzW'
                //auth_token: this.getToken
            },*/
	    },

	    //autoLoad: true
	},

    getToken: function(){
        return Ext.getStore('Application').first().get('token')
    }
});