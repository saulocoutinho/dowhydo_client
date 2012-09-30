Ext.define('DoWhy.store.Feed', {
    extend  : 'Ext.data.Store',
    
    config: {
	    model: 'DoWhy.model.Feed',

	    proxy: {
	    	type: 'jsonp',
	    	//url: 'http://localhost:3000/feeds.js',
	    	url: 'http://shrouded-ocean-8412.herokuapp.com/feeds.js',

	    	noCache: false,
            startParam: '',
            pageParam: '',
            limitParam: '',

            /*extraParams: {
                //auth_token: '5F5J7qxdfxqDBzNqLVHy'
                auth_token: this.getToken
            },*/
	    },

	    //autoLoad: true
	},

	getToken: function(){
		console.log('gettoken');
		return Ext.getStore('Application').first().get('token')
	}
});