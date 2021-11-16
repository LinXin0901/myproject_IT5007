const issues = [
  {
    id: 1, name: 'Anna', phone: '84566920', 
    timestamp: '2018-08-15 20:59:00'
  },
  {
    id: 2, name: 'Bob', phone: '23658237', 
    timestamp: '2018-08-15 21:01:45'
  },
  {
    id: 3, name: 'Cindy', phone: '94672587', 
    timestamp: '2018-08-15 21:31:32'
  }
];

class DisplayFreeSlots extends React.Component {
  render() {
    return (
      <div>There are 22 free slots in the waitlist.</div>
    );
  }
}

class IssueRow extends React.Component {
  render() {
    const issue = this.props.issue;
    return (
      <tr>
        <td>{issue.id}</td>
        <td>{issue.name}</td>
        <td>{issue.phone}</td>
        <td>{issue.timestamp}</td>
      </tr>
    );
  }
}

class DisplayCustomer extends React.Component {
  render() {
    const issueRows = issues.map(issue =>
      <IssueRow key={issue.id} issue={issue} />
    );

    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {issueRows}
        </tbody>
      </table>
    );
  }
}

class AddCustomer extends React.Component {
  render() {
    return (
      <div>Add customer</div>
    );
  }
}

class DeleteCustomer extends React.Component {
  render() {
    return (
      <div>Delete customer</div>
    );
  }
}

class DisplayHomepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hotel California Waitlist System</h1>
        <DisplayFreeSlots />
        <hr />
        <DisplayCustomer />
        <hr />
        <AddCustomer />
        <DeleteCustomer />
      </React.Fragment>
    );
  }
}

const element = <DisplayHomepage />;

ReactDOM.render(element, document.getElementById('contents'));
