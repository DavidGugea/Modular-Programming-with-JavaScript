document.addEventListener(
    "DOMContentLoaded",
    () => {
        console.log("2. Inside DOMContentLoaded event.");
    }
);

(
    () => {
        console.log("1. Inside anonymous call stack.")
    }
)();