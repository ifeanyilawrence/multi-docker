import React from 'react';
import axios from 'axios';

class Fib extends React.Component {
    state = {
        seenIndexes: [],
        values: {},
        index: ''
    };

    componentDidMount() {
        this.fetchValues();
        this.fetchIndexes();
    };

    async fetchValues() {
        const values = await axios.get('/api/values/current');
        this.setState({ values: values.data });
    };

    async fetchIndexes() {
        const seenIndexes = await axios.get('/api/values/all');
        this.setState({ seenIndexes: seenIndexes.data });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('/api/values', {
            index: this.state.index
        });

        this.setState({ index: '' });
    };

    renderSeenIndexes() {
        return this.state.seenIndexes.map(({ number }) => number).join(', ');
    };

    renderValues() {
        const entries = [];
        for (let key in this.state.values) {
            entries.push(
                <div>
                    For index {key}, I calculated {this.state.values[key]}
                </div>
            );
        }

        return entries;
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <label htmlFor="index">Enter your index</label>
                    <input
                        type="text"
                        value={this.state.index}
                        onChange={e => this.setState({ index: e.target.value })}
                    />
                    <button>Submit</button>

                    <h3>Indexes I have seen</h3>
                    {this.renderSeenIndexes()}

                    <h3>Calculated Values</h3>
                    {this.renderValues()}
                </form>
            </>
        )
    }
}

export default Fib;
