const mongoose = require("mongoose");

const CorporateEventSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    TypeOfFunction: {
      type: String,
      required: true,
    },
    NameOfEvent: {
      type: String,
    },
    NameOfConcern: {
      type: String,
    },
    date: {
      type: Number,
    },
    FromTime: {
      type: String,
    },
    ToTime: {
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
      Photography: {
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
  },
  {
    timestamps: true,
  }
);

const CorporateEventForm = mongoose.model(
  "CorporateEventForm",
  CorporateEventSchema
);

exports.CorporateEventForm = CorporateEventForm;
