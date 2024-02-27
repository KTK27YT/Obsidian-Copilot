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


        // check if the class theme-dark exists
        console.log(document.body.classList);
        const theme = document.body.classList.contains("theme-dark") ? "&darkschemeovr=1" : "";
        const url = "https://edgeservices.bing.com/edgesvc/chat?udsframed=1&form=SHORUN&clientscopes=chat,noheader,channelstable,&setlang=en-US" + theme


        const container = this.containerEl.children[1];
        container.empty();
        const div = container.createEl("div", {
            attr: {
                style: "width: 100%; height: 100%; border-radius: 10px; margin: 0px; padding: 0px; overflow: hidden;"
            }
        });
        const iframe = div.createEl("iframe", {
            attr: {
                src: url,
                style: "width: 100%; height: 100%;",
                id: "underside-iframe-container",
                name: "underside-iframe-container",
                frameborder: "0",
                allow: "clipboard-write",


            }
        });
        iframe.addClass("copilot-iframe");
    }

    async onClose() {
        // Nothing to clean up.
    }
}