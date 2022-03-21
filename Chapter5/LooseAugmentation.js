let ImagesInc_GlobalData = {};
const ImagesInc_LoggingHandler = {};

ImagesInc_GlobalData = (
    (coreModule) => {
        coreModule.someText = "this is a test for loose module augmentation";

        coreModule.getExtendedModuleMsg = () => {
            ImagesInc_LoggingHandler.logInfo(coreModule.someText);
        }
    }
)(ImagesInc_GlobalData || {});