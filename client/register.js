if(Meteor.isClient){
  Template.register.events({
    'submit form': function(event, template){
      event.preventDefault();
    //  var emailVar = template.find('#email').value;
      var emailVar = $('[name=email]').val();
      var passwordVar = $('[name=password]').val();
      Accounts.createUser({     //função fornecida palo pacote accounts-password
        email: emailVar,
        password: passwordVar
      });
      Router.go('home');
    }
  });

  Template.dashboard.events({
    'click .logout': function(event){
      event.preventDefault();    //evita o default action. Clique no link só fará oq for explicitamente programado
      Meteor.logout();        //função fornecida pelo pacote accounts-password
    }
  });
}

Router.route('/register');
