class channels {
    constructor(id,name){
      this.id = id;
      this.name = name;
    }
}

class messages{
    constructor(id,ifSucceded,content){
        this.id = id;
        this.ifSucceded = ifSucceded;
        this.content = content;
    }
}



class SingleItem {
    render() {
      let singleChannel = this.props.singleChannel;
  
      return (
          <li onClick={this.props.onClick}>
              <div> {singleChannel.name} </div>
          </li>
      );
    }
}


class ItemList  {
    render() {
      let itemArr = this.props.allItems;
      let myItems = this.props.channels;
      let handleEvent = this.props.handleEvent;
 
      let listItems = itemArr.map((itemObj) => {
         if (!myItems.includes(itemObj.id)) return null;
 
         return <SingleItem 
           key={itemObj.id}
           data={itemObj}
           onClick={() => handleEvent(itemObj.id)}
         />;
      });
 
      return (
         <ul>
             {listItems}
         </ul>
      );
    }
}

export {channels, messages, ItemList, SingleItem}