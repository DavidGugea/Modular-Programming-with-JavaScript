const Polygon_Module = (
    () => {
        let sides = 6;
        let name = "Polygon";
        let type = "2D";

        getSides = () => {
            return sides;
        };

        getName = () => {
            return name;
        };

        getType = () => {
            return type;
        };

        return {
            getSides: getSides,
            getName: getName,
            getType: getType
        };
    }
)();

const Rectangle_Module = (
    () => {
        const Rectangle = {};
        let sides = 4;
        let name = "Rectangle";
        let color = "blue";

        Object.setPrototypeOf(Rectangle, Polygon_Module);

        Rectangle.getName = () => {
            return name;
        };

        Rectangle.getSides = () => {
            return sides;
        };

        Rectangle.getColor = () => {
            return color;
        };

        return {
            getName: Rectangle.getName,
            getSides: Rectangle.getSides,
            getType: Rectangle.getType
        };
    }
)();