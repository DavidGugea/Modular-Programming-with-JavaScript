const mySingletonObj = (
    () => {
        // private variables
        let name = "Susan";
        let title = "Software Developer";

        // returning a Singleton
        return {
            name: 'Tom',

            // privileged method
            getName: function() {
                return name;
            },
            // privileged method
            getTitle: function() {
                return title;
            }
        }
    }
)();


console.log(mySingletonObj.name);
console.log(mySingletonObj.getName());