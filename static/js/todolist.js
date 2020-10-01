import { Rnd } from "react-rnd";

// function toDoList() {
//     return( 
//     <div>
//     <Rnd
//     style={style}
//     default={{
//       x: 0,
//       y: 0,
//       width: 500,
//       height: 200
//     }}
//   >
//     Rnd
//   </Rnd>
//   </div>
// )};

// ReactDOM.render(<toDoList />, document.getElementById("root"));

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

const App = () => (
  <Rnd
    style={style}
    default={{
      x: 0,
      y: 0,
      width: 320,
      height: 200
    }}
  >
    Rnd
  </Rnd>
);
  

ReactDOM.render(<App />, document.getElementById("root"));
