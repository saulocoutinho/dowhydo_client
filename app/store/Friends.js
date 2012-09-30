Ext.define('DoWhy.store.Friends', {
    extend  : 'Ext.data.Store',
    
    config: {
	    model: 'DoWhy.model.User',

	    proxy: {
	    	type: 'jsonp',
	    	url: 'http://localhost:3000/friendships/friends.js',

	    	noCache: false,
            startParam: '',
            pageParam: '',
            limitParam: '',

            /*extraParams: {
                //auth_token: '6jmwp833xBwMpLDdHKzW'
            },*/
	    },

	    //autoLoad: true
	}
});