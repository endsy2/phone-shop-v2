import React from "react";

export const lazyLoad = (importFunc) => {
    return React.lazy(() =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(importFunc()); // Dynamically import the module
            }, 1000); // Delay the import by 2 seconds
        })
    );
};
