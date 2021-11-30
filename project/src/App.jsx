const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

class DisplayFreeSlots extends React.Component {
  render() {
    const number = 25 - this.props.freeSlotNum;

    return (
      <div id="freeslots">{number}</div>
    );
  }
}

function IssueRow(props) {
  const issue = props.issue;
  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.name}</td>
      <td>{issue.phoneNum}</td>
      <td>{issue.created.toLocaleTimeString()}</td>
      <td>{issue.password}</td>
      <td>{issue.gender}</td>
      <td>{issue.birth}</td>
    </tr>
  );
}

function IssueTable(props) {
  const issueRows = props.issues.map(issue =>
    <IssueRow key={issue.id} issue={issue} />
  );

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Serial Number</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Time Stamp</th>
          <th>Password</th>
          <th>Gender</th>
          <th>Birthday</th>
        </tr>
      </thead>
      <tbody>
        {issueRows}
      </tbody>
    </table>
  );
}

class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.issueAdd;
    const issue = {
      name: form.name.value, phoneNum: form.phoneNum.value, password: form.password.value, gender: form.gender.value, birth: form.birth.value
    }
    this.props.createIssue(issue);
    form.name.value = ""; form.phoneNum.value = ""; form.password.value = ""; form.gender.value = ""; form.birth.value = "";
  }

  render() {
    return (
      <form name="issueAdd" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="phoneNum" placeholder="Phone Number" />
        <input type="text" name="password" placeholder="Password" />
        <input type="text" name="gender" placeholder="Gender" />
        <input type="text" name="birth" placeholder="Birthday" />
        <button>Add</button>
      </form>
    );
  }
}

class IssueDelete extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(f) {
    f.preventDefault();
    const form = document.forms.IssueDelete;
    const issue = {
      id: form.serialNum.value,
    }
    this.props.removeIssue(issue);
    form.serialNum.value = "";
  }

  render() {
    return (
      <form name="IssueDelete" onSubmit={this.handleSubmit}>
        <input type="text" name="serialNum" placeholder="Serial Number" />
        <button>Delete</button>
      </form>
    );
  }
}

async function graphQLFetch(query, variables = {}) {
  try {
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ query, variables })
    });
    const body = await response.text();
    const result = JSON.parse(body, jsonDateReviver);

    if (result.errors) {
      const error = result.errors[0];
      if (error.extensions.code == 'BAD_USER_INPUT') {
        const details = error.extensions.exception.errors.join('\n ');
        alert(`${error.message}:\n ${details}`);
      } else {
        alert(`${error.extensions.code}: ${error.message}`);
      }
    }
    return result.data;
  } catch (e) {
    alert(`Error in sending data to server: ${e.message}`);
  }
}

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
    this.removeIssue = this.removeIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
      issueList {
        id name phoneNum created password gender birth distance comment credit
      }
    }`;

    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ issues: data.issueList });
    }
  }

  async createIssue(issue) {
    if (this.state.issues.length == 25) {
      alert("Oops! List is full now!")
    } else {
      const query = `mutation issueAdd($issue: IssueInputs!) {
        issueAdd(issue: $issue) {
          id
        }
      }`;

      const data = await graphQLFetch(query, { issue });
      if (data) {
        alert("Successfully added!");
        this.loadData();
      }
    }
  }

  async removeIssue(issue) {
    const query = `mutation issueDelete($issue: IssueInput!) {
      issueDelete(issue: $issue) {
        phoneNum
      }
    }`;

    const data = await graphQLFetch(query, { issue });
    if (data) {
      this.loadData();
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Welcome to Hotel California</h1>
        <h2>Now Available Slots</h2>
        <DisplayFreeSlots freeSlotNum={this.state.issues.length}/>
        <hr />
        <IssueAdd createIssue={this.createIssue} />
        <IssueDelete removeIssue={this.removeIssue}/>
        <hr />
        <IssueTable issues={this.state.issues} />
      </React.Fragment>
    );
  }
}

const element = <IssueList />;

ReactDOM.render(element, document.getElementById('contents'));

function changebackcolor() {

  var arr_tr = document.getElementsByTagName("tr");
  for (var i = 0; i < arr_tr.length; i++) {
      chang_color(arr_tr[i]);
  }
}
function chang_color(obj) {
  obj.onmouseover = function () {
      this.style.backgroundColor = "#f2f2f2";
  }
  obj.onmouseout = function () {
      this.style.backgroundColor = "#f5f5dc";
  }
}
setInterval(changebackcolor, 1000);

class StoreList extends React.Component {
  constructor() {
    super();
    this.state = { stores: [] };
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
      storeList {
        id name contactNum location openHour pic queue
      }
    }`;

    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ stores: data.storeList });
    }
  }

  async search(store) {
    const query = `query storeFind($store: StoreInput!) {
       storeFind(store: $store) {
        id name contactNum location openHour pic queue
      }
    }`;

    const data = await graphQLFetch(query, { store });
    if (data) {
      this.loadData();
    }
  }

  render() {
    return (
      <React.Fragment>
        <h3>Store test here</h3>
        <StoreTable stores={this.state.stores} />
        <Search search={this.search} />
      </React.Fragment>
    );
  }
}

function StoreRow(props) {
  const store = props.store;
  return (
    <tr>
      <td>{store.id}</td>
      <td>{store.name}</td>
      <td>{store.contactNum}</td>
      <td>{store.location}</td>
      <td>{store.openHour}</td>
      <td><img src={store.pic} /></td>
      <td>{store.queue}</td>
    </tr>
  );
}

function StoreTable(props) {
  const storeRows = props.stores.map(store =>
    <StoreRow key={store.id} store={store} />
  );

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Location</th>
          <th>Open Hour</th>
          <th>picture</th>
          <th>Current Queue</th>
        </tr>
      </thead>
      <tbody>
        {storeRows}
      </tbody>
    </table>
  );
}

class Search extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(a) {
    a.preventDefault();
    const form = document.forms.search;
    const store = {
      name: form.store.value,
    }
    this.props.search(store);
    form.store.value = "";
  }

  render() {
    return (
      <form name="search" onSubmit={this.handleSubmit}>
        <input type="text" name="store" placeholder="storeName" />
        <button>Search</button>
      </form>
    );
  }
}

const ele = <StoreList />;

ReactDOM.render(ele, document.getElementById('test'));
