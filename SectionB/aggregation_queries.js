db.persons.aggregate([
    {
        $match : {
            gender : "male"
        }
    }
])

db.persons.aggregate([
    {
        $group : {
            _id : {
                gender : "$gender"
            },
            total : {
                $sum : 1
            }
        }
    }
])


db.persons.aggregate([
    {
        $match : {
            gender : "male"
        }
    },
    {
        $group : {
            _id : {
                location : "$location.state"
            },
            total : {
                $sum : 1
            }
        }
    }
])

db.persons.aggregate([
    {
        $match : {
            gender : "male"
        }
    },
    {
        $project : {
            _id : 0,
            name : 1,
            gender : 1
        }
    }
])

db.persons.aggregate([
    {
        $match : {
            gender : "male"
        }
    },
    {
        $project : {
            _id : 0,
            gender : 1,
            fullName : {
                $concat : ["$name.title",". " , "$name.first", " ", "$name.last"]
            }
        }
    }
])

db.persons.aggregate([
    {
        $match : {
            gender : "male"
        }
    },
    {
        $project : {
            _id : 0,
            gender : 1,
            fullName : {
                $concat : [
                    {$toUpper : "$name.title"}, ". ",
                    {$toUpper : "$name.first"}, " ",
                    {$toUpper : "$name.last"}
                ]
            }
        }
    }
])

db.persons.aggregate([
    {
        $match : {
            gender : "male"
        }
    },
    {
        $project : {
            _id : 0,
            gender : 1,
            fullName : {
                $concat : [
                    {
                        $toUpper : {$substrCP : ["$name.title", 0, 1]}
                    },
                    {
                        $substrCP : [
                            "$name.title" , 1, 
                            {
                                $subtract : [{$strLenCP : "$name.title"}, 1]
                            }
                        ]
                    },
                    ". ",
                    {
                        $toUpper : {$substrCP : ["$name.first", 0, 1]}
                    },
                    {
                        $substrCP : [
                            "$name.first" , 1, 
                            {
                                $subtract : [{$strLenCP : "$name.first"}, 1]
                            }
                        ]
                    },
                    " ",
                    {
                        $toUpper : {$substrCP : ["$name.last", 0, 1]}
                    },
                    {
                        $substrCP : [
                            "$name.last" , 1, 
                            {
                                $subtract : [{$strLenCP : "$name.last"}, 1]
                            }
                        ]
                    }
                ]
            }
        }
    }
])