module.exports = function (app){


    var Item = require('../../mongo/models/item');

    var newItem = Item({
        name: 'item',
        purchased: true
    });

// save the user
    /* newItem.save(function(err) {
         if (err) throw err;

         console.log('Item created!');
     });*/

    /* Item.find({}, function(err, items) {
         if (err) throw err;

         // object of all the users
         console.log("All items: " + items);
     });*/

    app.route('/api/items')
        .get(function(req,res){

            Item.find({}).exec(function(err, items) {
                if (err) throw err;

                res.send(items);
            });
        })
        .post(function(req,res){

            var item = Item(req.body);
            item.save(function(err) {
                if (err) throw err;

                console.log('Item created!');
            });
        }).delete(function(req,res){

        var item = Item(req.body);
        Item.findByIdAndRemove(item._id, function(err) {
            if (err) throw err;

            console.log('Item deleted!');
        });
    }).put(function(req,res){

        var item = Item(req.body);
        Item.findByIdAndUpdate(item._id, item, function(err) {
            if (err) throw err;

            console.log('Item updated!');
        });
    })
}