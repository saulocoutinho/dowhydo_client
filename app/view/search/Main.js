Ext.define('DoWhy.view.search.Main', {
    extend: 'Ext.Panel',
    xtype: 'search-view',
    requires: ['Ext.field.Search'],

    config: {
    	items: [
	        {
	            xtype: 'toolbar',
	            docked: 'top',

	            items: [
	                {
	                    xtype: 'searchfield',
	                    placeHolder: 'Search...',
	                    width: 'auto',
	                    listeners: {
	                    }
	                },
	            ]
	        }
        ]   
    }
});