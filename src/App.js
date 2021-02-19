import React from "react";
import Panel from "./components/Panel";
import Logo from "./components/Logo";
import paintings from "./painting.json";
import PaintingList from "./components/PaintingList";

const App = () => {
  return (
    <div>
      <Panel title="Свежие новости">
        <p>text</p>
      </Panel>
      <Logo text="Главный компонент-контейнер приложения" />

      <Panel>
        <p>text</p>

        <a href="">Читать дальше...</a>
      </Panel>

      <PaintingList paintings={paintings} />
    </div>
  );
};

export default App;
