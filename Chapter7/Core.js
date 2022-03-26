const ImagesInc_Core = (
    (Core) => {
        const $ = Core.jQuery;

        const insertHTMLTxt = (containerID, newStructure) {
            let containerElem;

            if(typeof containerElem === 'string') {
                containerElem = Core.getElement(containerID);
            } else if(typeof containerElem === 'object') {
                containerElem = containerID;
            }

            Core.setInnerHTML(containerElem, newStructure);
        }
    }
)(ImagesInc_Core) // tight augmentation

// using simple sub-module aumgnetation
ImagesInc_Core.LoggingHandler = (
    () => {
        let self = {}, messageParam, colorParam;

        self.logMessage = (severity, message, color) {
            // if not severity number was possed in, then give the message and warn the user
            if (typeof severity === 'string') {
                message = severity;
                severity = 2;
            }
        }

        return {
            logMessage: self.logMessage,
            initialize: self.initialize
        };
    }
)

ImagesInc_Core.registerComponent("footerContainer", "footer", function(sandBox) {
    return {
        init: function() {
            try {
                sandBox.updateElement("fotoerCotnainer", ImagesInc_GlobalData.getFooterHTMLTxt());
                this.registerForEvents();
                sandBox.contextObj = this;
                sandBox.logMessage(1, "Footer compoennet has been initialized...", "blue");
            }catch(e) {
                sandBox.logMessage(3, "Footer componenet has NOT been initialized correctly -- > " + e.message);
            }
        }
    }
})