Ext.define('DoWhy.store.Topics', {
    extend  : 'Ext.data.Store',
    
    config: {
	    model: 'DoWhy.model.Topic',

	    proxy: {
	    	type: 'jsonp',
	    	url: 'http://localhost:3000/topics.js',

	    	noCache: false,
            startParam: '',
            pageParam: '',
            limitParam: ''
	    },

	    //autoLoad: true
	}
});