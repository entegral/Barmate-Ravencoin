function Drink (name, price) {
  this.drinkName = name,
  this.drinkPrice = price
}

function Order () {
  this.firstName = "",
  this.lastName = "",
  this.dateOfBirth = "",
  this.phoneNumber = "",
  this.drinks = [],
  this.totalCost = 0
}

Order.prototype.addDrink = function (drink) {
  this.totalCost += drink.drinkPrice;
  this.drinks.push(drink);
  this.updateTab();
}

Order.prototype.removeDrink = function(name) {
  for (var i =0; i < this.drinks.length; i++) {
    if (this.drinks[i]) {
      if((this.drinks[i].drinkName).split(" ")[0] === name) {
        this.totalCost -= this.drinks[i].drinkPrice;
        (this.drinks).splice((this.drinks).indexOf(this.drinks[i]), 1);
        this.updateTab();
        return true;
      }
    }
  };
  return false;
}

Order.prototype.clone = function (){
  var newOrder = new Order();
  newOrder.firstName = this.firstName;
  newOrder.lastName = this.lastName;
  newOrder.dateOfBirth = this.dateOfBirth;
  newOrder.phoneNumber = this.phoneNumber;
  newOrder.drinks = newOrder.drinks.concat(this.drinks);
  newOrder.totalCost = this.totalCost;
  return newOrder;
}

Order.prototype.clearOrder = function() {
  this.firstName = "",
  this.lastName = "",
  this.dateOfBirth = "",
  this.phoneNumber = "",
  this.drinks = [],
  this.totalCost = 0
  this.clearCurrentTab();
}


//  UI Logic ------------  UI Logic ------------  UI Logic ------------  UI Logic

function MenuItem(array) {
  this.imagePath = array[0],
  this.cardTitle = array[1],
  this.cardSubtitle = array[2],
  this.cardText = array[3],
  this.cardName = array[4],
  this.cardPrice = array[5],
  this.dataValue2 = array[6],
  this.labelFor = array[7]
}

function Menu() {
  this.list = [];
}

Menu.prototype.updateList = function (menuItem){
  this.list.push(menuItem);
}

