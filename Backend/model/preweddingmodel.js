const mongoose = require("mongoose");

const preweddingSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
    },
    orderId : {
      type: String
    },
    userId: {
      type: String,
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
    MinBudget: {
      type: String,
      required: true,
    },
    MaxBudget: {
      type: String,
      required: true,
    },
    BachelorsPartyDate: {
      type: String,
    },
    ShootingDate: {
      type: String,
    },
    Person: {
      type: String,
    },
    City: {
      type: String,
    },
    SpecialService: {
      type: String,
    },
    Shooting: {
      Shooting: [
        {
          type: String,
        },
      ],
      Destination: {
        type: String,
      },
    },
    BachelorsParty: {
      musicvalues: {
        type: String,
      },
      dancevalues: {
        type: Object,
      },
      noofguests: {
        type: Number,
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
    shootingb: {
      type: Boolean,
    },
    // decorationb: {
    //   type: Boolean,
    // },
    isVerified: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const PreWeddingForm = mongoose.model("PreWeddingForm", preweddingSchema);

exports.PreWeddingForm = PreWeddingForm;
