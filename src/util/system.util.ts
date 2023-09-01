export namespace SystemUtil {
  export function ClearMainConsole() {
    import.meta.hot &&
      import.meta.hot.on('vite:beforeUpdate', () => console.clear());
  }
}
