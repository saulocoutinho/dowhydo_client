Ext.define('DoWhy.model.User', {
    extend: 'Ext.data.Model',

    config: {
        fields: [ 'id', 'email', 'created_at' ],

        hasMany: 'Topics',
        hasMany: 'Arguments'

    }
});