import React, { Component, Fragment } from 'react';
import { db } from '../firebase/index';


class Todos extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        db.collection('todos').get().then((snapShots) => {
            this.setState({
                items: snapShots.docs.map(doc => {
                    return { id: doc.id, data: doc.data() }
                })
            })
        })
    }
    render() {
        const { items } = this.state;
        return (
            <Fragment>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items && items != undefined ? items.map((item, key) => (
                                <tr key={key}>
                                    <td>{item.data.item}</td>
                                    <button>editar</button>
                                    <button>eliminar</button>
                                </tr>

                            )) : null}
                        </tbody>
                    </table>
                </div>
            </Fragment>
        );

    }
}

export default Todos;