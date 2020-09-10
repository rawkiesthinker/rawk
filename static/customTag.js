
    ga('create', 'UA-89414882-2', 'auto', 'myTracker', {
        userId: '12345'
      });
    
    ga('myTracker.set', 'page', '/AuctionBlock');
    ga('myTracker.send','pageView')
    ga('myTracker.send', 'event', 'Auction Block', 'Referal',"Auction", {
        hitCallback: function() {
          console.log("another person ready to put you on the auction block");
        }
      });

//figure out how to handle the reference
// try{
//     ga('create', 'UA-89414882-2', 'auto', 'myTracker', {
//         userId: '12345'
//       });
    
//     ga('myTracker.set', 'page', '/AuctionBlock');
//     ga('myTracker.send','pageView');
//     ga('myTracker.send', 'event', 'Auction Block', 'Referal', {
//         hitCallback: function() {
//           console.log("another person ready to put you on the auction block");
//         }
//       });
// }catch(e){
// console.log(e,"unreferenced")
// }

