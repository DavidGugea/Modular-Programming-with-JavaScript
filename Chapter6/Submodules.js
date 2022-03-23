const Shape = (
    () => {
        let type = "Any 2D and 3D shape";

        getType = () => {
            return type;
        }

        return {
            getType: getType
        };
    }
)();

Shape.Polygon = (
    () => {
        let sides = 6;
        let name = "Polygon";
        let type = "2D";

        getSides = () => {
            return sides;
        }

        getName = () => {
            return name;
        }

        getType = () => {
            return type;
        }

        return {
            getSides: getSides,
            getName: getName,
            getType: getType,
        };
    }
)();