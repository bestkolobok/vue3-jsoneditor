// vite.config.ts
import { fileURLToPath, URL } from "url";
import { defineConfig } from "file:///Users/kolobok/WebstormProjects/_My/Vue3JsonEditor/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/kolobok/WebstormProjects/_My/Vue3JsonEditor/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import typescript2 from "file:///Users/kolobok/WebstormProjects/_My/Vue3JsonEditor/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js";
import { envConfig } from "file:///Users/kolobok/WebstormProjects/_My/Vue3JsonEditor/node_modules/vite-plugin-env-config/dist/index.js";
import { chunkSplitPlugin } from "file:///Users/kolobok/WebstormProjects/_My/Vue3JsonEditor/node_modules/vite-plugin-chunk-split/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///Users/kolobok/WebstormProjects/_My/Vue3JsonEditor/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    typescript2({
      check: false,
      clean: true,
      include: ["src/components/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true
        },
        exclude: ["vite.config.ts", "main.ts"]
      }
    }),
    envConfig({
      prefix: "VITECONFIG_",
      separator: "_"
    }),
    chunkSplitPlugin({
      strategy: "single-vendor",
      customSplitting: {
        "vanilla-jsoneditor": [/vanilla-jsoneditor/]
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/JsonEditorPlugin.ts",
      formats: ["es"],
      name: "JsonEditorPlugin",
      fileName: () => "index.mjs"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva29sb2Jvay9XZWJzdG9ybVByb2plY3RzL19NeS9WdWUzSnNvbkVkaXRvclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2tvbG9ib2svV2Vic3Rvcm1Qcm9qZWN0cy9fTXkvVnVlM0pzb25FZGl0b3Ivdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2tvbG9ib2svV2Vic3Rvcm1Qcm9qZWN0cy9fTXkvVnVlM0pzb25FZGl0b3Ivdml0ZS5jb25maWcudHNcIjtpbXBvcnQge2ZpbGVVUkxUb1BhdGgsIFVSTH0gZnJvbSAndXJsJztcblxuaW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IHR5cGVzY3JpcHQyIGZyb20gJ3JvbGx1cC1wbHVnaW4tdHlwZXNjcmlwdDInO1xuaW1wb3J0IHtlbnZDb25maWd9IGZyb20gJ3ZpdGUtcGx1Z2luLWVudi1jb25maWcnO1xuaW1wb3J0IHtjaHVua1NwbGl0UGx1Z2lufSBmcm9tICd2aXRlLXBsdWdpbi1jaHVuay1zcGxpdCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgdHlwZXNjcmlwdDIoe1xuICAgICAgY2hlY2s6IGZhbHNlLFxuICAgICAgY2xlYW46IHRydWUsXG4gICAgICBpbmNsdWRlOiBbJ3NyYy9jb21wb25lbnRzLyoudnVlJ10sXG4gICAgICB0c2NvbmZpZ092ZXJyaWRlOiB7XG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgIHNvdXJjZU1hcDogdHJ1ZSxcbiAgICAgICAgICBkZWNsYXJhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk1hcDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgZXhjbHVkZTogWyd2aXRlLmNvbmZpZy50cycsICdtYWluLnRzJ10sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGVudkNvbmZpZyh7XG4gICAgICBwcmVmaXg6ICdWSVRFQ09ORklHXycsXG4gICAgICBzZXBhcmF0b3I6ICdfJyxcbiAgICB9KSxcbiAgICBjaHVua1NwbGl0UGx1Z2luKHtcbiAgICAgIHN0cmF0ZWd5OiAnc2luZ2xlLXZlbmRvcicsXG4gICAgICBjdXN0b21TcGxpdHRpbmc6IHtcbiAgICAgICAgJ3ZhbmlsbGEtanNvbmVkaXRvcic6IFsvdmFuaWxsYS1qc29uZWRpdG9yL10sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0sXG4gIGRlZmluZTp7XG4gICAgX19WVUVfUFJPRF9IWURSQVRJT05fTUlTTUFUQ0hfREVUQUlMU19fOiBmYWxzZVxuICB9LFxuICBidWlsZDoge1xuICAgIGNzc0NvZGVTcGxpdDogZmFsc2UsXG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogJy4vc3JjL0pzb25FZGl0b3JQbHVnaW4udHMnLFxuICAgICAgZm9ybWF0czogWydlcyddLFxuICAgICAgbmFtZTogJ0pzb25FZGl0b3JQbHVnaW4nLFxuICAgICAgZmlsZU5hbWU6ICgpID0+ICdpbmRleC5tanMnLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHZ1ZTogJ1Z1ZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1UsU0FBUSxlQUFlLFdBQVU7QUFFelcsU0FBUSxvQkFBbUI7QUFDM0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVEsaUJBQWdCO0FBQ3hCLFNBQVEsd0JBQXVCO0FBTjZLLElBQU0sMkNBQTJDO0FBUzdQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVMsQ0FBQyxzQkFBc0I7QUFBQSxNQUNoQyxrQkFBa0I7QUFBQSxRQUNoQixpQkFBaUI7QUFBQSxVQUNmLFdBQVc7QUFBQSxVQUNYLGFBQWE7QUFBQSxVQUNiLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsUUFDQSxTQUFTLENBQUMsa0JBQWtCLFNBQVM7QUFBQSxNQUN2QztBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsVUFBVTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLElBQ2IsQ0FBQztBQUFBLElBQ0QsaUJBQWlCO0FBQUEsTUFDZixVQUFVO0FBQUEsTUFDVixpQkFBaUI7QUFBQSxRQUNmLHNCQUFzQixDQUFDLG9CQUFvQjtBQUFBLE1BQzdDO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQU87QUFBQSxJQUNMLHlDQUF5QztBQUFBLEVBQzNDO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxjQUFjO0FBQUEsSUFDZCxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUMsSUFBSTtBQUFBLE1BQ2QsTUFBTTtBQUFBLE1BQ04sVUFBVSxNQUFNO0FBQUEsSUFDbEI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
