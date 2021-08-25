# Starter for Next.js applications written in TypeScript

A basic Starter for [Next.js](https://nextjs.org/) + TypeScript development with setup for PWA, Jest, Storybook, Eslint, Styled-components and more.

---

__👌  The follwing is setup out of the box:__
- Support to PWA using [next-pwa](https://www.npmjs.com/package/next-pwa)
- UI components documentation with [Storybook](https://storybook.js.org/).
- Styles via [Styled Components](https://styled-components.com/)
- Consistent coding styles using [EditorConfig](https://editorconfig.org/)
- Linting via [eslint](https://eslint.org/), [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) and [prettier](https://prettier.io/)
- Testing via [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- Preventing bad `git commit` with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- Consistency code generator with [Plop](https://plopjs.com/)

__Check all the [detailed functionalities in this article](https://www.diogorodrigues.dev/blog/modern-starter-for-nextjs-applications-written-in-typescript-and-more).__


## 🚀 Getting Started

Assuming [Node.js](https://nodejs.org/en/) is installed, run the following commands to install the project:


**With yarn create next-app**:
```
$ yarn create next-app -e https://github.com/diogorodrigues/nextjs-typescript-starter your-project-name
```
or

**With git clone**:
```
$ git clone https://github.com/diogorodrigues/nextjs-typescript-starter.git your-project-name

cd your-project-name

rm -rf .git
yarn install
yarn dev
```

## Commands

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### All commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook
- `generate component-name`: create component files

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
