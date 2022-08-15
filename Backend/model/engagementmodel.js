const mongoose = require('mongoose')

const engagementSchema = new mongoose.Schema({
    ClientName:{
        type:String
    },
    BrideName:{
        type:String
    },
    GroomName:{
        type:String
    },    
    date :{
        type : String,
    },
    FromDate:{
        type : String,
      },
      ToData:{
        type : String,
      },
    NoOfGuests:{
        type : Number,
    },
    MinBudget: {
        type : String,
    required : true,
    },
    MaxBudget: {
        type : String,
        required : true,
    },
    Age :{
        type : Number
       },
      Gender:{
        type : String,
       },
      City:{
        type : String,
       },
       Shows:{
        show:[{
            type : String,
        }],
        musicvalues :{
            type : String,
        },
        dancevalues :{
            type : String,
        },
        dj:{
            type : String,
        }

    },
    Decoration:{
        RegularDecoration:{
            type : String,
        },
        ThemeDecoration:{
            type : String
        }
    },
    SpecialService:{
        type : String
    },
    OtherServices :[{
        type : String
    }],
    OtherServiceValues:{
        invitation :{
            type:String
        },
        Photography:{
            type:Object
        },
        mehandi:{
            type:Object
        },
        venues:{
            venue1:{
                name:{
                    type:String
                },
                place:{
                    type:String
                }
            },
            venue2:{
                name:{
                    type:String
                },
                place:{
                    type:String
                }
            },
            venue3:{
                name:{
                    type:String
                },
                place:{
                    type:String
                }
            }
        }
    },

    Food :{
        Foodtype:{
            type:String
        },
        items:{
            type:String
        }
    }

},{
    timestamps:true
    
})


const EngagementForm = mongoose.model('EngagementForm',engagementSchema)

exports.EngagementForm = EngagementForm