var chrisDrinkList = [
  ["images/drink/pbr.jpeg","PBR","Pabst Brewing Company<br>4.74% ABV<br>$2.00","Pabst Blue Ribbon is brewed in the finest traditions of an American Premium Lager dating back to 1844. Brewed with a combination of 2 & 6-row malted barley, select cereal grains and American and European hops, Pabst Blue Ribbon is fermented with a proprietary lager yeast.", "beers","2.00","PBR","PBR"],
  ["images/drink/tecatejpg.jpg","Tecate","FEMSA - Cuauhtémoc-Moctezuma (Heineken) <br>4.60% ABV<br>$2.00","A Lager beer with a delicious aroma of malt and hops and a delicate balance in its subtle refreshing taste.","beers","2.00","Tecate","Tecate"],
  ["images/drink/HUB.jpeg","Hopworks Urban Brewing Lager","Hopworks Urban Brewing<br>5.10% ABV<br>$5.00","Grainy, golden, 100% organin, formerly draft only brew spiced with Zeus hops.","beers","5.00","Hopworks Urban Brewing","Hopworks-Urban-Brewing"],
  ["images/drink/breakside-pils.jpg","Pilsner by Breakside Brewing","Breakside Brewing<br>5.30% ABV<br>$5.00","Easy pilsner with biscuit-like maltiness and a light, tangy, citrusy kick.","beers","5.00","Breakside Pilsner", "Breakside-Pilsner"],
  ["images/drink/ninkasiPils.jpg","Ninkasi Pilsner","Ninkasi Brewing Co <br>5.10% ABV<br>$4.50","Malt forward, German-style pilsner with spicy, crackling hop notes.","beers","4.50","Ninkasi Pilsner","Ninkasi-Pilsner"],
  ["images/drink/riverale.jpeg","River Ale","Deschutes Brewery<br>4.0% ABV<br>$4.00","Sociably low-alcohol with ample Cascade and Crystal hops kick this light golden ale up a notch.","beers","4.00","River Ale","River-Ale"],
  ["images/drink/vaporizer.jpeg","Vaporizer","Double Mountain Brewery<br>6.0% ABV<br>$5.00","Hazy-gold with a sweet, grainy start and a dry, lemony finish.","beers","5.00","Vaporizer","vaporizer"],
  ["images/drink/rpm.jpg","RPM IPA","Boneyard Brewing Co <br>7.00% ABV<br>$5.00","Massive hop flavors. Juicy, citrusy taste, faint cereal sweetness, and clean, crisp finish.","beers","5.00","RPM","RPM"],
  ["images/drink/bluedot.jpeg","Blue Dot Double IPA","Hair of the Dog Brewing Co<br>6.0% ABV<br>$5.00","Brawny and resinously hoppy without the acrid finish that can mar lesser interpretations","beers","5.00","Blue Dot","blue-dot"],
  ["images/drink/longBrewing.jpg","IPA","Long Brewery<br>6.20% ABV<br>$5.00","Paul Long’s one-man wine country operation is proof that big brews can come from small places. His American-style IPA, brewed and dry-hopped with six hop varieties, bursts with bright, floral, tropical notes.","beers","5.00","IPA","IPA"],
  ["images/drink/chainbreaker.jpg","Chainbreaker White IPA","Deschutes Brewery <br>5.60% ABV<br>$4.00","Named for a legendary mountain bike race, this delicious cloudy-gold ale is a lovely hybrid of Belgian wit—orange peel and coriander-spiced—and tangy, Northwest-style IPA.","beers","4.00","Chainbreaker","chainbreaker"],
  ["images/drink/wholeInTheHead.jpg","Whole in the Head","Hair of the Dog Brewing Co<br>6.0% ABV<br>$5.00","Brawny and resinously hoppy without the acrid finish that can mar lesser interpretations","beers","5.00","Whole in the head","whole"],
  ["images/drink/ashlandAmber.jpeg","Ashland Amber","Caldera Brewing Co<br>5.40% ABV<br>$3.75","A bready, slightly honeyish brew with a mellow, herbaceous tang, this isn’t a complex beer—but it is super-smooth and satisfying on cool Oregon summer nights.","beers","3.75","Ashland","Ashland"],
  ["images/drink/killdevil.jpeg","Kill Devil Brown Ale","Widmer Brothers Brewing <br>9.50% ABV<br>$6.75","Caribbean mainstays like blackstrap molasses and palm sugar amp up this approximately English-style brown aged in Puerto Rican rum barrels and spiced with fruity Calypso hops.","beers","6.75","Kill Devil","kill-devil"],
  ["images/drink/brothes.jpeg","Brother Thelonious","North Coast Brewing<br>9.40% ABV<br>$9.00","The beer is being released in conjunction with the Thelonious Monk Institute of Jazz, and the brewery will make a contribution to the Institute for every case sold to support jazz education.","beers","9.00","Brother Thelonious","brother-Thelonious"],
  ["images/drink/peach.jpeg","Peche 'n Brett","Logsdon Organic Farmhouse<br>10% ABV<br>$9.50","To his world-class oak-aged Seizoen Bretta (a funky, grassy, oaky saison beer) brewer Dave Logsdon adds a pound and a half of organic peaches per gallon, resulting in lush, ripe fruit flavors with an impressive kick.","beers","9.50","Peche","Peche"],
  ["images/drink/cascade.jpeg","Cascade Apricot","Cascade Barrel House <br>8.50% ABV<br>$6.75","Bright and hazy orange with a zingy, lemony tartness up front, this Belgian-style ale flows with waves of delicious, ripe apricot flavor.","beers","6.75","Apricot Sour","apricot-sour"],
  ["images/drink/sweetheat.JPG","Sweet Heat","Burnside Brewing Co<br>4.90% ABV<br>$5.00","Lesser chile beers crash the palate party and leave. But Burnside’s is brewed with apricot purée and Scotch bonnet peppers, which supply a lingering, welcome heat.","beers","4.90","Sweet Heat","sweet-heat"],

]

Menu.prototype.generateMenu =  function () {
  var output = '<div class="row">';
  var numOfColumns = 0;
  for (var i = 0; i < this.list.length; i++){
    if (numOfColumns > 2){
      numOfColumns = 0;
      output += '</div><div class="row">'
    }
    output += '<div class="col-lg-4"><div class="card drinkCard" style="width: 18rem;"><img class="card-img-top" src="';
    output += this.list[i].imagePath + '" alt="Card image cap"><div class="card-body"><div class="form-check"><h5 class="card-title">';
    output += this.list[i].cardTitle + '</h5><h6 class="card-subtitle mb-2 text-muted">';
    output += this.list[i].cardSubtitle + '</h6><p class="card-text">';
    output += this.list[i].cardText + '</p><input class="form-check-input" type="checkbox" name="';
    output += this.list[i].cardName + '" value="';
    output += this.list[i].cardPrice + '" data-value2="';
    output += this.list[i].dataValue2 + '"><label class="form-check-label" for="';
    output += this.list[i].labelFor + '">Click to add to order!</label></div></div></div></div>';
    numOfColumns++;
  }
  output += '</div>';
  return output;
}


