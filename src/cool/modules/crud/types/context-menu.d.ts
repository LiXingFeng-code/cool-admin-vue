export declare interface ContextMenuItem {
	label: string;
	"prefix-icon"?: string;
	"suffix-icon"?: string;
	ellipsis?: boolean;
	disabled?: boolean;
	hidden?: boolean;
	children?: Array<ContextMenuItem>;
	showChildren?: boolean;
	callback?(item: ContextMenuItem, done: Function): void;
}

export declare interface ContextMenuOptions {
	list?: ContextMenuItem[];
}
