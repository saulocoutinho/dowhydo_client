Ext.define('DoWhy.store.FeedTopicArguments', {
    extend  : 'Ext.data.Store',

    config: {
    	model: 'DoWhy.model.Argument',

    	proxy: {
	    	type: 'jsonp',
	    	url: 'http://localhost:3000/arguments.js',

	    	noCache: false,
            startParam: '',
            pageParam: '',
            limitParam: ''
        },

	    //autoLoad: true
    }
});