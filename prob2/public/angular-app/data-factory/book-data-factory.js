angular.module("meanBooksApp").factory("bookDataFactory", bookDataFactory);

function bookDataFactory($http){
  return {
    getBooks: getBooks,
    getBook: getBook
  }

  function getBooks(){
    return $http.get("/api/books").then(complete).catch(failed);
  }
  function getBook(id){
    return $http.get("/api/books/" + id).then(complete).catch(failed);
  }
  function complete(response){
    return response.data;
  }
  function failed(err){
    return err.statusText;
  }
}