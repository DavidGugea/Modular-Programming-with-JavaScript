let ModuleA;

ModuleA = (
    (core) => {
        // private property
        let property1 = "test property 1";

        return {
            // privileged method

            logProperty1 : function() {
                core.willLogSomething();
                console.log(property1);
            }
        }
    }
)(ModuleA || {});

ModuleA = (
    (core) => {
        // private property
        let property2 = "test property 2";

        // privileged method
        core.willLogSomething = () => {
            console.log("I will log something to the console");
        }

        // privileged method
        core.logProperty2 = () => {
            core.willLogSomething();
            console.log(property2);
        }

        return core;
    }
)(ModuleA || {});

console.dir(ModuleA);
ModuleA.logProperty1();
ModuleA.logProperty2();