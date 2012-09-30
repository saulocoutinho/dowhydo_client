Ext.define('DoWhy.controller.Friends', {
    extend: 'Ext.app.Controller',
	requires: [
        'DoWhy.view.friends.FriendShow',
        'DoWhy.view.friends.Main',
        'DoWhy.view.friends.showtopic.Topic',
        'DoWhy.view.friends.showuser.ShowUser'],

    config: {
        refs: {
            main: 'friends-main',
            friendsList: 'friends-list',
            friendShow: 'friend-show',
            friendFeed: 'friend-feed',
            showTopic: 'friends-show-topic',
            showTopicArguments: 'friends-show-topic-arguments',
            showUser: 'friends-show-user',
            showUserFeedList: 'friends-show-user-feed',
            removeButton: 'friends-main #removeButton'
        },

	    control: {

            main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },

	    	friendsList: {
	            itemtap: 'onFriendTap'
	        },

            friendFeed: {
                itemtap: 'onFriendFeedItemTap'
            },

            showTopicArguments: {
                itemtap: 'onShowTopicArgumentsItemTap'
            },

            showUserFeedList: {
                itemtap: 'onShowUserFeedItemTap'
            },            

	    }
	},

	onFriendTap: function(dataview, index, target, record) {

        Ext.getStore('FriendsUserFeed').load({
                params: {
                    user_id: record.data.id
                }
        });

        this.getMain().push(Ext.create('DoWhy.view.friends.FriendShow').setRecord(record));
    },

    onFriendFeedItemTap: function(list, index, target, record, e) {
        target = Ext.get(e.target);

        // If topic title
        if (target && target.dom && (target.hasCls('title') || target.hasCls('topic-title'))) {
            store = Ext.getStore('FriendsTopicArguments');
            store.load({
                params: {
                    topic_id: (target.hasCls('title')) ? record.data.topic_id : record.data.id
                }
            });

            this.getMain().push(Ext.create('DoWhy.view.friends.showtopic.Topic').setRecord(record));
        }
        // If like button
        else if (target && target.dom && target.hasCls('like')) {
            this.likeArgument(list, index, target, record);
        }
    },

    onShowUserFeedItemTap: function(list, index, target, record, e) {
        target = Ext.get(e.target);

        // If topic title
        if (target && target.dom && (target.hasCls('title') || target.hasCls('topic-title'))) {
            store = Ext.getStore('FriendsTopicArguments');
            store.load({
                params: {
                    topic_id: (target.hasCls('title')) ? record.data.topic_id : record.data.id
                }
            });

            this.getMain().push(Ext.create('DoWhy.view.friends.showtopic.Topic').setRecord(record));
        }
        // If like button
        else if (target && target.dom && target.hasCls('like')) {
            this.likeArgument(list, index, target, record);
        }
    },

    onShowTopicArgumentsItemTap: function(list, index, target, record, e) {
        console.log("tap");
        target = Ext.get(e.target);

        //if user email
        if (target && target.dom && target.hasCls('email')) {
            Ext.getStore('FriendsUserFeed').load({
                params: {
                    user_id: record.data.user_id
                }
            });

            this.getMain().push(Ext.create('DoWhy.view.friends.showuser.ShowUser').setRecord(record));

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
                if (list.xtype == 'friends-show-topic-arguments') {
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
        var removeButton = this.getRemoveButton();

        if (item.xtype == "friend-show") {
            removeButton.show();
        }
    },

    onMainPop: function(view, item) {
        var removeButton = this.getRemoveButton();
        
            removeButton.hide();
    }
});