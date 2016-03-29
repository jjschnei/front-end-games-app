var Games = function(){
  this.container = $(".page-container");
}

Games.prototype.listAll = function(){
  var gamesObject = this;

  $.ajax({
    url: "http://localhost:3000/games"
  }).done(function(response) {
    gamesObject.container.empty();

    for(var i = 0; i < response.length; i++) {
      var $game = $('<div class="game">')
      $game.append('<a href="/games/' + response[i].id + '">' + response[i].name + '</a>');
      gamesObject.container.append($game);
      }
  });
}

Games.prototype.bindListeners = function(){
  this.bindGameLinks();
  this.bindBack();
}

Games.prototype.bindBack = function(){
  var gamesObject = this;
  $(document).on("click", ".back", function(event){
    event.preventDefault();

    gamesObject.listAll();
  })
}

Games.prototype.bindGameLinks = function(){
  var gamesObject = this;
  $(document).on("click", "div.game a", function(event){
    event.preventDefault();
    $.ajax({ url: $(this).attr("href") }).done(function(response){
      gamesObject.container.empty();
      console.log(response);
      gamesObject.container.append(response.name);
      gamesObject.container.append('<a href="" class="back">Go Back</a>');

    })
  })
}

var games = new Games;
games.listAll();
games.bindListeners();








