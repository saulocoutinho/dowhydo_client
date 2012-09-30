Ext.define('DoWhy.model.Feed', {
    extend: 'Ext.data.Model',

    config: {
        fields: [ 
        	'id',
        	'title',
        	'count',
        	'arg',
        	'kind',
        	'user_email',
        	'user_id',
        	'topic_id',
        	'topic_user_id',
            'topic_user_email',
        	'created_at',
        	'updated_at'
        ],
    }
});