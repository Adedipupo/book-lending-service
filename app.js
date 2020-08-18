const bookService = (function () {

    var BookInstance;

    function create() {
        function Book(id,name,author,year){
            this.id = id,
            this.name = name,
            this.author = author,
            this.year = year
        }

        function bookStore() {
          console.log('Book is available')
        }

        return {
            Book,
            bookStore,
        };
    }

    return {
        getInstance: function () {
            if (!BookInstance) {
                BookInstance = create();
            }
            return BookInstance;
        }
    };

    function Singleton() {
        if (!BookInstance) {
            BookInstance = intialize();
        }
    };

})();

const bookOne  = bookService.getInstance();