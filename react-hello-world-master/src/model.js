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

export {channels, messages}