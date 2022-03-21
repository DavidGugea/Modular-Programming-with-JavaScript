const PageUpdater = (
    () => {
        // module private function
        const insertHTMLTxt = function(containerID, newStructure) {
            const theContainer = document.getElementById(containerID);
            theContainer.innerHTML = newStructure;
        };

        // module private function
        const applyElementCSS = function(elementID, className) {
            const theElement = document.getElementById(elementID);
            theElement.className = className;
        }

        return {
            // privileged method
            updateElement: function(elementID, htmlTxt) {
                insertHTMLTxt(elementID, htmlTxt);
            },

            // privileged method
            updateElementClass: function(elemID, className) {
                if(!className) {
                    console.error("No class name has been provided, exiting module!");
                }

                applyElementCSS(elemID, className);
            }
        }
    }
)();