import React, { Component } from 'react'

class App extends Component {
  
  render(){
    return(
      <div>
        <h1>Hi There !</h1>
      </div>
    )
  }
}

export default App



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