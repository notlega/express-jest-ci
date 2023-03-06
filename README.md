# express-jest-ci

This is a test repository using express to create a simple API and jest to test it.

The API is a simple calculator-ish thingy that can add, subtract, multiply and divide two numbers.

## How to run

1. Clone the repository

```bash
git clone git@github.com:notlega/express-jest-ci.git
```

2. Install dependencies

```bash
npm ci
```

3. Run the project in development mode

```bash
npm run dev
```

The default port has been set to 8081, so you can access the API at [http://localhost:8081](http://localhost:8081)

4. Run the tests

```bash
npm run test
```

## Points of consideration

This is an example projects and the settings have mostly been set to the defaults

There are a few things that can be improved and I have labeled them as points of consideration:

### Test Coverage

Test coverage is the percentage of code that is covered by tests

The default coverage threshold is not specified within Jest's documentation

Through trial and error, I have found that Jest will fail if there is less than 80% for branches, functions, lines and more than 10 uncovered statements

We should consider the following fail conditions:

- Less than 80% for branches, functions, lines, and more than 10 uncovered statements
- Less than 70% for branches, functions, lines, and more than 15 uncovered statements
- Less than 60% for branches, functions, lines, and more than 20 uncovered statements

These are just some broad values that I have suggested but they can be changed to suit the project

The reason for the proposed values is that the values above will provide a good balance between the amount of tests and the amount of code that is covered

This will allow us to have a good amount of tests without having to write tests for every single line of code

## Glossary

### Branches

A branch is when the runtime can choose between two different paths of execution

Take for example the following code:

```ts
const a: number = 1;
const b: number = 2;

if (a > b) {
  console.log('a is greater than b');
}

if (b > a) {
  console.log('b is greater than a');
}

console.log('end of program');
```

After reaching the `if (a > b)` statement, the runtime will have to choose between going into the if statement or not

At this stage, we have already seen two possible paths (one branch)

Afterwards, the runtime will have to choose between going into the `if (b > a)` statement or not

This is yet another two paths (one branch)

So we end up with a total of four possible paths:

- `if (a > b)` is true and `if (b > a)` is true
- `if (a > b)` is true and `if (b > a)` is false
- `if (a > b)` is false and `if (b > a)` is true
- `if (a > b)` is false and `if (b > a)` is false

The following code snippet above therefore contains four paths and two branches

There are more statements that can cause a branch, and here are a few examples:

- Conditional loops (for, while, do-while)
- The `break` and/or `continue` statement
- Binary shortcircuting operators (&&, ||)

### Statements

A statement represents instructions that have been excecuted during the unit test

The following lines below are examples of statements:

```ts
const num1: number = 1;
const str1: string = 'hello';

console.log('hello world');
```
