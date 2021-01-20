angular.module("meanBooksApp").controller("booksController", booksController);

function booksController(bookDataFactory){
  const vm = this;
  bookDataFactory.getBooks().then(function(response){
    vm.books = response;
  })
}