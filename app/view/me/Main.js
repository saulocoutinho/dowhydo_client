Ext.define('DoWhy.view.me.Main', {
    extend: 'Ext.List',
    xtype: 'me-main',

    config: {
        store: 'MeFeed',
        cls: 'x-feed',
        itemTpl: Ext.create('Ext.XTemplate',
            '<tpl if="arg">',
            
                '<div class="headshot" style="background-image:url(resources/images/headshots/{user_id}.jpeg);"></div>',
                
                '<div class="desc">',
                    '<div class="email">{user_email}</div>',
                    ' <span>posted an argument on</span>',
                    ' <div class="title">{title}.</div>',
                '</div>',
                
                '<div class="date">at {created_at}</div>',

                '<div class="box">',
                    '<tpl if="kind == \'whynot\'">',
                        '<div class="kind" style="background: #660000">{kind}</div>',
                    '<tpl else>',
                        '<div class="kind" style="background: #006633">{kind}</div>',
                    '</tpl>',

                    '<div class="text">{arg}</div>',
                    
                    '<div class="action-bar">',
                        '<div class="like">Like</div>',
                        '<div class="count">#{count}</div>',
                    '</div>',
                '</div>',
                                
            '<tpl else>',
                '<div class="headshot" style="background-image:url(resources/images/headshots/{user_id}.jpeg);"></div>',
                
                '<div class="desc">',
                    '<div class="email">{user_email}</div>',
                    ' <span>has created a new topic and needs your opinion.</span>',
                '</div>',
                
                '<div class="date">at {created_at}</div>',

                '<div class="box">',
                    '<div class="topic-title">{title}</div>',
                '</div>',                
            '</tpl>'
        )
    }
});