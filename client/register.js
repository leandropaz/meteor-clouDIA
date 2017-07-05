if(Meteor.isClient){
  Template.register.events({
    'submit form': function(event, template){
      event.preventDefault();
      var emailVar = template.find('#email').value;
      var passwordVar = template.find('#password').value;
      Accounts.createUser({     //função fornecida palo pacote accounts-password
        email: emailVar,
        password: passwordVar
      });
    }
  });
  Template.login.events({
    'submit form': function(event, template){
      event.preventDefault();
      var emailVar = template.find('#login-email').value;
      var passwordVar = template.find('#login-password').value;
      Meteor.loginWithPassword(emailVar, passwordVar);
    }
  });
  Template.dashboard.events({
    'click .logout': function(event){
      event.preventDefault();    //evita o default action. Clique no link só fará oq for explicitamente programado
      Meteor.logout();        //função fornecida pelo pacote accounts-password
    }
  });
}
