import React from 'react';
import GraphiQL from 'graphiql';
import axios from 'axios';

export default class MiniGraphiQl extends React.Component {
  constructor(props) {
    super();

    this.state = {
      data: '',
      query: props.query
    }

    this.runQuery = this.runQuery.bind(this);
    this.onEditQuery = this.onEditQuery.bind(this);
  }

  componentDidMount() {
    this.runQuery();
  }

  onEditQuery(query) {
    this.setState({
      query
    })
  }

  runQuery() {
    const query = this.state.query;

    if (query != '') {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/graphql',
        headers: { 'Content-Type': 'application/json' },
        data: {
          query: this.state.query
        }
      }).then((({data}) => {
        this.setState({
          data: JSON.stringify(data, null, 2)
        })
      }));
    }
  }

  render() {
    return (
      <div className="miniQl">
        {
          this.props.sendBtn ? <div className="send-btn"><button onClick={this.runQuery}>Query</button></div> : null
        }
        <div onFocus={this.props.onFocus} className="editor">
          <GraphiQL.QueryEditor value={this.state.query} readOnly={this.props.readOnly} schema={this.props.schema} onEdit={this.onEditQuery} />
        </div>
        <div className="display">
          <GraphiQL.ResultViewer value={this.state.data} />
        </div>
      </div>
    );
  }
}
