import type { GlobalState } from "@mattermost/types/store";
import type { Action, Store } from "redux";
import manifest from "~/../../plugin.json";
import css from "~/styles/override.module.css?raw";
import js from "~/styles/override.module.js?raw";
import type { PluginRegistry } from "~/types/mattermost";

// https://developers.mattermost.com/integrate/reference/webapp/webapp-reference
export default class Plugin {
	public initialize(_registry: PluginRegistry, _store: Store<GlobalState, Action<string>>) {
		const style = document.createElement("style");
		style.textContent = css;
		document.head.appendChild(style);
		const script = document.createElement("script");
		script.src = "~/styles/override.module.js"; // Specify the source of the script.
		script.defer = true; // Add defer attribute.
		document.body.appendChild(script);
	}
}

declare global {
	interface Window {
		registerPlugin(pluginId: string, plugin: Plugin): void;
	}
}

window.registerPlugin(manifest.id, new Plugin());
