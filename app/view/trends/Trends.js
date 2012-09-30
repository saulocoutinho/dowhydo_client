Ext.define('DoWhy.view.trends.Trends', {
    extend: 'Ext.List',
    xtype: 'trends-list',

    config: {
    	store: 'Trends',
    	cls: 'x-topics',
	    itemTpl: [
	    	'<div class="headshot" style="background-image:url(resources/images/headshots/{user_id}.jpeg);"></div>',
            '<div class="icon">></div>',
            '<div class="title">{title}</div>',
            '<div class="email">{user_email}</div>'
        ].join('')	    
    }
});