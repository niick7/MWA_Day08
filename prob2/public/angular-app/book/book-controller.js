angular.module("meanBooksApp").controller("bookController", bookController);

function bookController(bookDataFactory, $routeParams) {
  const vm = this;
  const bookId = $routeParams.bookId;
  bookDataFactory.getBook(bookId).then(function(response){
    vm.book = response;
  })
}