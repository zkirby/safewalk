/* 
    let e = new event();

    e.subscribe('on_update', (data)=>{ update_state(data) })

    e.publish('on_update', new_index);

*/
export default class Event {
    constructor() {
        this.names = {}
    }

    subscribe(event, fn) {
        if( this.names[event] ) {
            this.names[event].push(fn);
        } else {
            this.names[event] = [fn];
        }
    }

    publish(event, data) {
        if(this.names[event]) {
            this.names[event].map((fn) => (fn(data)));
        }
    }
}