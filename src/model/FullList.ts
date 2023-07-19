import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    loadList() : void, 
    saveList(): void,
    clearList(): void,
    addItem(itemObj: ListItem):void,
    removeItem(id: string): void,
}

export default class FullList implements List{
    static instance: FullList = new FullList()   // Creating an instance of FullList, to create only 1 list
                                                 // since we'll only be having a single list
    private constructor (private _list: ListItem[] = []){}

    get list():ListItem[]{
        return this._list
    }

    loadList(): void {
        const storedList: string | null = localStorage.getItem("myList")
        if(typeof storedList !== "string") return
        const parsedList: {_id: string, _item: string, _status: boolean}[] = JSON.parse(storedList)

        parsedList.forEach(itemInList =>{
            const newListItem = new ListItem(itemInList._id, itemInList._item, itemInList._status)
            FullList.instance.addItem(newListItem)
        })
    }

    saveList(): void {
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        console.log(this.list)
        this.saveList()
    }

    removeItem(id: string): void {
        if (this._list.length > 0) this._list.splice(parseInt(id)-1, 1) // this is not the right way
        console.log(this.list)
        this.saveList()
    }

    clearList(): void {
        this._list = []
        this.saveList()
    }
}