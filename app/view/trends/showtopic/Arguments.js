Ext.define('DoWhy.view.trends.showtopic.Arguments', {
    extend: 'Ext.List',
    xtype: 'trends-show-topic-arguments',

    config: {
        store: 'TrendsTopicArguments',
        cls: 'x-arguments',
        scrollToTopOnRefresh: false,
        itemTpl: [
            '<div class="headshot" style="background-image:url(resources/images/headshots/{user_id}.jpeg);"></div>',
            '<div class="email">{user_email}</div>',

            '<tpl if="kind == \'whynot\'">',
                '<div class="kind" style="background: #660000">{kind}</div>',
            '<tpl else>',
                '<div class="kind" style="background: #006633">{kind}</div>',
            '</tpl>',

            '<div class="text">{arg}</div>',
            '<div class="action-bar">',
                '<div class="date">at {created_at}</div>',
                '<div class="like">Like</div>',
                '<div class="count">#{count}</div>',
            '</div>'          
        ].join('')
    },
});