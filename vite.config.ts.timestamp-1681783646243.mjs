// vite.config.ts
import { defineConfig } from "file:///Users/sean.mcquaid/Development/react-template/node_modules/vite/dist/node/index.js";
import react from "file:///Users/sean.mcquaid/Development/react-template/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///Users/sean.mcquaid/Development/react-template/node_modules/vite-plugin-svgr/dist/index.mjs";
import legacy from "file:///Users/sean.mcquaid/Development/react-template/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import checker from "file:///Users/sean.mcquaid/Development/react-template/node_modules/vite-plugin-checker/dist/esm/main.js";
import { visualizer } from "file:///Users/sean.mcquaid/Development/react-template/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var vite_config_default = defineConfig(() => {
  return {
    plugins: [
      react(),
      svgr(),
      legacy(),
      checker({ typescript: true }),
      visualizer()
    ],
    preview: {
      port: 3e3
    },
    server: {
      port: 3e3
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/setupTests.ts"],
      exclude: ["e2e", "node_modules"],
      coverage: {
        provider: "istanbul",
        reporter: ["lcov"],
        all: true,
        include: ["src/**/*.ts", "src/**/*.tsx"],
        exclude: [
          "src/setupTests.ts",
          "src/testUtils",
          "src/routes/AppRouter.tsx",
          "src/routes/RouteConstants.ts",
          "src/Root.tsx",
          "src/AppConstants.ts",
          "src/i18n",
          "src/main.tsx",
          "src/mocks",
          "src/env.ts"
        ]
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2Vhbi5tY3F1YWlkL0RldmVsb3BtZW50L3JlYWN0LXRlbXBsYXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc2Vhbi5tY3F1YWlkL0RldmVsb3BtZW50L3JlYWN0LXRlbXBsYXRlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9zZWFuLm1jcXVhaWQvRGV2ZWxvcG1lbnQvcmVhY3QtdGVtcGxhdGUvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGUvY2xpZW50XCIgLz5cblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHN2Z3IgZnJvbSAndml0ZS1wbHVnaW4tc3Zncic7XG5pbXBvcnQgbGVnYWN5IGZyb20gJ0B2aXRlanMvcGx1Z2luLWxlZ2FjeSc7XG5pbXBvcnQgY2hlY2tlciBmcm9tICd2aXRlLXBsdWdpbi1jaGVja2VyJztcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICByZWFjdCgpLFxuICAgICAgc3ZncigpLFxuICAgICAgbGVnYWN5KCksXG4gICAgICBjaGVja2VyKHsgdHlwZXNjcmlwdDogdHJ1ZSB9KSxcbiAgICAgIHZpc3VhbGl6ZXIoKSxcbiAgICBdLFxuICAgIHByZXZpZXc6IHtcbiAgICAgIHBvcnQ6IDMwMDAsXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHBvcnQ6IDMwMDAsXG4gICAgfSxcbiAgICB0ZXN0OiB7XG4gICAgICBnbG9iYWxzOiB0cnVlLFxuICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgICBzZXR1cEZpbGVzOiBbJy4vc3JjL3NldHVwVGVzdHMudHMnXSxcbiAgICAgIGV4Y2x1ZGU6IFsnZTJlJywgJ25vZGVfbW9kdWxlcyddLFxuICAgICAgY292ZXJhZ2U6IHtcbiAgICAgICAgcHJvdmlkZXI6ICdpc3RhbmJ1bCcsXG4gICAgICAgIHJlcG9ydGVyOiBbJ2xjb3YnXSxcbiAgICAgICAgYWxsOiB0cnVlLFxuICAgICAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qLnRzJywgJ3NyYy8qKi8qLnRzeCddLFxuICAgICAgICBleGNsdWRlOiBbXG4gICAgICAgICAgJ3NyYy9zZXR1cFRlc3RzLnRzJyxcbiAgICAgICAgICAnc3JjL3Rlc3RVdGlscycsXG4gICAgICAgICAgJ3NyYy9yb3V0ZXMvQXBwUm91dGVyLnRzeCcsXG4gICAgICAgICAgJ3NyYy9yb3V0ZXMvUm91dGVDb25zdGFudHMudHMnLFxuICAgICAgICAgICdzcmMvUm9vdC50c3gnLFxuICAgICAgICAgICdzcmMvQXBwQ29uc3RhbnRzLnRzJyxcbiAgICAgICAgICAnc3JjL2kxOG4nLFxuICAgICAgICAgICdzcmMvbWFpbi50c3gnLFxuICAgICAgICAgICdzcmMvbW9ja3MnLFxuICAgICAgICAgICdzcmMvZW52LnRzJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUdBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sYUFBYTtBQUNwQixTQUFTLGtCQUFrQjtBQUczQixJQUFPLHNCQUFRLGFBQWEsTUFBTTtBQUNoQyxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxRQUFRLEVBQUUsWUFBWSxLQUFLLENBQUM7QUFBQSxNQUM1QixXQUFXO0FBQUEsSUFDYjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxNQUFNO0FBQUEsTUFDSixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixZQUFZLENBQUMscUJBQXFCO0FBQUEsTUFDbEMsU0FBUyxDQUFDLE9BQU8sY0FBYztBQUFBLE1BQy9CLFVBQVU7QUFBQSxRQUNSLFVBQVU7QUFBQSxRQUNWLFVBQVUsQ0FBQyxNQUFNO0FBQUEsUUFDakIsS0FBSztBQUFBLFFBQ0wsU0FBUyxDQUFDLGVBQWUsY0FBYztBQUFBLFFBQ3ZDLFNBQVM7QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