Order.prototype.updateInfo = function () {
  this.firstName = $("#first-name").val();
  this.lastName = $("#last-name").val();
  this.dateOfBirth= $("#date-of-birth").val();
  this.phoneNumber = $("#phone-number").val();
}

function interpretDrinks() {
  var input = $('input[name="beers"]:checked');
  customerOrder.drinks = [];
  customerOrder.totalCost = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      var newDrink = new Drink(input[i].dataset.value2, parseFloat(input[i].value));
      customerOrder.addDrink(newDrink);
    }
  }
}

function addSwitchListener() {
  $(".video-wrapper").on("click", function() {
    $("#customerSide").toggle();
    $("#companySide").toggle();
    $("#startOrder").toggle();
    $(".fixed-nav-bar").toggle();
    $("#sidenav").hide();


  });
};

function addTabRemoveListener () {
  $("#currentTab").on("click", ".removeDrink", function() {
    var drinkName = (this.classList)[0];
    customerOrder.removeDrink(drinkName);
  })
}



function updateCustomerInfoOnKeypress() {
  $("#userInfo").find("input").keyup(function(){
    customerOrder.firstName = $("#first-name").val();
    customerOrder.lastName = $("#last-name").val();
    customerOrder.phoneNumber = $("#phone-number").val();
    customerOrder.dateOfBirth = $("#date-of-birth").val();
  })
}

Order.prototype.clearCurrentTab = function () {
  $("#currentTab").html("");
};

Order.prototype.updateTab = function () {
  var output = "<ul>"
  this.drinks.forEach(function(drink){
    output += "<li class='tabLineItem'>" + drink.drinkName
  })
  output += "</ul>"
  output += "<p>Your total is: $" + this.totalCost + "</p>";
  $("#currentTab").html(output);
};

function resetBoxes() {
  $(".form-check-input").prop("checked", false);
  var expandedCards = document.getElementsByClassName("overlayColor");
  var paragraph = $(expandedCards).find("p");
  paragraph.slideUp();
  $(expandedCards).removeClass("overlayColor");
};

function resetNameField() {
  $("#first-name").val("");
  $("#last-name").val("");
  $("#phone-number").val("");
  $("#date-of-birth").val("");
};

function importDrinks(array){
  for (var i = 0; i < array.length; i++){
    menu.updateList(new MenuItem(array[i]))
  }
}

var customerOrder = new Order();
var menu = new Menu();


$(document).ready(function() {

  importDrinks(chrisDrinkList);

  var htmlOutput = menu.generateMenu()
  $("#form1").html(htmlOutput)

  $("#customerPic").click(function(){
    $("#customerSide").show();
    $("#selection").hide();
    $("#versionNum").hide();
    $("#startOrder").show();
    $("#sidenav").hide();
    $(".fixed-nav-bar").show();
    addSwitchListener();
  });

  updateCustomerInfoOnKeypress();
  addTabRemoveListener();


// Add Ready to Order Button
  $("#startOrder").click(function(){
    if (customerOrder.firstName && customerOrder.lastName){
      $("#tab").show();
      $("#orderButtons").show();
      $("#startOrder").hide();
      $("#sidenav").show();

    }else {
      $("#userInfo").toggle();
      $("#orderButtons").show();
      $("#startOrder").hide();
      $("#sidenav").show();

    }
  });


  $(".close").click(function(){
    $("#userInfo").hide();
    $("#orderButtons").hide();
    $("#tab").hide();
    $("#startOrder").show();
    $("#sidenav").hide();

  })

  $("#submitOrderButton").click(function() {
    customerOrder.updateInfo();
    ticketManager.addTicket(customerOrder.clone());
    customerOrder.clearOrder();
    resetNameField();
    resetBoxes();
    $("#tab").hide();
    $("#orderButtons").hide();
    $("#startOrder").show
    $("#userInfo").hide();
  });


  $(".drinkCard").on("click", function(e){
    e.stopPropagation();
    var checkbox = $(this).find('input[type="checkbox"]');
    checkbox.prop('checked', !checkbox.prop('checked'));
    $(this).toggleClass("overlayColor");
    $(this).find("p").slideToggle();
    $("#userInfo").show();
    $("#tab").show();
    $("#orderButtons").show();
    $("#startOrder").show();
    $("#sidenav").show();

    interpretDrinks();
    customerOrder.updateTab();
  });

});
