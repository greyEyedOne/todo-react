# Functionality

This app provides an easy interface to add, edit, and delete tasks.

# How to use

- Add a new task
  Just set a cursor on a string above Add task button if you want to add a new task and press Add task when it'll be prepared
- Edit an existing task
  Click on the task description you want to change. It will be saved automatically when unfocused (click to a free space on the page).
- Delete a task
  There are two ways to do it: when pushing the delete button and when editing the task and leaving it empty.
- Using the buttons, you can save the ToDo list in Local Storage, load the latest ToDo list from there, and clear Local Storage
- To see the whole task, if it overflows now, it might be only horizontally scrolled.

# What I'd improve next

- Add types (first things first)
- Add an interface to open a full task (now it's only one string, but it might be helpful to be laconic ;) )
- Add a favicon
- add a KeyDown event when editing the task and push Enter to save it

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# todo-react
