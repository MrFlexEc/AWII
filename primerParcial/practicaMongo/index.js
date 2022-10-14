const mongoose = require('mongoose');

const connectionURL = "mongodb+srv://admin:root@cluster0.hobrkqe.mongodb.net/test";

(async ()=>{
try {
    const StateConnection = await mongoose.connect(connectionURL);
    /**
     * const Group = mongoose.model("Group", {name:String});
    
    const Permission = mongoose.model("Permission", {name:String});

    const User = mongoose.model("User", {
        name:String, 
        idGroup: {type: mongoose.Types.ObjectId, ref:"Group"},
        permissions:[{
            permission: {type: mongoose.Schema.Types.ObjectId, ref:"Permission"},
            state: {type:Boolean}
        }]
    });

    const group1 = new Group({name:"Administradores"});
    const saveGroup = await group1.save();

    const permission1 = new Permission({name:"Grabar"});
    const savePermission1 = await permission1.save();
    const permission2 = new Permission({name: "Eliminar"});
    const savePermission2 = await permission2.save();

    const user1 = new User({
        name:"Usuario de prueba",
        idGroup: saveGroup._id,
        permissions: [
            {permission: savePermission1._id, state:true},
            {permission: savePermission2._id, state:true},
        ]
    })

    const userSave = await user1.save();

    const result = await User.find()
    .populate("idGroup")
    .populate("permissions.permission");

    console.log(result[result.length-1].permissions);
     */
    
} catch (error) {
    console.log(error.message);
}
})();