const ImagesInc_GlobalData = (
    (coreModule) => {
        if(!coreModule) {
            ImagesInc_LoggingHandler.logError("coreModule was not found to be augmented !");
            return false;
        }

        coreModule.someText = "this is a test for overriding module properties with TIGHT augmentation";
        coreModule.getExtendedModuleMsg = () => {
            ImagesInc_LoggingHandler.logInfo(coreModule.someText);
        }

        return coreModule;
    }
)(ImagesInc_GlobalData);