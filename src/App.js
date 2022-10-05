import { Component } from "react";

import "./App.css";
import SearchBox from "./search-box/search-box.component";
import UserList from "./user-list/user-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(searchField.toLowerCase()) ||
        user.email.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    return (
      <div className="App">
        <h1>User Collection Table</h1>
        <SearchBox
          placeholder="search for users' name or email"
          handleChange={this.handleChange}
        />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company Name</th>
              <th>Zipcode</th>
            </tr>
          </thead>
          <tbody>
            <UserList users={filteredUsers} />
          </tbody>
        </table>
        <footer>
          <hr />
          <p>
            Assessment Task by Mangrove Software & IT Company Limited for the
            position of Junior Software Developer.
          </p>
          <p>&#169; 2022 <a href="https://github.com/zakaria-akash">Zakaria Ibrahim</a> (zakaria.93@yahoo.com)</p>
        </footer>
      </div>
    );
  }
}

export default App;
