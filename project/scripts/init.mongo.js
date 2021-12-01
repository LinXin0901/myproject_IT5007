/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo issuetracker scripts/init.mongo.js
 * Atlas:
 *   mongo mongodb+srv://user:pwd@xxx.mongodb.net/issuetracker scripts/init.mongo.js
 * MLab:
 *   mongo mongodb://user:pwd@xxx.mlab.com:33533/issuetracker scripts/init.mongo.js
 */

db.issues.remove({});
db.stores.remove({});

const issuesDB = [
  {
    id: 1, name: 'Harry', phoneNum: '11111111', created: new Date('2021-10-02T08:06:29'), password: '123', gender: 'M', birth: '19980201', distance: 5, comment: 2, credit: 12,
  },
  {
    id: 2, name: 'Henry', phoneNum: '22222222', created: new Date('2021-10-02T08:07:31'), password: '456', gender: 'M', birth: '19980401', distance: 3, comment: 2, credit: 9,
  },
  {
    id: 3, name: 'John', phoneNum: '33333333', created: new Date('2021-10-02T08:11:14'), password: '789', gender: 'M', birth: '19980601', distance: 6, comment: 1, credit: 7,
  }
];

const storesDB = [
  {
    id: 1, name: 'Berger King', contactNum: '11111111', location: 'Jurong East', openHour: '8am8pm', pic: '/imgsrc/Burger_king', queue: [],
  },
  {
    id: 2, name: 'McDonald', contactNum: '22222222', location: 'Clementi', openHour: '8am10pm', pic: '/imgsrc/mcdonald', queue: [],
  },
  {
    id: 3, name: 'Korean Cuisine', contactNum: '33333333', location: 'Jurong West', openHour: '8am9pm', pic: '/imgsrc/Collin', queue: [],
  }
];

db.issues.insertMany(issuesDB);
db.stores.insertMany(storesDB);

const count1 = db.issues.count();
print('Inserted', count1, 'issues');
const count2 = db.stores.count();
print('Inserted', count2, 'stores')

db.counters.remove({ _id: 'issues' });
db.counters.insert({ _id: 'issues', current: count1 });

db.issues.createIndex({ id: 1 }, { unique: true });
db.issues.createIndex({ name: 1 });
db.issues.createIndex({ phoneNum: 1 });
db.issues.createIndex({ created: 1 });
db.issues.createIndex({ password: 1 });
db.issues.createIndex({ gender: 1 });
db.issues.createIndex({ birth: 1 });
db.issues.createIndex({ distance: 1 });
db.issues.createIndex({ comment: 1 });
db.issues.createIndex({ credit: 1 });

db.stores.createIndex({ id: 1 }, { unique: true });
db.stores.createIndex({ name: 1 });
db.stores.createIndex({ contactNum: 1 });
db.stores.createIndex({ location: 1 });
db.stores.createIndex({ openHour: 1 });
db.stores.createIndex({ pic: 1 });
db.stores.createIndex({ queue: 1 });