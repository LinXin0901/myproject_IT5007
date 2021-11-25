"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

var DisplayFreeSlots = /*#__PURE__*/function (_React$Component) {
  _inherits(DisplayFreeSlots, _React$Component);

  var _super = _createSuper(DisplayFreeSlots);

  function DisplayFreeSlots() {
    _classCallCheck(this, DisplayFreeSlots);

    return _super.apply(this, arguments);
  }

  _createClass(DisplayFreeSlots, [{
    key: "render",
    value: function render() {
      var number = 25 - this.props.freeSlotNum;
      return /*#__PURE__*/React.createElement("div", {
        id: "freeslots"
      }, number);
    }
  }]);

  return DisplayFreeSlots;
}(React.Component);

var DisplayHomepage = /*#__PURE__*/function (_React$Component2) {
  _inherits(DisplayHomepage, _React$Component2);

  var _super2 = _createSuper(DisplayHomepage);

  function DisplayHomepage() {
    _classCallCheck(this, DisplayHomepage);

    return _super2.apply(this, arguments);
  }

  _createClass(DisplayHomepage, [{
    key: "handleClick",
    value: function handleClick(z) {
      z.preventDefault();
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        id: "homepage"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: this.handleClick
      }, "Back to Top"));
    }
  }]);

  return DisplayHomepage;
}(React.Component);

function IssueRow(props) {
  var issue = props.issue;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, issue.id), /*#__PURE__*/React.createElement("td", null, issue.name), /*#__PURE__*/React.createElement("td", null, issue.phoneNum), /*#__PURE__*/React.createElement("td", null, issue.created.toLocaleTimeString()), /*#__PURE__*/React.createElement("td", null, issue.password), /*#__PURE__*/React.createElement("td", null, issue.gender), /*#__PURE__*/React.createElement("td", null, issue.birth));
}

function IssueTable(props) {
  var issueRows = props.issues.map(function (issue) {
    return /*#__PURE__*/React.createElement(IssueRow, {
      key: issue.id,
      issue: issue
    });
  });
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Serial Number"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Phone Number"), /*#__PURE__*/React.createElement("th", null, "Time Stamp"), /*#__PURE__*/React.createElement("th", null, "Password"), /*#__PURE__*/React.createElement("th", null, "Gender"), /*#__PURE__*/React.createElement("th", null, "Birthday"))), /*#__PURE__*/React.createElement("tbody", null, issueRows));
}

var IssueAdd = /*#__PURE__*/function (_React$Component3) {
  _inherits(IssueAdd, _React$Component3);

  var _super3 = _createSuper(IssueAdd);

  function IssueAdd() {
    var _this;

    _classCallCheck(this, IssueAdd);

    _this = _super3.call(this);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IssueAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.issueAdd;
      var issue = {
        name: form.name.value,
        phoneNum: form.phoneNum.value,
        password: form.password.value,
        gender: form.gender.value,
        birth: form.birth.value
      };
      this.props.createIssue(issue);
      form.name.value = "";
      form.phoneNum.value = "";
      form.password.value = "";
      form.gender.value = "";
      form.birth.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "issueAdd",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "name",
        placeholder: "Name"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "phoneNum",
        placeholder: "Phone Number"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "password",
        placeholder: "Password"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "gender",
        placeholder: "Gender"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "birth",
        placeholder: "Birthday"
      }), /*#__PURE__*/React.createElement("button", null, "Add"));
    }
  }]);

  return IssueAdd;
}(React.Component);

var IssueDelete = /*#__PURE__*/function (_React$Component4) {
  _inherits(IssueDelete, _React$Component4);

  var _super4 = _createSuper(IssueDelete);

  function IssueDelete() {
    var _this2;

    _classCallCheck(this, IssueDelete);

    _this2 = _super4.call(this);
    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(IssueDelete, [{
    key: "handleSubmit",
    value: function handleSubmit(f) {
      f.preventDefault();
      var form = document.forms.IssueDelete;
      var issue = {
        id: form.serialNum.value
      };
      this.props.removeIssue(issue);
      form.serialNum.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "IssueDelete",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "serialNum",
        placeholder: "Serial Number"
      }), /*#__PURE__*/React.createElement("button", null, "Delete"));
    }
  }]);

  return IssueDelete;
}(React.Component);

function graphQLFetch(_x) {
  return _graphQLFetch.apply(this, arguments);
}

function _graphQLFetch() {
  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(query) {
    var variables,
        response,
        body,
        result,
        error,
        details,
        _args5 = arguments;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            variables = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
            _context5.prev = 1;
            _context5.next = 4;
            return fetch('/graphql', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                query: query,
                variables: variables
              })
            });

          case 4:
            response = _context5.sent;
            _context5.next = 7;
            return response.text();

          case 7:
            body = _context5.sent;
            result = JSON.parse(body, jsonDateReviver);

            if (result.errors) {
              error = result.errors[0];

              if (error.extensions.code == 'BAD_USER_INPUT') {
                details = error.extensions.exception.errors.join('\n ');
                alert("".concat(error.message, ":\n ").concat(details));
              } else {
                alert("".concat(error.extensions.code, ": ").concat(error.message));
              }
            }

            return _context5.abrupt("return", result.data);

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](1);
            alert("Error in sending data to server: ".concat(_context5.t0.message));

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 13]]);
  }));
  return _graphQLFetch.apply(this, arguments);
}

