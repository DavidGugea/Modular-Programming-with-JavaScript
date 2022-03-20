const ApplicationInitModule = (
    () => {
        const registeredModules = [];

        return {
            registerModule: function(module) {
                registeredModules.push(module);
            },
            getAppModulesCount: function() {
                return registeredModules.length;
            },
            removeRegisteredModule: function(index) {
                registeredModules.splice(index, 1);
            },
            initializeAllModules: function() {
                for (const module in registeredModules) {
                    registeredModules[module].initialize();
                }
            }
        }
    }
)();


const GlobalApp = (
    () => {
        const registerModule = ApplicationInitModule.registerModule;

        return {
            registerModule: registerModule
        }
    }
)();


const testModule1 = (
    () => {
        const self = {};
        const moduleName = "Module 1";

        self.initialize = function() {
            console.log("testmodule1 has been initialized!");
            console.log(`module name is ${moduleName}`);
        };

        (
            () => {
                GlobalApp.registerModule(self);
            }
        )();

        return {
            initialize: self.initialize,
            getName: function() {
                return moduleName;
            }
        }
    }
)();


const testModule2 = (
    () => {
        const moduleName = "Module 2";

        function initialize() {
            console.log("testmodule2 has been initialized");
        }

        return {
            initialize: initialize
        }
    }
)();

GlobalApp.registerModule(testModule2);

ApplicationInitModule.initializeAllModules();