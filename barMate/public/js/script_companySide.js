// Business Logic ------------ Business Logic ------------ Business Logic ------------ Business Logic

function TicketList() {
  this.tickets = [];
};

TicketList.prototype.addTicket = function(ticket) {
  this.tickets.push(ticket);
};

TicketList.prototype.removeTicket = function(ticket) {
  return (this.tickets).splice((this.tickets).indexOf(ticket), 1)[0];
};

TicketList.prototype.readyTicket = function (ticket) {
  var removedTicket = this.removeTicket(ticket);
  return removedTicket;
};

TicketList.prototype.modifyTicket = function (newTicket, oldTicket) {
  //Untested
  var ticketToModify = this.tickets[(this.tickets).indexOf(oldTicket)]
  ticketToModify = newTicket;
};

TicketList.prototype.getTicketNumber = function() {
  return (this.tickets).length;
};

TicketList.prototype.getTicket = function(index) {
  return this.tickets[index];
};

// Private UI Logic ------------ Private UI Logic ------------ Private UI Logic ------------ Private UI Logic

function CompanyPage() {};

CompanyPage.prototype.displayPage = function() {
  $("#companySide").show();
  $("#authenticate").hide();
  addSwitchListener();
};

CompanyPage.prototype.ticketReadyClickListeners = function() {
  $("#ticketList").on("click", "button.readyButton", function() {
    var ticketIndex = parseInt((this.id).slice(5,6));
    ticketManager.readyTicket((ticketManager.tickets).getTicket(ticketIndex));
  })
};

CompanyPage.prototype.ticketRemoveClickListeners = function() {
  $("#ticketList").on("click", "button.removeButton", function() {
    var ticketIndex = parseInt((this.id).slice(6,7));
    ticketManager.removeTicket((ticketManager.tickets).getTicket(ticketIndex));
  })
};

CompanyPage.prototype.authenticate = function() {
  var username = $("#username").val();
  var password = $("#password").val();
  if(username === testUsername && password === testPassword) {
    companyPage.displayPage();
  }
}

// Public UI Logic ------------ Public UI Logic ------------ Public UI Logic ------------ Public UI Logic

function TicketManager() {
  this.tickets = new TicketList();
  this.readyTickets = new TicketList();
};

TicketManager.prototype.addTicket = function(ticket) {
  (this.tickets).addTicket(ticket);
  this.writeTicketList();
};

TicketManager.prototype.removeTicket = function(ticket) {
  (this.tickets).removeTicket(ticket);
  this.writeTicketList();
};

TicketManager.prototype.modifyTicket = function(newTicket, oldTicket) {
  (this.tickets).modifyTicket(newTicket, oldTicket);
  this.writeTicketList();
};

TicketManager.prototype.readyTicket = function(ticket) {
  (this.readyTickets).addTicket((this.tickets).readyTicket(ticket));
  this.writeTicketList();
};

TicketManager.prototype.clearTicketLists = function() {
  $("#ticketList").html("");
  $("#readyList").html("");
};

TicketManager.prototype.writeTicketList = function() {
  this.clearTicketLists();
  for(var i = 0; i < (this.tickets).getTicketNumber(); i++) {
    var ticket = (this.tickets).getTicket(i);
    var ticketDetails = "";
    ticketDetails += "<li class='lineItem'>Order for " + ticket.firstName + " " + ticket.lastName + ": <br><ul>";
    for(var j = 0; j < (ticket.drinks).length; j++) {
      var drink = (ticket.drinks)[j];
      ticketDetails += "<li>Drink: " + drink.drinkName + " Price: $" + drink.drinkPrice + "</li>";
    }
    ticketDetails += "</ul><button type='button' class='readyButton btn  center btn-sm btn-info' id='ready" + i + "Button'>Order Ready</button><button type='button' class='removeButton center btn btn-sm btn-danger' id='remove" + i + "Button'>Remove Order</button></li>"
    $("#ticketList").append(ticketDetails);
  }
  for(var i = 0; i < (this.readyTickets).getTicketNumber(); i++) {
    var readyTicket = (this.readyTickets).getTicket(i);
    var ticketDetails = "";
    ticketDetails += "<li class='lineItem'>Order for " + readyTicket.firstName + " " + readyTicket.lastName + "!<ul>";
    for(var j = 0; j < (readyTicket.drinks).length; j++) {
      var drink = (readyTicket.drinks)[j];
      ticketDetails += "<li>" + drink.drinkName + "</li>";
    }
    ticketDetails += "</ul></li>"
    $("#readyList").append(ticketDetails);
  }
};

var ticketManager = new TicketManager()
var companyPage = new CompanyPage();
var testUsername = "Test";
var testPassword = "password";

$(function() {

  $("#companyPic").click(function(){
    $("#authenticate").show();
    $("#selection").hide();
    $("#versionNum").hide();
    $(".fixed-nav-bar").hide();
  })

  companyPage.ticketReadyClickListeners();
  companyPage.ticketRemoveClickListeners();

  $("#authenticateForm").submit(function(event) {
    event.preventDefault();
    companyPage.authenticate();
  })

});
