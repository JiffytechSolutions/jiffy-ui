const imp_func = require("./functions.js");

// Function to extract value of argument
const getArg = (key) => {
  const str = process.argv
    .filter((el) => el.includes(key))
    .toString()
    .replace(`--${key}=`, "");
  return str;
};

// Parameters required to access GitHub APP
const github_app_info = {
  owner: getArg("owner"),
  url: getArg("url"),
  token: getArg("token")
};

// Parameters required to comment on Pull Request
const html_info = {
  version: getArg("version")
};

let caller_object;
const caller_function = getArg("call");

switch (caller_function) {
  case "fetch_collaborators":
    caller_object = github_app_info;
    break;
  case "fetch_html":
    caller_object = html_info;
    break;
}

// calling function
imp_func[caller_function](caller_object).then((res) => {
  console.log(res);
});
