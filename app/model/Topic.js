/**
 * Represents a Topic
 */
Ext.define('DoWhy.model.Topic', {
    extend: 'Ext.data.Model',

    config: {
        fields: [ 
        	'id',
        	'title',
        	'count',
        	'user_email',
        	'user_id',
        	'created_at',
        	'updated_at'
        ],

        belongsTo: 'User',
        hasMany: 'Arguments'
    }
});