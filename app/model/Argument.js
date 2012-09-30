/**
 * Represents a Argument
 */
Ext.define('DoWhy.model.Argument', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'id',
            'arg',
            'kind',
            'title',
            'count',
            'user_email',
            'user_id',
            'topic_id',
            'topic_user_id',
            'topic_user_email',
            'created_at',
            'updated_at'
        ],

        belongsTo: 'Topic',
        belongsTo: 'User'

    }
});