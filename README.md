# @gracefullight/figma-plugin-starter

This is a preset for creating Figma plugins using React and esbuild. The starter kit is based on the [esbuild-react](https://github.com/figma/plugin-samples/tree/master/esbuild-react) sample provided by Figma.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Yarn](https://yarnpkg.com/) (v3.5.0 or higher)

### Installation

1. Clone this repository: `git clone https://github.com/gracefullight/figma-plugin-starter.git`
2. Navigate into the project directory: `cd figma-plugin-starter`
3. Install dependencies: `yarn install`

### Usage

#### Development

To start the development server, run:

```bash
yarn dev
```

This command will start the following processes concurrently:

- `tsc` - TypeScript compiler in watch mode for both the main code and UI code
- `build` - esbuild bundler for the main code in watch mode
- `vite` - development server for the UI code with HMR (hot module replacement)

Once the server is up and running, open Figma and navigate to Plugins > Development > Create new plugin. Choose "Link existing plugin" and select the `manifest.json` file in the project directory.

#### Building

To build the plugin, run:

```bash
yarn build
```

This command will create a production-ready version of the plugin in the `dist` directory.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
