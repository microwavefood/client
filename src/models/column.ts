export interface Column<T> {
	name: string;
	Header: () => JSX.Element;
	Cell: (row: any) => JSX.Element;
}
