import {polyfills} from "./common/utils/polyfill"; polyfills();
import {GameContext} from "./model/GameContext";
import {Game} from "./Game";
import {Messages} from "./common/lng/Messages";
import {Level} from "./model/Level";


const gameContext = new GameContext([
    new Level("Построить сопряжнеие двух линий",
        `<h2>Сопряжение двух пересекающихся прямых</h2>
    <ol>
        <li>Для нахождения центра сопряжения проводят вспомогательные прямые, параллельные данным на расстоянии равном радиусу R. Точка пересечения этих прямых т.О и будет центом дуги сопряжения (рис. 4).</li>
        <li>Перпендикуляры, опущенные из центра дуги сопряжения т.О на данные прямые, определяют точки касания К и N.</li>
        <li>Из точки О, как центра, описывают дугу заданного радиуса R.</li>
    </ol>
`, "./build/Untitled.png"),
    new Level(`Сделай сопряжение двух окружностей с верхенй внешней стороны. `,
`<h2>Внешнее касание</h2>\n
        <ol>
          <li>Для определения центра сопряжения О проводят вспомогательные дуги: из центра О1 окружности радиусом R + R1  и из центра О2 окружности радиуса R + R2. Точка О пересечения этих дуг является центом сопряжения.</li>
          <li>Соединяя центры О и О1, а так же О и О2 , определяют точки сопряжения (касания) К1  и  К2.</li>
          <li>Из центра О радиусом R проводят дугу сопряжения между точками  К1  и К2</li>
        </ol>`, "./build/sopryagenie.png"),
    new Level("Task", "Level", ""),
    new Level("Task", "Level", ""),
    new Level("Task", "Level", ""),
    new Level("Task", "Level", ""),
    new Level("Task", "Level", ""),
]);
const messages = new Messages();
const game = new Game(gameContext, messages);
game.start();