import { ItemView, WorkspaceLeaf } from "obsidian";

// This file handles the side panel interface for the plugin.


export const VIEW_TYPE_EXAMPLE = "copilot-view";

export class CopilotView extends ItemView {
    constructor(leaf: WorkspaceLeaf) {
        super(leaf);
    }

    getViewType() {
        return VIEW_TYPE_EXAMPLE;
    }

    getDisplayText() {
        return "Obsidian Copilot";
    }

    async onOpen() {
        // create the frame for this link https://edgeservices.bing.com/edgesvc/shell

        const container = this.containerEl.children[1];
        container.empty();
        container.createEl("h1", { text: "Bing Copilot for Obsidian" });
        const iframe = container.createEl("iframe", {
            attr: {
                src: "https://edgeservices.bing.com/edgesvc/chat?udsframed=1&form=SHORUN&clientscopes=chat,noheader,channelstable,&shellsig=6de7da44d1b3f7278f74106f0aded8f7e5ff69a9&setlang=en-US&darkschemeovr=1",
                style: "width: 100%; height: 100%;",
                id: "underside-iframe-container",
                name: "underside-iframe-container",
                frameborder: "0",
                allow: "clipboard-write"

            }
        });
        iframe.addClass("copilot-iframe");
    }

    async onClose() {
        // Nothing to clean up.
    }
}