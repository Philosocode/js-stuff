var Person = function(firstAndLast) {
  this.getFirstName = function() {
    return firstAndLast.split(' ')[0];
  };

  this.getLastName = function() {
    return firstAndLast.split(' ')[1];
  };

  this.getFullName = function() {
    return firstAndLast;
  };

  this.setFullName = function(fullName) {
    firstAndLast = fullName;
  };

  this.setFirstName = function(firstName) {
    let lastName = firstAndLast.split(' ')[1];

    firstAndLast = firstName + ' ' + lastName;
  };

  this.setLastName = function(lastName) {
    let firstName = firstAndLast.split(' ')[0];
    firstAndLast = firstName + ' ' + lastName;
  };

};

var bob = new Person('Bob Ross');

bob.getFullName();
