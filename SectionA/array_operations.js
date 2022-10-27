db.students.insertMany([
    {
        "_id" : 1,
        "name" : "Max",
        "marks" : [67,99,54]
    },
    {
        "_id" : 2,
        "name" : "Sam",
        "marks" : [60,56,74]
    },
    {
        "_id" : 3,
        "name" : "Neo",
        "marks" : [79,81,70]
    }
])

// $
db.students.updateOne(
    {"_id" : 2, marks : 74},
    {
        $set : {"marks.$" : 78}
    }
)

// $push
db.students.updateOne(
    {"_id" : 2},
    {
        $push : {"marks" : 90}
    }
)


// $addToSet
db.students.updateOne(
    {"_id" : 2},
    {
        $addToSet : {"marks" : 90}
    }
)

// $each
db.students.updateOne(
    {"_id" : 1},
    {
        $push : {
            "marks" : {
                $each : [70,60]
            }
        }
    }
)


// $pop
// -1 : delete from left
// 1 : delete from right
db.students.updateOne(
    {"_id" : 1},
    {
        $pop : {
            "marks" : 1
        }
    }
)

// $pull
db.students.updateOne(
    {"_id" : 1},
    {
        $pull : {
            "marks" : {
                $lt : 70
            }
        }
    }
)


// $pullAll
db.students.updateOne(
    {"_id" : 2},
    {
        $pullAll : {
            "marks" : [78, 90]
        }
    }
)

// Insert at specific position
db.students.updateOne(
    {"_id" : 2},
    {
        $push : {
            "marks" : {
                $each : [78, 90],
                $position : 1
            }
        }
    }
)

// $slice
db.students.updateOne(
    {"_id" : 1},
    {
        $push : {
            "marks" : {
                $each : [78, 90, 50, 40],
                $slice : 4
            }
        }
    }
)