import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import "./style/style.scss";
import MarvelServices from "./services/MarvelService";

const marvelService = new MarvelServices();
marvelService.getCharacter(3).then(res => {console.log(res)})
// marvelService.getAllCharacters().then(res =>  res.data.results.forEach(item => {
//     console.log(item.name)
// }))

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
