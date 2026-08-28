// Used to store an ordered list of values | Access using numeric indexes
// Used to store properties of an entity | Access using property names (keys)

let obj = {
    name : "harsh",
    age : 26,
    khana : "Daal Chawl",    
}

// we can access using two ways : 
obj.name;
obj['age'];

let aa = "name";

// THis below lines makes js find aa in the obj as property which does not exist
obj.aa;

// that's why we prefer to use below method : which afterward substitute value of aa : obj["name"]
obj[aa];