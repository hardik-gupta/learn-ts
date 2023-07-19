export interface Item {
    id: string,
    item: string,
    status: boolean,
}

export default class ListItem implements Item{
    constructor(private _id : string = ' ',
                private _item: string = ' ',
                private _status: boolean = false){}
    
    
    get id():string{
        return this._id
    }
    set id(id:string){
        this._id = id
    }

    get item():string{
        return this._item
    }
    set item(item:string){
        this._item = item
    }

    get status():boolean{
        return this._status
    }
    set status(status:boolean){
        this._status = status
    }
}