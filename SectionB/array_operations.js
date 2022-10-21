db.students.insertOne({
    "_id" : 1,
    "name" : {
        "firstname" : "John",
        "lastname" : "Doe"
    },
    "address" : {
        "city" : "Gurugram",
        "state" : "Haryana",
        "country" : "India"
    },
    "marks" : [90,56,77]
})

db.students.insertOne({
    "_id" : 2,
    "name" : {
        "firstname" : "Kunal",
        "lastname" : "Sharma"
    },
    "address" : {
        "city" : "Gurugram",
        "state" : "Haryana",
        "country" : "India"
    },
    "marks" : [78,86,70]
})

db.students.insertOne({
    "_id" : 3,
    "name" : {
        "firstname" : "Raman",
        "lastname" : "Gupta"
    },
    "address" : {
        "city" : "Gurugram",
        "state" : "Haryana",
        "country" : "India"
    },
    "marks" : [60,86,60]
})

// $
db.students.updateOne(
    {_id : 2, marks : 70},
    {$set : {
        "marks.$" : 80
    }}
)

db.students.updateOne(
    {_id : 2},
    {$addToSet : {
        "marks" : 85
    }}
)

db.students.updateOne(
    {_id : 3},
    {$push : {
        "marks" : 95
    }}
)

db.students.updateOne(
    {_id : 1},
    {$push : {
        "marks" : {
            $each : [67,78]
        }
    }}
)

// Pop element from right
db.students.updateOne(
    {_id : 1},
    {$pop : {
        "marks" : 1
    }}
)

// Pop element from left
db.students.updateOne(
    {_id : 1},
    {$pop : {
        "marks" : -1
    }}
)


db.students.updateOne(
    {_id : 1},
    {$pull : {
        "marks" : {
            $lt : 65
        }
    }}
)


db.students.updateOne(
    {_id : 3},
    {$pullAll : {
        "marks" : [60,90]
    }}
)


db.students.updateOne(
    {_id : 1},
    {$push : {
        "marks" : {
            $each : [99,100],
            $slice : -5
        }
    }}
)

// Insert at a position
db.students.updateOne(
    {_id : 2},
    {$push : {
        "marks" : {
            $each : [99,91],
            $position : 2
        }
    }}
)

// Update on a specific index
db.my_collection.update(
    {_id : 1},
    {$set : {"my_array.1.content" : "New content B"}}
)