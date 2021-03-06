# Charity
- [charity](#charity)
  - [Introduction](#introduction)
  - [Quick Start](#quick-start)
  - [Documentation](#documentation)
    - [Dependencies](#dependencies)
    - [Folder structure](#folder-structure)
    - [Development steps](#development-steps)

## Introduction

Implemention for a donation list starting from scratch</br>
Before starting the app: </br>
Rename .env.example to .env with the correct values

## Quick Start

```bash
# Clone the repository
git clone https://github.com/roedit/charity.git

# Go inside the directory
cd charity

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm build

# Run test in watch mode
npm test

```

## Documentation

### Dependencies
<ul>
    <li>"@babel/core": "^7.4.4", - Javascript compiler for older js runtimes</li>
    <li>"@babel/preset-env": "^7.4.4", - Determine which features need to be transformed to run within a particular browser or runtime version</li>
    <li>"@babel/preset-react": "^7.0.0", - Transform jsx to js</li>
    <li>"babel-loader": "^8.0.5", - Transpiles js using babel and webpack</li>
    <li>"html-webpack-plugin": "^3.2.0", - Generates the build html file</li>
    <li>"webpack": "^4.30.0",  - The module bundler</li>
    <li>"webpack-cli": "^3.3.1", - Allows to run webpack commands build scripts</li>
    <li>"css-loader": "^2.1.1", - translates CSS into CommonJS</li>
    <li>"node-sass": "^4.12.0", - compile .scss files to css</li>
    <li>"postcss-loader": "^3.0.0", - adds operations on top of the css </li>
    <li>"sass-loader": "^7.1.0", - compiles Sass to CSS, using Node Sass by default</li>
    <li>"style-loader": "^0.23.1", - creates style nodes from JS strings</li>
    <li>"autoprefixer": "^9.5.1", - parse CSS and add vendor prefixes to CSS rules</li>
    <li>"dotenv-webpack": "^1.7.0", - Adds the .env variables. For production this should be overwrite with the env variables.</li>
    <li>"@babel/plugin-proposal-class-properties": "^7.4.4", - Allow @injector, @observable in class declaration</li>
    <li>"@babel/plugin-proposal-decorators": "^7.4.4", - Allow store decorators</li>
    <li>"jest": "^24.7.1", Testing framework</li>
    <li>"babel-jest": "^24.7.1", Required by babel for tests</li>
    <li>"react-test-renderer": "^16.8.6", Required for tests</li>
    <li>"enzyme": "^3.9.0", Testing utility for react</li>
    <li>"enzyme-adapter-react-16": "^1.12.1", Adapter for react 16 </li>
</ul>

### Folder Structure

All the source code will be inside **src** directory. 

### Development Steps
<ol>
    <li>Create the git repo </li>
    <li>Init the npm project</li>
    <li>Add basic configuration</li>
    <li>Add sass configuration</li>
    <li>Prepare for production </li>
    <li>State management</li>
    <li>Display charity and donations</li>
    <li>Test components</li>
</ol>
