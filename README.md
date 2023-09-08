# Ounce

> @cedcommerce-integration/Ounce

[![NPM](https://img.shields.io/badge/GIT-Ounce-yellowgreen)](https://github.com/CedCommerce-Integration/Ounce.git) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Instructions

### Step 1

Before Privately using this NPM package authenticate by logging in to npm, using the `npm login` command, replacing USERNAME with your GitHub username, TOKEN with your personal access token, and PUBLIC-EMAIL-ADDRESS with your email address.

TOKEN generation Process :
 1. Open GitHub Account
 2. Go to Setting 
 3. Developer Settings 
 4. Personal access token 
 5. Click on `Generate new token`
 
```sh
$ npm login --scope=@cedcommerce-integration --registry=https://npm.pkg.github.com

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

### Step 2 ( not required, use only if there is an error related to Org )

In the same directory as your `package.json` file, create or edit a `.npmrc` file to include a line specifying the GitHub Packages URL and the account owner.

```bash
//npm.pkg.github.com/:_authToken=TOKEN
@cedcommerce-integration:registry=https://npm.pkg.github.com/
```

# Install

When you are done with the Above Process Run this on the CLI

```bash
npm install @cedcommerce-integration/ounce
```

## Usage

```jsx
import React, { Component } from 'react'

import { Button } from '@cedcommerce-integration/ounce'
import '@cedcommerce-integration/ounce/dist/index.css'

class Example extends Component {
  render() {
    return <Button type="primary">
      Button
    </Button>
  }
}
```