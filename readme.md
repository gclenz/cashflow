<h1 align="center">
    <img alt="Cashflow" src="https://ibb.co/F06nYjJ" style="max-width: 100%; height: 200px;" />
    <br>
    Cashflow
</h1>

<h4 align="center">
  A REST API that manages cash flow.
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/gclenz/cashflow.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gclenz/cashflow.svg">

  <a href="https://www.codacy.com/app/gclenz/cashflow?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gclenz/cashflow&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://api.codacy.com/project/badge/Grade/691b85e51bf240b997ae6ff82ea41590">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/gclenz/cashflow.svg">
  <a href="https://github.com/gclenz/cashflow/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gclenz/cashflow.svg">
  </a>

  <a href="https://github.com/gclenz/cashflow/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/gclenz/cashflow.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/gclenz/cashflow.svg">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :rocket: Technologies

This project is currently being developed with the following technologies:

- [NodeJS](https://nodejs.org)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]
- And another couple of packages....

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v12.16.2][nodejs] or higher + [Yarn v1.22.4][yarn] or higher installed on your computer.
You'll also need to setup and run a Postgres database and insert the access informations into a .env file, based on a .env.example file that is provided in the repository root.
From your command line:

```bash
# Clone this repository
$ git clone https://github.com/gclenz/cashflow

# Go into the repository
$ cd cashflow

# Install dependencies
$ yarn install

# Run migrations to your database
$ yarn migrate

# Run the backend server
$ yarn dev

---

Made with ♥ by Gabriel Lenz :wave: [Get in touch!](https://www.linkedin.com/in/gabriellenz/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint