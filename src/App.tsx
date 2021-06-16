import React from "react";

import Counter from "./components/Counter";

const App = () => {
    const initialCount = 5;
    return <Counter initialCount={initialCount} />;
};

export default App;
