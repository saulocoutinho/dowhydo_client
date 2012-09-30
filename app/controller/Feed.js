Ext.define('DoWhy.controller.Feed', {
    extend: 'Ext.app.Controller',
    requires: [
        'DoWhy.view.newtopic.Form'
    ],

    config: {
        refs: {
            main: 'feed-main',
            composeButton: 'feed-main #composeButton',
            newTopicForm: 'new-topic-form',
            newTopicFormTitle: 'new-topic-form #title',
            newTopicFormSaveButton: 'new-topic-form #saveButton',
            feedList: 'feed-list',
            showTopic: 'feed-show-topic',
            showTopicArguments: 'feed-show-topic-arguments',
            showTopicFormArg: 'feed-show-topic-form #arg',
            showTopicFormKind: 'feed-show-topic-form #kind',
            showTopicFormOkButton: 'feed-show-topic-form #okButton',
            showTopicFormArgueButton: 'feed-show-topic-form #argueButton',
            showTopicFormCancelButton: 'feed-show-topic-form #cancelButton',
            showUser: 'feed-show-user',
            showUserFeedList: 'feed-show-user-feed',
        },

	    control: {

            main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },

            composeButton: {
                tap: 'onComposeButtonTap'
            },

            newTopicFormSaveButton: {
                tap: 'onNewTopicFormSaveButtonTap'
            },

	    	feedList: {
	            itemtap: 'onFeedItemTap'
	        },
            
            showTopicArguments: {
                itemtap: 'onShowTopicArgumentsItemTap'
            },

            showTopicFormOkButton: {
                tap: 'onShowTopicFormOkButtonTap'
            },

            showTopicFormArgueButton: {
                tap: 'onShowTopicFormArgueButtonTap'
            },

            showTopicFormCancelButton: {
                tap: 'onShowTopicFormCancelButtonTap'
            },

            showUserFeedList: {
                itemtap: 'onShowUserFeedItemTap'
            }

	    }
	},

    onComposeButtonTap: function(button, e) {  
        this.getMain().push(Ext.create('DoWhy.view.newtopic.Form'));
        this.getComposeButton().hide();
    },

    onNewTopicFormSaveButtonTap: function(button, e){
        token = Ext.getStore('Application').first().get('token');
        title = this.getNewTopicFormTitle().getValue();
        main = this.getMain()
        composeButton = this.getComposeButton();
        
        Ext.Ajax.request({
            // http://localhost:3000/topics.json
            url: 'http://localhost:3000/topics.json',
            method: 'POST',
            //withCredentials: true,
            //disableCaching: false,
            useDefaultXhrHeader: false,

            params: {
                auth_token: token,
                title: title
            },

            success: function(response) {
                Ext.getStore('Feed').load({
                    params: {
                        auth_token: token
                    }
                });
                main.pop();
                console.log('topic created');
            },

            failure: function(response){
                console.log("create topic failure");
            }

        })
    },

    onFeedItemTap: function(list, index, target, record, e) {
        target = Ext.get(e.target);

        //if user email
        if (target && target.dom && target.hasCls('email')) {
            Ext.getStore('FeedUserFeed').load({
                params: {
                    user_id: record.data.user_id
                }
            });

            this.getMain().push(Ext.create('DoWhy.view.feed.showuser.ShowUser').setRecord(record));
        } 
        // If topic title
        else if (target && target.dom && (target.hasCls('title') || target.hasCls('topic-title'))) {
            store = Ext.getStore('FeedTopicArguments');
            store.load({
                params: {
                    topic_id: (target.hasCls('title')) ? record.data.topic_id : record.data.id
                }
            });

            this.getMain().push(Ext.create('DoWhy.view.feed.showtopic.Topic').setRecord(record));

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
            store = Ext.getStore('FeedTopicArguments');
            store.load({
                params: {
                    topic_id: (target.hasCls('title')) ? record.data.topic_id : record.data.id
                }
            });

            this.getMain().push(Ext.create('DoWhy.view.feed.showtopic.Topic').setRecord(record));
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
            Ext.getStore('FeedUserFeed').load({
                params: {
                    user_id: record.data.user_id
                }
            });

            this.getMain().push(Ext.create('DoWhy.view.feed.showuser.ShowUser').setRecord(record));

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
                if (list.xtype == 'feed-show-topic-arguments') {
                    list.getStore().load({
                        params: {
                            topic_id: record.data.topic_id
                        }
                    });
                } else {
                    list.getStore().load({
                        params: {
                            user_id: record.data.user_id,
                            auth_token: token
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

    onShowTopicFormOkButtonTap: function(button, e){
        showTopicFormArg = this.getShowTopicFormArg();
        showTopicFormArg.hide();

        showTopicFormKind = this.getShowTopicFormKind();
        showTopicFormKind.show();

        showTopicFormOkButton = this.getShowTopicFormOkButton();
        showTopicFormOkButton.hide();

        showTopicFormArgueButton = this.getShowTopicFormArgueButton();
        showTopicFormArgueButton.show();

        showTopicFormCancelButton = this.getShowTopicFormCancelButton();
        showTopicFormCancelButton.show();
    },

    onShowTopicFormArgueButtonTap: function(button, e){
        token = Ext.getStore('Application').first().get('token');
        data = button.getData();
        topic_id = data.topic_id ? data.topic_id : data.id;

        showTopicArguments = this.getShowTopicArguments();
        showTopicFormArg = this.getShowTopicFormArg();
        showTopicFormKind = this.getShowTopicFormKind();
        showTopicFormOkButton = this.getShowTopicFormOkButton();
        showTopicFormArgueButton = this.getShowTopicFormArgueButton();
        
        argument = showTopicFormArg.getValue();
        kind = showTopicFormKind.getValue();        

        Ext.Ajax.request({
            // http://localhost:3000/topics/topic_id/arguments.json
            url: 'http://localhost:3000/topics/' + topic_id + '/arguments.json',
            method: 'POST',
            //withCredentials: true,
            //disableCaching: false,
            useDefaultXhrHeader: false,

            params: {
                auth_token: token,
                argument: argument,
                kind: kind
            },

            success: function(response) {
                showTopicArguments.getStore().load({
                    params: {
                        topic_id: topic_id
                    }
                });
                showTopicFormArg.reset();
                showTopicFormKind.hide();
                showTopicFormArg.show();

                showTopicFormArgueButton.hide();
                showTopicFormCancelButton.hide();
                showTopicFormOkButton.show();
            },

            failure: function(response){
                console.log("Insert argument failure")
            }

        })
    },

    onShowTopicFormCancelButtonTap: function(button, e){
        console.log('cancel');
        showTopicFormArg = this.getShowTopicFormArg();
        showTopicFormKind = this.getShowTopicFormKind();
        showTopicFormOkButton = this.getShowTopicFormOkButton();
        showTopicFormArgueButton = this.getShowTopicFormArgueButton();
        showTopicFormCancelButton = this.getShowTopicFormCancelButton();

        showTopicFormArg.reset();
        showTopicFormKind.hide();
        showTopicFormArg.show();

        showTopicFormArgueButton.hide();
        showTopicFormCancelButton.hide();
        showTopicFormOkButton.show();
    },

    onMainPush: function(view, item) {
    /*    var composeButton = this.getComposeButton();

        if (item.xtype == "show-topic") {
            composeButton.setText('Argument');
        }*/
    },

    onMainPop: function(view, item) {
        composeButton = this.getComposeButton();
        if(composeButton.isHidden()){
            composeButton.show();
        }
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