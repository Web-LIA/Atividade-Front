export type RowData = {
    id: string
    [key: string]: string
}

export type TableRowMethods = {
    removeRow: (id: string) => void
    setEditRowId: React.Dispatch<React.SetStateAction<string>>
    setEditKeyIndex: React.Dispatch<React.SetStateAction<number>>
}

export type TableRowProps = {
    rowData: RowData
    keys: string[]
    editMode: boolean
    idVisibility: boolean
    methods: TableRowMethods
}

export type TableRowEditMethods = {
    removeRow: (id: string) => void
    editRow: (editedRowData: RowData) => void
}

export type TableRowEditProps = {
    rowData: RowData
    keys: string[]
    methods: TableRowEditMethods
    idVisibility: boolean
}

export type FormAddColumnProps = {
    keys: string[]
    setNewKey: React.Dispatch<React.SetStateAction<string>>
    addColumn: (e: React.FormEvent<HTMLFormElement>) => void
    inputRef: React.MutableRefObject<HTMLInputElement | null>
}

export type FormAddRowProps = {
    keys: string[]
    data: RowData[]
    updateNewRowData: (e: React.ChangeEvent<HTMLInputElement>) => void
    addRow: (e: React.FormEvent<HTMLFormElement>) => void
}

export type TableHeaderMethods = {
    removeColumn: (removeKey: string) => void
    discardChanges: () => void
    setEditKeyIndex: React.Dispatch<React.SetStateAction<number>>
    editColumnKey: (editedKeys: string[]) => void
    setEditRowId: React.Dispatch<React.SetStateAction<string>>
}

export type TableHeaderProps = {
    keys: string[]
    editMode: boolean
    idVisibility: boolean
    editKeyIndex: number
    methods: TableHeaderMethods
}