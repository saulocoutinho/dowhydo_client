Ext.define('DoWhy.store.Trends', {
    extend  : 'Ext.data.Store',
    
    config: {
	    model: 'DoWhy.model.Topic',

	    proxy: {
	    	type: 'jsonp',
	    	url: 'http://localhost:3000/topics/trends.js',

	    	noCache: false,
            startParam: '',
            pageParam: '',
            limitParam: ''
	    },

	    //autoLoad: true
	}
});