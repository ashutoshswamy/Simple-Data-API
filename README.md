# Simple Data API

This is an API which returns first names, last names and emails

More features will be added in the future...

**Basic API Endpoint** - *https://simple-data-api.ashutoshswamy397.repl.co/*

| Endpoint                                                                         | Method | Use                                                                           |
| -------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------- |
| [/men/name](https://simple-data-api.ashutoshswamy397.repl.co/men/name)           | GET    | To get the random names for men/boys                                          |
| [/women/name](https://simple-data-api.ashutoshswamy397.repl.co/women/name)       | GET    | To get the random names for women/girls                                       |
| [/lastName](https://simple-data-api.ashutoshswamy397.repl.co/lastName)           | GET    | To get the random last names                                                  |
| [/men/email](https://simple-data-api.ashutoshswamy397.repl.co/men/email)         | GET    | To get the random email addresses for men/boys                                |
| [/women/email](https://simple-data-api.ashutoshswamy397.repl.co/women/email)     | GET    | To get the random email addresses for women/girls                             |
| [/men/profile](https://simple-data-api.ashutoshswamy397.repl.co/men/profile)     | GET    | To get the first name, last name and email address altogether for men/boys    |
| [/women/profile](https://simple-data-api.ashutoshswamy397.repl.co/women/profile) | GET    | To get the first name, last name and email address altogether for women/girls |

# Example

**Men Profile**

```js
const axios = require("axios");

const url = "https://simple-data-api.ashutoshswamy397.repl.co/men/profile";

axios
  .get(url)
  .then((res) => {
    console.log(res.data.firstName);
    console.log(res.data.lastName);
    console.log(res.data.email);
  })
  .catch((err) => {
    console.log(err);
  });

//returns a random first name for a man/boy
//returns a random last name
//returns a email address according to the first name and the last name
```

**Women Profile**

```js
const axios = require("axios");

const url = "https://simple-data-api.ashutoshswamy397.repl.co/women/profile";

axios
  .get(url)
  .then((res) => {
    console.log(res.data.firstName);
    console.log(res.data.lastName);
    console.log(res.data.email);
  })
  .catch((err) => {
    console.log(err);
  });

//returns a random first name for a woman/girl
//returns a random last name
//returns a email address according to the first name and the last name
```
