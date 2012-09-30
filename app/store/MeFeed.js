Ext.define('DoWhy.store.MeFeed', {
    extend: 'Ext.data.Store',
    
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
                auth_token: '6jmwp833xBwMpLDdHKzW'
            },*/
	    },

	    //autoLoad: true
	}
});