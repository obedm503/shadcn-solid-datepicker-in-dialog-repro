# Date picker inside Dialog

By default the date picker doesn't even show up inside a dialog. This can easily be fixed by putting [both dialogs in the same z-index](./src/components/ui/date-picker.tsx#L229).

However, even if they're on the same `z-index`, selecting a date also closes the parent `Dialog`.

# SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## Developing

Once you've created a project and installed dependencies with `bun install` start a development server:

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

Solid apps are built with _presets_, which optimize your project for deployment to different environments.

By default, `bun run build` will generate a Node app that you can run with `bun start`. To use a different preset, add it to the `devDependencies` in `package.json` and specify in your `app.config.js`.

## This project was created with the [Solid CLI](https://solid-cli.netlify.app)
