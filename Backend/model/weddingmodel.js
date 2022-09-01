const mongoose = require("mongoose");

const weddingSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
    },
    orderId: {
      type: String,
    },
    userId: {
      type: String,
    },
    points:{
      type:String
    },
    ClientName: {
      type: String,
    },
    BrideName: {
      type: String,
    },
    GroomName: {
      type: String,
    },
    date: {
      type: String,
    },
    FromDate: {
      type: String,
    },
    ToData: {
      type: String,
    },
    NoOfGuests: {
      type: Number,
    },
    MinBudget: {
      type: String,
      required: true,
    },
    MaxBudget: {
      type: String,
      required: true,
    },
    City: {
      type: String,
    },
    Services: [
      {
        type: String,
      },
    ],

    Servicevalue: {
      Mehandi: {
        DateMehandiShow: {
          type: String,
        },
        TimeMehandiShow: {
          type: String,
        },
      },
      Reception: {
        DateReception: {
          type: String,
        },
        TimeReception: {
          type: String,
        },
      },
      Phera: {
        DateMehandiShow: {
          type: String,
        },
        TimeMehandiShow: {
          type: String,
        },
      },
      Sangeet: {
        DateSangeet: {
          type: String,
        },
        TimeSangeet: {
          type: String,
        },
      },
      Pooja: {
        DatePooja: {
          type: String,
        },
        TimePooja: {
          type: String,
        },
      },
      Baraat: {
        DateBaraat: {
          type: String,
        },
        TimeBaraat: {
          type: String,
        },
      },
      Baraat: {
        DateBaraat: {
          type: String,
        },
        TimeBaraat: {
          type: String,
        },
      },
      Haldi: {
        DateHaldi: {
          type: String,
        },
        TimeHaldi: {
          type: String,
        },
      },
      Tilak: {
        dateTilak: {
          type: String,
        },
        TimeTilak: {
          type: String,
        },
      },
    },
    Shows: {
      show: [
        {
          type: String,
        },
      ],
      musicvalues: {
        type: String,
      },
      dancevalues: {
        type: String,
      },
      dj: {
        type: String,
      },
    },
    ConceptWedding: {
      type: String,
    },
    ThemeWedding: {
      type: String,
    },
    Decoration: {
      RegularDecoration: {
        type: String,
      },
      ThemeDecoration: {
        type: String,
      },
    },
    SpecialService: {
      type: String,
    },
    OtherServices: [
      {
        type: String,
      },
    ],
    OtherServiceValues: {
      invitation: {
        type: String,
      },
      photography: {
        type: Object,
      },
      venues: {
        venue1: {
          name: {
            type: String,
          },
          place: {
            type: String,
          },
        },
        venue2: {
          name: {
            type: String,
          },
          place: {
            type: String,
          },
        },
        venue3: {
          name: {
            type: String,
          },
          place: {
            type: String,
          },
        },
      },
    },

    Food: {
      Foodtype: {
        type: String,
      },
      items: {
        type: String,
      },
    },
    venueStatus: {
      type: String,
    },
    decorationStatus: {
      type: String,
    },
    photographyStatus: {
      type: String,
    },
    cateringStatus: {
      type: String,
    },
    foodb: {
      type: Boolean,
    },
    venueb: {
      type: Boolean,
    },
    photographyb: {
      type: Boolean,
    },
    decorationb: {
      type: Boolean,
    },
    isVerified: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const WeddingForm = mongoose.model("WeddingForm", weddingSchema);

exports.WeddingForm = WeddingForm;
