class HashTable {
    constructor(size){
        this.buckets = Array(size);
        this.numBuckets = this.buckets.length
    }
    hash(key){
        let total = 0
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total%this.numBuckets;
    }
    insert(key, value){
        const index = this.hash(key)
        if(!this.buckets[index]){
            this.buckets[index] = new Node(key, value)
        } else {
            const currentNode = this.buckets[index]
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = new Node(key, value)
        }
    }
    delete(key){
        const index = this.hash(key)
        // if nothing in the bucket
        if(!this.buckets[index]){
            return
        }
        //if node has no children
        if(this.buckets[index]&&!this.buckets[index].next){
            this.buckets.splice(index+1,1,null)
        }
        //if node has children
    }
}

class Node{
    constructor(key, value, next = null){
        this.key = key
        this.value = value
        this.next = next
    }
}

const hashTable = new HashTable(30)
hashTable.insert('Dean', "dean@gmail.com")
hashTable.insert("Megan", "megan@gmail.com")
hashTable.insert("Dane", "dane@hotmail.com")

console.log(hashTable)