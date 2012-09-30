Ext.define('DoWhy.view.friends.Friends', {
    extend: 'Ext.List',
    xtype: 'friends-list',

    config: {
    	store: 'Friends',
    	cls: 'x-topics',
	    itemTpl: [
	    	'<div class="headshot" style="background-image:url(resources/images/headshots/{id}.jpeg);"></div>',
            '<div class="icon">></div>',
            '<div class="title">{email}</div>',
            '<div class="email">{created_at}</div>'
        ].join('')	    
    }
});