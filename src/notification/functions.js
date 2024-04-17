const { Octokit } = require("@octokit/rest");
const pug = require("pug");

// Fetch collaborators from GitHub repository
const fetch_collaborators = async (params = {}) => {
  const { owner, url, token } = params;

  let repo = url.split(".git")[0].split("/");
  repo = repo[repo.length - 1];

  const octokit = new Octokit({
    auth: token
  });

  try {
    const email = [];
    const users = await octokit.paginate(
      "GET /repos/{owner}/{repo}/collaborators",
      {
        owner,
        repo
      },
      (response) =>
        response.data
          .filter((issue) => issue.role_name !== "admin")
          .map((issue) => issue.login)
    );

    if (users.length > 0) {
      for (let element of users) {
        const profile = await octokit.rest.users.getByUsername({
          username: element
        });
        if (profile?.data?.email !== null) email.push(profile.data.email);
      }
    }
    return email.toString();
  } catch (error) {
    throw new Error();
  }
};

// Get membership of user
const get_membership = async (params = {}) => {
  const { org, token, username } = params;

  const octokit = new Octokit({
    auth: token
  });

  try {
    const res = await octokit.rest.orgs.getMembershipForUser({
      org,
      username
    });
    return res?.data?.role;
  } catch (error) {
    throw new Error();
  }
};

// Generate html string from pug file
const fetch_html = async (params = {}) => {
  const { version } = params;
  const int_version = version.replaceAll('"', "");

  try {
    let html = pug.renderFile(`${__dirname}/mail.pug`, {
      int_version
    });
    return html;
  } catch (error) {
    throw new Error();
  }
};

module.exports = { fetch_collaborators, fetch_html, get_membership };
