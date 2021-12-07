import React from 'react';
import Header from "./Header/Header";

class App extends React.Component<any, any> {

    render() {
        return (
            <div>
                <Header/>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
export default App;
