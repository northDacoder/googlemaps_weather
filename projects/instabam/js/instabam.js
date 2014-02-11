if (Meteor.isClient) {

var feed = new Instafeed({
        get: 'tagged',
        tagName: 'awesome',
        clientId: '16de7c347c604761bcae480576af41e8'
    });
    
    feed.run(); 




  
}

