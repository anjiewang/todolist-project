import { Rnd } from "react-rnd";

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











// function Todolist() {
//     return( 
//       <div>
//         <h1>To Do List</h1>

//         <form action="/action_page.php">
//           <label for="w3review">Review of W3Schools:</label>
//           <textarea id="w3review" name="w3review" rows="4" cols="50">
//         At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
//           </textarea>
//           <br></br>
//           <input type="submit" value="Submit"></input>
//         </form>
        
      
//        <p>Click the "Submit" button and the form-data will be sent to a page on the 
//       server called "action_page.php".</p>
//       </div>
// )};

// ReactDOM.render(<Todolist />, document.getElementById("root"));


  
