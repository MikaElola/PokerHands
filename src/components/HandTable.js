import React, { Component } from 'react';

class HandTable extends Component {
    constructor(props) {
        super(props);
    }

    render(){
       // console.log("hand1  " + this.props.hand1)
        return (
            <div className="Hands">
                <table>
                    <tbody>
                    <tr>
                        <th>
                            Hand 1
                        </th>
                    </tr>
                    {this.props.hand1.length !== 0 &&
                        this.props.hand1.map((card, index) => (
                        <tr key={index}>
                        <td>{card.number}</td>
                        <td>{card.suit}</td>
                        <td>{card.color}</td>
                        </tr>
                            ))  }
                       </tbody>
                </table>
                <table>
                <tbody>
                    <tr>
                        <th>
                            Hand 2
                        </th>   
                    </tr>
                    {this.props.hand2.length !== 0 &&
                        this.props.hand2.map((card, index) => (
                        <tr key={index}>
                        <td>{card.number}</td>
                        <td>{card.suit}</td>
                        <td>{card.color}</td>
                        </tr>
                            ))  }
                        </tbody>
                    </table>    
                    <table>
                        <tbody>
                    <tr>
                        <th>
                            Hand 3
                        </th>
                    </tr>
                    {this.props.hand3.length !== 0 &&
                        this.props.hand3.map((card, index) => (
                        <tr key={index}>
                        <td>{card.number}</td>
                        <td>{card.suit}</td>
                        <td>{card.color}</td>
                        </tr>
                            ))  }
                    </tbody>
                </table>
            </div>
        );
    }


}

export default HandTable;