import path from "path";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugns";
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve";
import { buildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWbpackConfig(options:buildOptions): webpack.Configuration {
    const {mode, paths, isDev, port} = options

  return {
    mode: mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolve(),
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    devtool: isDev? "inline-source-map":undefined,
    devServer: isDev ? buildDevServer(options):undefined
  };
}


