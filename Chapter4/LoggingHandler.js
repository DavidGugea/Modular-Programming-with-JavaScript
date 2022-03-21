const LoggingHandler = (
    () => {
        // module private variables
        let defaultHelloMsg = "this is just to say Hello to the users!";
        let theInterface = {};

        // privileged method
        theInterface.logError = (errorMsg) => {
            console.error(errorMsg);
        };

        // privileged method
        theInterface.logInfo = (infoMsg) => {
            if(!infoMsg) {
                infoMsg = defaultHelloMsg;
            }

            console.log(infoMsg);
        };

        return theInterface;
    }
)();