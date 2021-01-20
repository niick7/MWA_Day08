angular.module("meanBooksApp", ["ngRoute"]).config(config);

function config($routeProvider){
  $routeProvider
    .when("/books", {
      templateUrl: "angular-app/books/books.html",
      controller: "booksController",
      controllerAs: "vm"
    })
    .when("/books/:bookId", {
      templateUrl: "angular-app/book/book.html",
      controller: "bookController",
      controllerAs: "vm"
    })
    .otherwise({
      redirectTo: "/"
    })
}