// aggregation - $lookup
// {
//     $lookup : {
//         from : collection to join,
//         localField : input field to join / primary key,
//         foreignField : field of collection to join,
//         as : output array field
//     }
// }

db.users.aggregate([
    {
        $project : {
            name : 1,
            email : 1,
            city : 1,
        }
    },
    {
        $lookup : {
            from : "cart",
            localField : "email",
            foreignField : "email",
            as : "output"
        }
    }
])

db.users.aggregate([
    {
        $project : {
            name : 1,
            email : 1,
            city : 1,
        }
    },
    {
        $lookup : {
            from : "cart",
            localField : "email",
            foreignField : "email",
            as : "output"
        }
    },
    {
        $lookup : {
            from : "products",
            localField : "output.items.product_id",
            foreignField : "p_id",
            as : "output_2"
        }
    }
])

db.users.aggregate([
    {
        $project : {
            name : 1,
            email : 1,
            city : 1,
        }
    },
    {
        $lookup : {
            from : "cart",
            localField : "email",
            foreignField : "email",
            as : "output"
        }
    },
    {
        $lookup : {
            from : "products",
            localField : "output.items.product_id",
            foreignField : "p_id",
            as : "output_2"
        }
    },
    {
        $project : {
            name : 1,
            "output_2.name" : 1,
            "output_2.brand" : 1,
            "output_2.price" : 1,
        }
    }
])