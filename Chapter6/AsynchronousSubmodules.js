let Polygon_Module;

let Shape = (
    (mainModule, subModule) => {
        const Polygon = mainModule.Polygon = mainModule.Polygon || subModule;
       
        Polygon.description = (
            () => "submodule has been added to the shape module"
        );

        return mainModule;
    }
)(Shape || {}, Polygon_Module || {});