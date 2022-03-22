const namespace = (
    () => {
        // private properties
        let a = 1;
        let b = 2;

        // private methods
        const testMethod = () => {
            console.log(`a = ${a} | b = ${b}`);
        }

        return {
            // privileged methods
            showA: () => {
                console.log(`a = ${a}`);
            },
            showB: () => {
                console.log(`b = ${b}`);
            },
            showAandB: () => {
                testMethod();
            }
        }
    }
)();

namespace.showA();
namespace.showB();
namespace.showAandB();