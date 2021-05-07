class backpack {
    constructor(color, size){
        this.color = color;
        this.size = size;
        this.items = [];
        this.open = Boolean();

    }

    openBag() {
        this.open = 1;
        console.log("opened");
    }

    closeBag() {
        this.open = 0;
        console.log("closed");
    }

    putIn(item){
        this.items.push(item);
        for (let a=this.items.length; a>0; a--){
            for (let i=0; i<a; i++){
                if (this.items[i] > this.items[i+1]){
                    let x = this.items[i+1];
                    this.items[i+1] = this.items[i];
                    this.items[i] = x;
                }
            }
        }
        console.log(this.items);
    }

    takeOut(item) { 

        let UI = this.items.length-1;
        let LI = 0;
        while (UI>=LI){
            let MI = Math.floor((UI+LI)/2);
            if (this.items[MI] == item){
                this.items.splice(MI,1);
                console.log(this.items);
                return -1;
            } else if (this.items[MI] > item) {
                UI = MI - 1;
                
            } else {
                LI = MI + 1;
            }
        }
        console.log("that dosn't exist");
        return -1;
    }
}

let backpack1 = new backpack("blue","small");
console.log (backpack1);
let backpack2 = new backpack("red","medium");
console.log (backpack2);
let backpack3 = new backpack("green", "large");
console.log (backpack3);

backpack1.openBag();
backpack1.putIn("lunch");
backpack1.putIn("jacket");
backpack1.closeBag();
backpack1.openBag();
backpack1.takeOut("jacket");
backpack1.closeBag();