var IssueList = /*#__PURE__*/function (_React$Component5) {
  _inherits(IssueList, _React$Component5);

  var _super5 = _createSuper(IssueList);

  function IssueList() {
    var _this3;

    _classCallCheck(this, IssueList);

    _this3 = _super5.call(this);
    _this3.state = {
      issues: []
    };
    _this3.createIssue = _this3.createIssue.bind(_assertThisInitialized(_this3));
    _this3.removeIssue = _this3.removeIssue.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(IssueList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var query, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "query {\n      issueList {\n        id name phoneNum created password gender birth\n      }\n    }";
                _context.next = 3;
                return graphQLFetch(query);

              case 3:
                data = _context.sent;

                if (data) {
                  this.setState({
                    issues: data.issueList
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "createIssue",
    value: function () {
      var _createIssue = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(issue) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.state.issues.length == 25)) {
                  _context2.next = 4;
                  break;
                }

                alert("Oops! List is full now!");
                _context2.next = 9;
                break;

              case 4:
                query = "mutation issueAdd($issue: IssueInputs!) {\n        issueAdd(issue: $issue) {\n          id\n        }\n      }";
                _context2.next = 7;
                return graphQLFetch(query, {
                  issue: issue
                });

              case 7:
                data = _context2.sent;

                if (data) {
                  alert("Successfully added!");
                  this.loadData();
                }

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createIssue(_x2) {
        return _createIssue.apply(this, arguments);
      }

      return createIssue;
    }()
  }, {
    key: "removeIssue",
    value: function () {
      var _removeIssue = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(issue) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = "mutation issueDelete($issue: IssueInput!) {\n      issueDelete(issue: $issue) {\n        phoneNum\n      }\n    }";
                _context3.next = 3;
                return graphQLFetch(query, {
                  issue: issue
                });

              case 3:
                data = _context3.sent;

                if (data) {
                  this.loadData();
                }

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function removeIssue(_x3) {
        return _removeIssue.apply(this, arguments);
      }

      return removeIssue;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Welcome to Hotel California"), /*#__PURE__*/React.createElement("h2", null, "Now Available Slots"), /*#__PURE__*/React.createElement(DisplayFreeSlots, {
        freeSlotNum: this.state.issues.length
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, {
        createIssue: this.createIssue
      }), /*#__PURE__*/React.createElement(IssueDelete, {
        removeIssue: this.removeIssue
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, {
        issues: this.state.issues
      }), /*#__PURE__*/React.createElement(DisplayHomepage, null));
    }
  }]);

  return IssueList;
}(React.Component);

var element = /*#__PURE__*/React.createElement(IssueList, null);
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
  };

  obj.onmouseout = function () {
    this.style.backgroundColor = "#f5f5dc";
  };
}

setInterval(changebackcolor, 1000);

var StoreList = /*#__PURE__*/function (_React$Component6) {
  _inherits(StoreList, _React$Component6);

  var _super6 = _createSuper(StoreList);

  function StoreList() {
    var _this4;

    _classCallCheck(this, StoreList);

    _this4 = _super6.call(this);
    _this4.state = {
      stores: []
    };
    return _this4;
  }

  _createClass(StoreList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var query, data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                query = "query {\n      storeList {\n        id name contactNum location openHour pic queue\n      }\n    }";
                _context4.next = 3;
                return graphQLFetch(query);

              case 3:
                data = _context4.sent;

                if (data) {
                  this.setState({
                    stores: data.storeList
                  });
                }

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function loadData() {
        return _loadData2.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Store test here"), /*#__PURE__*/React.createElement(StoreTable, {
        stores: this.state.stores
      }));
    }
  }]);

  return StoreList;
}(React.Component);

function StoreRow(props) {
  var store = props.store;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, store.id), /*#__PURE__*/React.createElement("td", null, store.name), /*#__PURE__*/React.createElement("td", null, store.contactNum), /*#__PURE__*/React.createElement("td", null, store.location), /*#__PURE__*/React.createElement("td", null, store.openHour), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("img", {
    src: store.pic
  })), /*#__PURE__*/React.createElement("td", null, store.queue));
}

function StoreTable(props) {
  var storeRows = props.stores.map(function (store) {
    return /*#__PURE__*/React.createElement(StoreRow, {
      key: store.id,
      store: store
    });
  });
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "No."), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Contact"), /*#__PURE__*/React.createElement("th", null, "Location"), /*#__PURE__*/React.createElement("th", null, "Open Hour"), /*#__PURE__*/React.createElement("th", null, "picture"), /*#__PURE__*/React.createElement("th", null, "Current Queue"))), /*#__PURE__*/React.createElement("tbody", null, storeRows));
}

var ele = /*#__PURE__*/React.createElement(StoreList, null);
ReactDOM.render(ele, document.getElementById('test'));