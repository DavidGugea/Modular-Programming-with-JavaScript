const mySingletonObj = (
    () => {
        // private variables
        let name = "Susan";
        let title = "Software Developer";

        // returning a Singleton
        return {
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