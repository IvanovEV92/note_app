export const DBConfig = {
	name: 'MyDB',
	version: 1,
	objectStoresMeta: [
		{
			store: 'notes',
			storeConfig: { keyPath: 'id', autoIncrement: true },
			storeSchema: [
				{ name: 'topic', keypath: 'topic', options: { unique: false } },
				{ name: 'date', keypath: 'date', options: { unique: false } },
				{ name: 'edit', keypath: 'edit', options: { unique: false } },
			],
		},
	],
};
