import React from "react";

import paintings from "./painting.json";
import PaintingList from "./components/PaintingList";

const App = () => {
  return (
    <div>
      <h1>Главный компонент-контейнер приложения</h1>

      <PaintingList items={paintings} />
    </div>
  );
};

export default App;
