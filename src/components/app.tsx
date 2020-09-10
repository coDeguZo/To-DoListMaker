import React from 'react'
import { connect } from 'react-redux'
import { ToDo, fetchTodos } from '../redux/actions/actions'
import { StoreState } from '../redux/reducers/reducers'

interface AppProps {
  todos: ToDo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {

  onButtonClick = (): void => {
    this.props.fetchTodos()
  }

  renderList(): JSX.Element[]{
    return this.props.todos.map((todo: ToDo) => {
        return (
          <div key={todo.id}>{todo.title}</div>
        ) 
      }
    )
  }

  render(){
    console.log(this.props.todos)
    return(
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    )
  }
}

  
const mapStateToProps = (state: StoreState): { todos: ToDo[]} => {
  return { todos: state.todos }
}

export const App = connect(
  mapStateToProps, { fetchTodos }
)(_App)




// interface AppProps {
//   // Question Mark means optional property!
//   color?: string
// }

// interface AppState {
//   counter: number;
//   color: string;
// }

// class App extends React.Component<AppProps, AppState> {
//   // state = {
//   //   counter: 0
//   // }
//   constructor(props: AppProps){
//     super(props)
//     this.state ={
//       counter: 0,
//       color: "pink"
//     }
//   }

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 })
//   }

//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 })
//   }

//   render(){
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//         <br />
//         {this.state.counter}
//       </div>
//     )
//   }
// }

// export default App



// interface AppProps {
//   color?: string
// }
// Return type annotation for JSX.Element
// const Bop = (props: AppProps): JSX.Element => {
//   return (
//     <div>
//       {props.color}
//     </div>
//   )
// }