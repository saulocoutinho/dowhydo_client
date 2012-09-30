Ext.define('DoWhy.controller.Trends', {
    extend: 'Ext.app.Controller',
    requires: [
                'DoWhy.view.trends.showtopic.Topic',
                'DoWhy.view.trends.showtopic.Arguments',
                'DoWhy.view.trends.showuser.ShowUser'
    ],

    config: {
        refs: {
            main: 'trends-main',
            trendsList: 'trends-list',
            composeButton: 'trends-main #composeButton',
            showTopic: 'trends-show-topic',
            showTopicArguments: 'trends-show-topic-arguments',
            showUser: 'trends-show-user',
            showUserFeedList: 'trends-show-user-feed',
        },

	    control: {

            main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },

            trendsList: {
                itemtap: 'onTopicTap'
            },
            
            showTopicArguments: {
                itemtap: 'onShowTopicArgumentsItemTap'
            },

            showUserFeedList: {
                itemtap: 'onShowUserFeedItemTap'
            },

	    }
	},

    onTopicTap: function(dataview, index, target, record) {

        Ext.getStore('TrendsTopicArguments').load({
                params: {
                    topic_id: record.data.id
                }
        });

        var composeButton = this.getComposeButton();

        /*if (!this.showTopic) {
            this.showTopic = Ext.create('DoWhy.view.trends.showtopic.Topic');
        }

        this.showTopic.setRecord(record);

        // Push the show topic view into the navigation view
        this.getMain().push(this.showTopic);*/

        this.getMain().push(Ext.create('DoWhy.view.trends.showtopic.Topic').setRecord(record));
    },

    onShowUserFeedItemTap: function(list, index, target, record, e) {
        target = Ext.get(e.target);

        // If topic title
        if (target && target.dom && (target.hasCls('title') || target.hasCls('topic-title'))) {
            store = Ext.getStore('TrendsTopicArguments');
            store.load({
                params: {
                    topic_id: (target.hasCls('title')) ? record.data.topic_id : record.data.id
                }
            });

            this.getMain().push(Ext.create('DoWhy.view.trends.showtopic.Topic').setRecord(record));
        }
        // If like button
        else if (target && target.dom && target.hasCls('like')) {
            this.likeArgument(list, index, target, record);
        }
    },

    onShowTopicArgumentsItemTap: function(list, index, target, record, e) {
        target = Ext.get(e.target);

        //if user email
        if (target && target.dom && target.hasCls('email')) {
            Ext.getStore('TrendsUserFeed').load({
                params: {
                    user_id: record.data.user_id
                }
            });

            this.getMain().push(Ext.create('DoWhy.view.trends.showuser.ShowUser').setRecord(record));

        }
        // If like button
        else if (target && target.dom && target.hasCls('like')) {
            this.likeArgument(list, index, target, record);
        }
    },

    likeArgument: function(list, index, target, record){
        token = Ext.getStore('Application').first().get('token');
        Ext.Ajax.request({
            // http://localhost:3000/topics/topic_id/arguments/argument_id/vote.json
            url: 'http://localhost:3000/topics/' + record.data.topic_id + '/arguments/' + record.data.id + '/vote.json',
            method: 'POST',
            //withCredentials: true,
            //disableCaching: false,
            useDefaultXhrHeader: false,

            params: {
                auth_token: token
            },

            success: function(response) {
                if (list.xtype == 'trends-show-topic-arguments') {
                    list.getStore().load({
                        params: {
                            topic_id: record.data.topic_id
                        }
                    });
                } else {
                    list.getStore().load({
                        params: {
                            user_id: record.data.user_id
                        }
                    });
                }      
                console.log("Like success");
            },

            failure: function(response){
                console.log("Like failure")
            }

        })
    },

    onMainPush: function(view, item) {
        /*var composeButton = this.getComposeButton();

        if (item.xtype == "show-topic") {
            composeButton.setText('Argument');
        }*/
    },

    
    onMainPop: function(view, item) {
        /*var composeButton = this.getComposeButton();
        composeButton.setText('Topic');
    */
    },

    showComposeButton: function() {
        /*var composeButton = this.getComposeButton();

        if (!composeButton.isHidden()) {
            return;
        }

        composeButton.show();*/
    },

    hideComposeButton: function() {
        /*var composeButton = this.getComposeButton();

        if (composeButton.isHidden()) {
            return;
        }

        composeButton.hide();*/
    }
});